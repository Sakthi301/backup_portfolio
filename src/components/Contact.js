// src/components/Contact.js
import React from 'react';
import { Box, Flex, Heading, Text, Stack, Input, Button, useBreakpointValue } from '@chakra-ui/react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Contact = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box id="contact" py={16} px={8} bg="gray.200">
      <Flex direction="column" align="center">
        <MotionBox
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          textAlign="center"
          mb={8}
        >
          <Heading as="h2" size="xl" mb={4} color="teal.500">
            Contact Me
          </Heading>
          <Text fontSize="lg" color="gray.700" mb={8}>
            I’d love to hear from you! Feel free to reach out to me through the following channels or use the form below:
          </Text>
        </MotionBox>

        <Flex
          direction={isMobile ? 'column' : 'row'}
          wrap="wrap"
          justify="center"
          align="center"
          spacing={8}
          mb={8}
        >
          <Box textAlign="center" mb={4}>
            <FaEnvelope size={32} color="teal.500" />
            <Text mt={2} fontSize="lg" color="gray.700">
              Email: <a href="mailto:your.email@example.com">your.email@example.com</a>
            </Text>
          </Box>
          <Box textAlign="center" mb={4}>
            <FaPhone size={32} color="teal.500" />
            <Text mt={2} fontSize="lg" color="gray.700">
              Phone: <a href="tel:+123456789">+123 456 789</a>
            </Text>
          </Box>
          <Box textAlign="center" mb={4}>
            <FaLinkedin size={32} color="teal.500" />
            <Text mt={2} fontSize="lg" color="gray.700">
              LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">yourprofile</a>
            </Text>
          </Box>
          <Box textAlign="center" mb={4}>
            <FaGithub size={32} color="teal.500" />
            <Text mt={2} fontSize="lg" color="gray.700">
              GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">yourusername</a>
            </Text>
          </Box>
        </Flex>

        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          w={isMobile ? '100%' : '50%'}
        >
          <Stack spacing={4} as="form" mb={8}>
            <Input placeholder="Name" variant="outline" />
            <Input type="email" placeholder="Email" variant="outline" />
            <Input placeholder="Subject" variant="outline" />
            <Input as="textarea" placeholder="Message" variant="outline" rows={6} />
            <Button colorScheme="teal" type="submit">
              Send Message
            </Button>
          </Stack>
        </MotionBox>
      </Flex>
    </Box>
  );
};

export default Contact;
