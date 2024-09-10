// src/components/About.js
import React from 'react';
import { Flex, Heading, Text, Link, Image, useBreakpointValue, useColorMode, useColorModeValue } from '@chakra-ui/react';

const About = () => {
  const { colorMode } = useColorMode();
  const imgSize = useBreakpointValue({ base: '150px', md: '200px', lg: '450px' });

  // Define colors based on color mode
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const linkColor = useColorModeValue('teal.500', 'teal.300');
  const headingColor = useColorModeValue('teal.500', 'teal.200');

  return (
    <Flex
      id="about"
      direction="column"
      align="center"
      justify="center"
      py='100px'
      px={8}
      bg={bgColor}
     
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="center"
        maxW="1500px"
        mx="auto"
        p={5}
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Image
          src="./sakthi.jpg" // Replace with your photo URL
          alt="sakthi"
          borderRadius="full"
          boxSize={imgSize}
          mb={{ base: 4, md: 0 }}
          objectFit="cover"
        />
        <Flex
          direction="column"
          ml={{ base: 0, md: 5 }}
          align={{ base: 'center', md: 'flex-start' }}
        >
          <Heading as="h1" fontSize='70px' mb={4} color={headingColor}>
            About Me
          </Heading>
          <Text fontSize="lg" mb={4} color={textColor}>
            Hi, I'm SakthiGanapathy, a passionate web developer with a knack for creating engaging and user-friendly websites. With experience in various technologies and a love for continuous learning, I strive to build solutions that not only meet but exceed user expectations.
          </Text>
          <Text fontSize="md" mb={4} color={textColor}>
            Check out some of my work and get in touch with me through the links below:
          </Text>
          <Flex direction={{ base: 'column', sm: 'row' }} wrap="wrap" justify="center">
            <Link href="https://www.linkedin.com/in/yourprofile" isExternal mr={4} mb={2} fontSize="lg" color={linkColor}>
              LinkedIn
            </Link>
            <Link href="https://github.com/yourprofile" isExternal mr={4} mb={2} fontSize="lg" color={linkColor}>
              GitHub
            </Link>
            <Link href="mailto:your.email@example.com" isExternal mb={2} fontSize="lg" color={linkColor}>
              Email
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default About;
