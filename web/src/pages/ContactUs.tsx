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

const ENQUIRY_TYPES = [
  "Sabarimala Darshan",
  "Sabarimala Taxi Package",
  "Group Pilgrimage",
  "South India Tour",
  "Custom Package",
];

export default function ContactUs() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const isValidEmail = (value: string) => {
    if (!value) return true;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!phone.trim() && !email.trim()) {
      setError("Please provide either a mobile number or an email address.");
      return;
    }

    if (email && !isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    alert("Enquiry submitted successfully!");
  };

  return (
    <Box py={{ base: 12, md: 20 }}>
      <Container maxW="5xl">
        <VStack gap={8} align="start">
          <Heading fontSize={{ base: "2xl", md: "3xl" }} fontWeight="900">
            Contact Cochin Travels
          </Heading>

          <Text color="fg.muted">
            Share your travel requirements and we’ll get back to you shortly.
          </Text>

          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <VStack gap={5}>
              {/* Full Name */}
              <Box w="100%">
                <Text mb={1} fontWeight="500">
                  Full Name *
                </Text>
                <Input
                  name="name"
                  placeholder="Enter your name"
                  size="lg"
                  required
                />
              </Box>

              {/* Mobile */}
              <Box w="100%">
                <Text mb={1} fontWeight="500">
                  Mobile Number
                </Text>
                <Input
                  name="mobile"
                  type="tel"
                  placeholder="Enter your mobile number"
                  size="lg"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Box>

              {/* Email */}
              <Box w="100%">
                <Text mb={1} fontWeight="500">
                  Email Address
                </Text>
                <Input
                  name="email"
                  type="email"
                  placeholder="For itinerary / quotation"
                  size="lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {!!email && !isValidEmail(email) && (
                  <Text fontSize="sm" color="red.500" mt={1}>
                    Please enter a valid email address.
                  </Text>
                )}
              </Box>

              <Box w="100%">
                <Text mb={1} fontWeight="500">
                  Enquiry Type *
                </Text>

                <select
                  name="enquiry_type"
                  required
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
              </Box>

              {/* Message */}
              <Box w="100%">
                <Text mb={1} fontWeight="500">
                  Message / Requirement *
                </Text>
                <Textarea
                  name="message"
                  rows={5}
                  placeholder="Travel date, number of people, pickup location"
                  size="lg"
                  required
                />
              </Box>

              {error && (
                <Text color="red.500" fontSize="sm">
                  {error}
                </Text>
              )}

              <Button type="submit" size="lg" width="full">
                Submit Enquiry
              </Button>

              <Text fontSize="sm" color="fg.muted">
                We usually respond within 24 hours.
              </Text>
            </VStack>
          </form>
        </VStack>
      </Container>
    </Box>
  );
}
