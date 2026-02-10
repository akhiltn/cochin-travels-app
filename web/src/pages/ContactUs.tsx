import {
  Box,
  Container,
  Heading,
  HStack,
  Icon,
  Input,
  SimpleGrid,
  Textarea,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import emailjs from "@emailjs/browser";
import { Field } from "@/components/ui/field";
import { NativeSelectField, NativeSelectRoot } from "@/components/ui/native-select";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { LuClock, LuMail, LuMapPin, LuPhone } from "react-icons/lu";

// --------------------------------
// Constants
// --------------------------------

const ENQUIRY_TYPES = [
  "Sabarimala Darshan",
  "Sabarimala Taxi Package",
  "Group Pilgrimage",
  "South India Tour",
  "Custom Package",
];

// 🔐 EmailJS config (your real values)
const SERVICE_ID = "service_vbz5h4l";
const TEMPLATE_ID = "template_g4isqi6";
const PUBLIC_KEY = "X22BZOaxvaap2RSJh";

// --------------------------------
// Helpers
// --------------------------------

const isValidEmail = (value: string) => {
  if (!value) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

// --------------------------------
// Component
// --------------------------------

export default function ContactUs() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [enquiryType, setEnquiryType] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{
    contact?: string;
    email?: string;
    enquiryType?: string;
    message?: string;
  }>({});

  // --------------------------------
  // React Query mutation
  // --------------------------------

  const mutation = useMutation({
    mutationFn: () =>
      emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name,
          mobile: phone,
          email,
          enquiry_type: enquiryType,
          message,
        },
        PUBLIC_KEY
      ),

    onSuccess: () => {
      // Reset all fields
      setName("");
      setPhone("");
      setEmail("");
      setEnquiryType("");
      setMessage("");
      setErrors({});
    },
  });

  // --------------------------------
  // Submit handler (NO <form>)
  // --------------------------------

  const handleSubmit = (event?: React.FormEvent) => {
    event?.preventDefault();

    // Either phone OR email required
    const nextErrors: typeof errors = {};
    if (!phone.trim() && !email.trim()) {
      nextErrors.contact =
        "Please provide either a mobile number or an email address.";
    }

    if (email && !isValidEmail(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!enquiryType) {
      nextErrors.enquiryType = "Please select an enquiry type.";
    }

    if (!message.trim()) {
      nextErrors.message = "Please enter your requirement.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    mutation.mutate();
  };

  // --------------------------------
  // JSX
  // --------------------------------

  return (
    <Box id="contactus" py={{ base: 12, md: 20 }}>
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 10, md: 16 }}>
          <VStack gap={6} align="start">
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="900"
            >
              Contact Cochin Travels
            </Heading>
            <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }}>
              Share your travel requirements and we’ll get back to you shortly
              with tailored options.
            </Text>

            <VStack align="start" gap={4} w="full">
              <HStack gap={3}>
                <Icon as={LuPhone} color="blue.600" />
                <Text fontWeight="600">+91 90379 80745</Text>
              </HStack>
              <HStack gap={3}>
                <Icon as={LuMail} color="blue.600" />
                <Text>mail@cochintravels.com</Text>
              </HStack>
              <HStack gap={3}>
                <Icon as={LuMapPin} color="blue.600" />
                <Text>Cochin, Kerala, India</Text>
              </HStack>
            </VStack>

            <Box w="full" borderTopWidth="1px" />

            <HStack gap={3}>
              <Icon as={LuClock} color="green.500" />
              <Text color="fg.muted">We usually respond within 24 hours.</Text>
            </HStack>
          </VStack>

          <Box
            bg={{ base: "white", _dark: "gray.900" }}
            borderWidth="1px"
            borderRadius="xl"
            p={{ base: 5, md: 8 }}
            boxShadow="sm"
          >
            <VStack
              as="form"
              gap={5}
              align="stretch"
              onSubmit={handleSubmit}
            >
              <Field label="Full Name" optionalText="Optional">
                <Input
                  placeholder="Your name"
                  size="lg"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                />
              </Field>

              <Field
                label="Mobile Number"
                helperText="Provide a phone number or email address."
                errorText={errors.contact}
              >
                <Input
                  placeholder="Mobile number"
                  size="lg"
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.contact) {
                      setErrors((prev) => ({ ...prev, contact: undefined }));
                    }
                  }}
                  autoComplete="tel"
                />
              </Field>

              <Field label="Email Address" errorText={errors.email}>
                <Input
                  placeholder="Email address"
                  size="lg"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email || errors.contact) {
                      setErrors((prev) => ({
                        ...prev,
                        email: undefined,
                        contact: undefined,
                      }));
                    }
                  }}
                  autoComplete="email"
                />
              </Field>

              <Field label="Enquiry Type" required errorText={errors.enquiryType}>
                <NativeSelectRoot size="lg">
                  <NativeSelectField
                    value={enquiryType}
                    onChange={(e) => {
                      setEnquiryType(e.target.value);
                      if (errors.enquiryType) {
                        setErrors((prev) => ({
                          ...prev,
                          enquiryType: undefined,
                        }));
                      }
                    }}
                    items={ENQUIRY_TYPES}
                  >
                    <option value="">Select enquiry type</option>
                  </NativeSelectField>
                </NativeSelectRoot>
              </Field>

              <Field label="Requirements" required errorText={errors.message}>
                <Textarea
                  rows={5}
                  placeholder="Travel date, number of people, pickup location"
                  size="lg"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) {
                      setErrors((prev) => ({ ...prev, message: undefined }));
                    }
                  }}
                />
              </Field>

              {mutation.isError && (
                <Alert status="error" title="Could not send enquiry">
                  Please try again in a few minutes.
                </Alert>
              )}

              {mutation.isSuccess && (
                <Alert status="success" title="Enquiry sent">
                  We’ve received your message and will contact you shortly.
                </Alert>
              )}

              <Button
                size="lg"
                width="full"
                type="submit"
                loading={mutation.isPending}
                loadingText="Sending..."
                colorPalette="blue"
              >
                Submit Enquiry
              </Button>
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
