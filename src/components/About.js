import React from 'react';
import { Box, Flex, Heading, Text, useBreakpointValue, Icon, Image, HStack, Link } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { Element } from 'react-scroll';

const About = () => {
  // Dynamic values for image and text based on screen size
  const imageSize = useBreakpointValue({ base: '250px', md: '300px', lg: '400px' }); // Square image
  const textPaddingX = useBreakpointValue({ base: '4', md: '8', lg: '16' }); // Padding adjustment for text
  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
  const textAlign = 'left'; // Left-align the text

  return (
    <Element name="about">
      <Box
        py={{ base: 10, md: 14, lg: 20 }} // Adjust padding for different screen sizes
        px={textPaddingX} // Responsive horizontal padding
        minHeight="110vh" // Increased height for more content space
        bg="gray.100"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          direction={flexDirection} // Adjust flex direction for responsiveness
          align="center"
          justify="space-between"
          maxW="8xl" // Increased max width for bigger content area
          mx="auto"
          textAlign={textAlign} // Text alignment (left-aligned)
          p={{ base: 4, md: 6, lg: 10 }} // Add padding for content space
          bg="white"
          borderRadius="lg"
          boxShadow="lg"
        >
          {/* Text Section */}
          <Box
            mb={{ base: 6, md: 0 }} // Adjust margin for spacing on mobile
            flex="1"
            mr={{ base: 0, lg: 20 }} // Increase right margin for larger screens
           
          >
            <Heading as="h1" size="2xl" mb={4} color="black" fontFamily="'Poppins', sans-serif">
              <Text textTransform='uppercase'>Sakthi</Text>
              <Text pl='30px' lineHeight="1.5" textTransform='uppercase'>Ganapathy.S</Text> {/* Right spacing for Ganapathy */}
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} // Responsive font sizes
              color="gray.600"
              lineHeight="1.8"
              letterSpacing="wider"
              mb={6}
            >
              Hi, I'm SakthiGanapthy.S, a passionate web developer with experience in building modern and responsive web applications. I love creating intuitive and dynamic user experiences using the latest technologies.
            </Text>
            {/* Social Media Links */}
            <HStack justifyContent={textAlign} spacing={6}> {/* Social links alignment */}
              <Link href="https://www.linkedin.com" isExternal>
                <Icon as={FaLinkedin} boxSize={7} color="teal.600" _hover={{ color: 'blue.600' }} />
              </Link>
              <Link href="https://www.github.com" isExternal>
                <Icon as={FaGithub} boxSize={7} color="gray.800" _hover={{ color: 'black' }} />
              </Link>
              <Link href="https://www.twitter.com" isExternal>
                <Icon as={FaTwitter} boxSize={7} color="blue.400" _hover={{ color: 'blue.600' }} />
              </Link>
            </HStack>
          </Box>

          {/* Profile Image */}
          <Box
            borderRadius="md" // Square image with slight rounding
            overflow="hidden"
            flexShrink={0} // Prevent shrinking of image
            height={imageSize} // Dynamically adjust height based on screen size
            width={imageSize} // Square image (same height and width)
            mt={{ base: 8, md: 0 }} // Margin adjustment for mobile
            ml={{ base: 0, md: 6, lg: 10 }} // Adjust margin-left for larger screens
            alignSelf="center"
          >
            <Image
              borderRadius="md"
              height="100%"
              width="100%"
              src="./sakthi.jpg" // Your image path
              alt="SakthiGanapthy.S"
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Box>
    </Element>
  );
};

export default About;
