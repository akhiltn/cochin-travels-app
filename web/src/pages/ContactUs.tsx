import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Textarea,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import emailjs from "@emailjs/browser";

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
  const [validationError, setValidationError] = useState("");

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
    },
  });

  // --------------------------------
  // Submit handler (NO <form>)
  // --------------------------------

  const handleSubmit = () => {
    setValidationError("");

    // Either phone OR email required
    if (!phone.trim() && !email.trim()) {
      setValidationError(
        "Please provide either a mobile number or an email address."
      );
      return;
    }

    if (email && !isValidEmail(email)) {
      setValidationError("Please enter a valid email address.");
      return;
    }

    if (!enquiryType) {
      setValidationError("Please select an enquiry type.");
      return;
    }

    if (!message.trim()) {
      setValidationError("Please enter your requirement.");
      return;
    }

    mutation.mutate();
  };

  // --------------------------------
  // JSX
  // --------------------------------

  return (
    <Box id="contact" py={{ base: 12, md: 20 }}>
      <Container maxW="5xl">
        <VStack gap={8} align="start">
          <Heading fontSize={{ base: "2xl", md: "3xl" }} fontWeight="900">
            Contact Cochin Travels
          </Heading>

          <Text color="fg.muted">
            Share your travel requirements and we’ll get back to you shortly.
          </Text>

          <VStack gap={5} w="100%">
            {/* Full Name */}
            <Input
              placeholder="Full Name *"
              size="lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {/* Mobile */}
            <Input
              placeholder="Mobile Number"
              size="lg"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            {/* Email */}
            <Input
              placeholder="Email Address (optional)"
              size="lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Enquiry Type */}
            <select
              value={enquiryType}
              onChange={(e) => setEnquiryType(e.target.value)}
              style={{
                width: "100%",
                height: "48px",
                padding: "0 12px",
                borderRadius: "6px",
                fontSize: "16px",
                border: "1px solid",
                backgroundColor: "var(--chakra-colors-bg)",
                color: "var(--chakra-colors-fg)",
              }}
            >
              <option value="">Select enquiry type</option>
              {ENQUIRY_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            {/* Message */}
            <Textarea
              rows={5}
              placeholder="Travel date, number of people, pickup location"
              size="lg"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            {/* Validation error */}
            {validationError && (
              <Text color="red.500" fontSize="sm">
                {validationError}
              </Text>
            )}

            {/* Network error */}
            {mutation.isError && (
              <Text color="red.500" fontSize="sm">
                Failed to send enquiry. Please try again later.
              </Text>
            )}

            {/* Success */}
            {mutation.isSuccess && (
              <Text color="green.500" fontSize="sm">
                Enquiry sent successfully! We’ll contact you shortly.
              </Text>
            )}

            <Button
              size="lg"
              width="full"
              loading={mutation.isPending}
              onClick={handleSubmit}
            >
              Submit Enquiry
            </Button>

            <Text fontSize="sm" color="fg.muted">
              We usually respond within 24 hours.
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
