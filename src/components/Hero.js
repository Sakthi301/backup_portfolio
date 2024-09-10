// src/components/Hero.js
import React from 'react';
import { Box, Flex, Text, Button, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa'; // Import React Icon
import { ReactTyped } from 'react-typed'; // Correct named import

const MotionBox = motion(Box);

const Hero = () => {
  // Adjust text sizes based on screen size
  const headlineSize = useBreakpointValue({ base: '3xl', md: '4xl', lg: '7xl' });
  const subheadingSize = useBreakpointValue({ base: 'md', md: 'lg', lg: '4xl' });

  return (
    <Box
      bgImage="url(./earth.jpg)" // Example background image
      bgSize="cover"
      bgPosition="center"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      p={4}
      position="relative"
      overflow="hidden"
    >
      {/* Unique Overlay Effect */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0, 0, 0, 0.4)" // Dark overlay to enhance text readability
      />
      
      <Flex
        direction="column"
        align="center"
        textAlign="center"
        maxW="lg"
        mx="auto"
        px={6}
        position="relative"
        zIndex={1} // Ensure content is above overlay
      >
        <MotionBox
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          <Text
            fontSize={headlineSize}
            fontWeight="bold"
            mb={4}
            fontFamily="'Poppins',  sans-serif" // Apply Playfair Display font
            letterSpacing="wide" // Add letter spacing for a stylish look
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)" // Add text shadow for depth
            textTransform='uppercase'
          >
            Hi I'm SakthiGanapthy.S
          </Text>
          <Text
            fontSize={subheadingSize}
            fontWeight="bold"
            mb={4}
            fontFamily="'Poppins',  sans-serif" // Apply Playfair Display font
            textShadow="1px 1px 2px rgba(0, 0, 0, 0.3)" // Add text shadow for depth
          >
            I am{' '}
            <ReactTyped
              strings={['a Full Stack Developer', 'a Passionate Developer', 'an Enthusiastic Coder']}
              typeSpeed={50}
              backSpeed={25}
              backDelay={1000}
              loop
            
            />
          </Text>
          {/* <Text
            fontSize={subheadingSize}
            mb={6}
            fontFamily="'Playfair Display', serif" // Apply Playfair Display font
            textShadow="1px 1px 2px rgba(0, 0, 0, 0.3)" // Add text shadow for depth
          >
            I am a passionate developer skilled in modern technologies. Let's create something amazing together!
          </Text> */}
          <Button
            rightIcon={<FaArrowRight />}
            colorScheme="teal"
            size="lg"
            variant="solid"
            _hover={{ bg: 'teal.600' }}
            fontFamily="'Poppins',  sans-serif"// Apply Playfair Display font
            borderRadius="full" // Add rounded corners
            px={8} // Add extra padding
          >
            Get in Touch
          </Button>
        </MotionBox>
      </Flex>
    </Box>
  );
};

export default Hero;
