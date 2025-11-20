import React from 'react';
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import ContactForm from './ContactForm';

export default function SitePreview({ packages, web3Key }) {
  return (
    <Box p={4}>
      <Heading size='md'>Kerala Tours — Packages</Heading>
      <SimpleGrid columns={{ base:1, md:2 }} spacing={4} mt={4}>
        {packages.map((p) => (
          <Box key={p.id} p={4} border='1px solid' borderColor='gray.100' borderRadius='md'>
            <Heading size='sm'>{p.title}</Heading>
            <Text mt={2}>{p.short}</Text>
            <Text mt={2} color='gray.600'>{p.details}</Text>
            <Text mt={3} fontWeight='bold'>{p.days} days • ₹{p.price}</Text>
          </Box>
        ))}
      </SimpleGrid>

      <Box mt={6} p={4} bg='white' borderRadius='md'>
        <ContactForm web3Key={web3Key} />
      </Box>
    </Box>
  );
}
