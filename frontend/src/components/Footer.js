// src/components/Footer.js
import React from 'react';
import { Box, Flex, Text, Link, useBreakpointValue, Stack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box as="footer" py={8} px={8} bg="gray.800" color="white">
      <Flex
        direction={isMobile ? 'column' : 'row'}
        justify="space-between"
        align="center"
        wrap="wrap"
        mb={4}
      >
        <Stack spacing={4} align="center">
          <Text fontSize="lg" fontWeight="bold">Follow Me</Text>
          <Flex gap={4}>
            <Link href="https://github.com/yourusername" isExternal>
              <FaGithub size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/yourprofile" isExternal>
              <FaLinkedin size={24} />
            </Link>
            <Link href="https://twitter.com/yourusername" isExternal>
              <FaTwitter size={24} />
            </Link>
            <Link href="https://facebook.com/yourusername" isExternal>
              <FaFacebook size={24} />
            </Link>
          </Flex>
        </Stack>
        <Text textAlign="center" mt={4}>
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
