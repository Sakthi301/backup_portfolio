import React from 'react';
import { Flex, Heading, Text, Link, useBreakpointValue, useColorModeValue, Box } from '@chakra-ui/react';

const About = () => {
  const imgSize = useBreakpointValue({ base: '150px', md: '200px', lg: '450px' });

  // Define colors based on color mode
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const linkColor = useColorModeValue('teal.500', 'teal.300');
  const headingColor = useColorModeValue('teal.600', 'teal.200');
  const boxBgColor = useColorModeValue('gray.50', 'gray.800'); // Box background color

  return (
    <Flex
      id="about"
      direction="column"
      align="center"
      justify="center"
      py="100px"
      px={8}
      bg={bgColor}
      fontFamily="'Poppins', sans-serif"
    >
      <Box
        bg={boxBgColor}
        p={8}
        borderRadius="lg"
        boxShadow="lg"
        maxW="1500px"
        width="100%"
      >
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="center"
          maxW="1500px"
          mx="auto"
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Flex
            direction="column"
            ml={{ base: 0, md: 14 }}
            align={{ base: 'center', md: 'flex-start' }}
          >
            <Heading fontSize="50px" mb={4} color={headingColor}>
              About Me
            </Heading>
            
            <Text fontSize="lg" mb={4} color={textColor} textAlign="justify" letterSpacing="wide" lineHeight="35px" >
              Hi, I'm SakthiGanapathy, and I have a strong passion for full-stack development. With experience in React, Angular, Spring Boot, and more, I love creating web applications that are both functional and aesthetically pleasing. I focus on delivering responsive, optimized, and user-friendly solutions. I'm constantly learning and staying updated with the latest technologies like Blazor (ASP.NET) and Next.js, ensuring that my work is aligned with modern web standards.
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
      </Box>
    </Flex>
  );
};

export default About;
