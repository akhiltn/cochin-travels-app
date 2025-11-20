import React from 'react';
import { Heading, Text } from '@chakra-ui/react';

export default function PackageCard({ pkg }) {
  return (
    <>
      <Heading size='sm'>{pkg.title}</Heading>
      <Text mt={2}>{pkg.short}</Text>
      <Text mt={2} color='gray.600'>{pkg.details}</Text>
      <Text mt={3} fontWeight='bold'>{pkg.days} days • ₹{pkg.price}</Text>
    </>
  );
}
