// src/components/Certification.js
import React from 'react';
import { Box, Flex, Heading, Text, Stack, useBreakpointValue } from '@chakra-ui/react';
import { FaCertificate } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const certifications = [
  { title: 'AWS Cloud Practitioner', issuedBy: 'Amazon Web Services', year: '2024' },
  { title: 'UiPath Skill-a-thon', issuedBy: 'UiPath', year: '2024' },
  { title: 'Networking Technologies', issuedBy: 'TCILIT', year: '2024' },
  { title: 'C Programming', issuedBy: 'SoloLearn', year: '2023' },
  { title: 'JDBC', issuedBy: 'GreatLearning', year: '2023' },
  { title: 'Inplant Training', issuedBy: 'Lenovo', year: '2023' }
];

const Certification = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box id="certifications" py={16} px={8} bg="gray.100">
      <Flex direction="column" align="center">
        <MotionBox
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          textAlign="center"
          mb={8}
        >
          <Heading as="h2" size="xl" mb={4} color="teal.500">
            Certifications
          </Heading>
          <Text fontSize="lg" color="gray.700">
            Here are some of the certifications I've earned to enhance my skills and knowledge.
          </Text>
        </MotionBox>

        <Flex
          direction={isMobile ? 'column' : 'row'}
          wrap="wrap"
          justify="center"
          align="center"
          gap={8}
        >
          {certifications.map((cert, index) => (
            <MotionBox
              key={index}
              bg="white"
              borderRadius="md"
              boxShadow="md"
              p={6}
              maxWidth="300px"
              textAlign="center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FaCertificate size={40} color="teal.500" />
              <Heading as="h3" size="md" mt={4} color="gray.800">
                {cert.title}
              </Heading>
              <Text mt={2} color="gray.600">
                Issued By: {cert.issuedBy}
              </Text>
              <Text mt={1} color="gray.500">
                Year: {cert.year}
              </Text>
            </MotionBox>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Certification;
