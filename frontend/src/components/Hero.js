import React from 'react';
import { Box, Text, Button, Image, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';  // Correct import

const MotionBox = motion(Box);

const Hero = () => {
  // Responsive headline and subheading sizes
  const headlineSize = useBreakpointValue({ base: '4xl', md: '6xl', lg: '8xl' });
  const subheadingSize = useBreakpointValue({ base: '2xl', md: '3xl', lg: '5xl' });
  const descriptionSize = useBreakpointValue({ base: 'lg', md: 'xl', lg: 'md' });

  // Responsive image size
  const imageSize = useBreakpointValue({ base: '250px', md: '350px', lg: '400px' });

  // Theme-aware background color
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const buttonTextColor = useColorModeValue('white', 'gray.900');

  // CV URL (Replace with your actual CV URL)
  const cvUrl = './Resume.pdf'; // Update with the actual URL to your CV

  return (
    <Box
      bg={bgColor}
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={{ base: 4, md: 8, lg: 12 }} // Responsive padding
    >
      <MotionBox
        display="grid"
        gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }} // Single column for mobile, two columns for larger screens
        gap={8}
        maxW="7xl"
        w="full"
        textAlign={{ base: 'center', md: 'left' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Side: Text Content */}
        <Box>
          <Text
            fontSize={headlineSize} // Bigger headline size
            fontWeight="bold"
            fontFamily="'Poppins', sans-serif"
            letterSpacing="wide"
            textTransform="uppercase"
            bgGradient="linear(to-r, purple.500, pink.500)"
            bgClip="text"
            mb={6} // Increased margin for more spacing
          >
            Hello, I'm
          </Text>

          {/* Typed text with fixed height */}
          <Box position="relative" h="80px" mb={6} lineHeight='16px'>
            <ReactTyped
              strings={['Sakthi', 'Full Stack Developer']}
              typeSpeed={30}
              backSpeed={50}
              loop
              backDelay={1000}
              showCursor={false}
            >
              <Text
                as="span"
                fontSize={subheadingSize} // Bigger subheading
                fontWeight="extrabold"
                fontFamily="'Poppins', sans-serif"
                color="white"
                position="absolute"
              />
            </ReactTyped>
          </Box>

          <Text
            fontSize={descriptionSize} // Bigger description text
            color="gray.400"
            maxW="xl"
            mb={8} 
            mt={-9}
           // More spacing below
          >
            Passionate about building dynamic web applications and solving real-world problems through code.
          </Text>

          <Box display="flex" gap={6} flexDirection={{ base: 'column', md: 'row' }} alignItems="center">
            <Button
              
              bg="purple.500"
              color={buttonTextColor}
              _hover={{ bg: 'purple.600' }}
              size="lg"
              fontFamily="'Poppins', sans-serif"
              borderRadius="full"
            >
              Hire Me
            </Button>
            <Button
              as="a"
              href={cvUrl} // Link to CV
              download // Prompt download
              variant="outline"
              borderColor="gray.200"
              color="gray.200"
              _hover={{ borderColor: 'gray.400', color: 'gray.400' }}
              size="lg"
              fontFamily="'Poppins', sans-serif"
              borderRadius="full"
            >
              Download CV
            </Button>
          </Box>
        </Box>

        {/* Right Side: Image */}
        <Box
          mt={{ base: 8, md: 0 }}
          ml={{ md: 16 }} // Margin for larger screens
        >
          <Image
            src="/home.jpg" // Replace with your actual image path
            alt="Sakthi illustration"
            boxSize='500px' // Responsive image size
            objectFit="cover"
            objectPosition="80%" // Custom position for adjusting visible part of image
            borderRadius="full"
            transition="transform 0.8s ease"
            _hover={{ transform: 'scale(1.05)' }} // Hover effect
          />
        </Box>
      </MotionBox>
    </Box>
  );
};

export default Hero;
