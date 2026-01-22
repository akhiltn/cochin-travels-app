import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";

const NotFound = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (seconds === 0) {
      navigate("/", { replace: true });
      return;
    }

    const timer = setTimeout(() => {
      setSeconds((s) => s - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds, navigate]);

  return (
    <Box textAlign="center" mt="20">
      <Heading size="xl">404</Heading>
      <Text mt="2">Page not found</Text>
      <Text mt="4" color="fg.muted">
        Redirecting to home in {seconds} seconds…
      </Text>
    </Box>
  );
};

export default NotFound;
