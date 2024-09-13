import React, { useState, useEffect, useRef } from 'react';
import { Box, Flex, Text, Tooltip, Heading, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaSchool, FaGraduationCap, FaUniversity, FaBriefcase } from 'react-icons/fa';

const educationData = [
  {
    year: 2017,
    degree: 'SSLC',
    institution: 'Fatima Higher Secondary School, Puducherry, India',
    details: 'Percentage: 77',
    icon: FaSchool
  },
  {
    year: 2019,
    degree: 'Higher Secondary',
    institution: 'Sri Ramakrishna Vidyalaya Higher Secondary School, Puducherry, India',
    details: 'Percentage: 51',
    icon: FaGraduationCap
  },
  {
    year: 2022,
    degree: 'Bachelor of Computer Science',
    institution: 'Achariya Arts & Science College, Puducherry, India',
    details: 'CGPA: 6.74',
    icon: FaUniversity
  },
  {
    year: 2024,
    degree: 'Master of Computer Application',
    institution: 'Sri Manakula Vinayagar Engineering College, Puducherry, India',
    details: 'CGPA: 8.61',
    icon: FaBriefcase
  }
];

const MotionBox = motion(Box);

const Education = () => {
  const [value, setValue] = useState(0);
  const [boxLeft, setBoxLeft] = useState('0px');
  const containerRef = useRef(null);

  const selectedEducation = educationData[value];

  // Use Chakra UI's useColorModeValue hook to set colors based on theme
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const tooltipBgColor = useColorModeValue('white', 'gray.800');
  const tooltipTextColor = useColorModeValue('gray.800', 'white');
  const boxBgColor = useColorModeValue('yellow.400', 'yellow.600');
  const iconColor = useColorModeValue('white', 'gray.800');
  const sliderTrackColor = useColorModeValue('gray.300', 'gray.600');
  const sliderThumbColor = useColorModeValue('yellow.400', 'yellow.600');
  const yearTextColor = useColorModeValue('gray.700', 'gray.400');

  useEffect(() => {
    const updatePosition = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const boxWidth = 90; // Width of MotionBox
      const spacing = 60; // Desired spacing from the left side
      const sliderWidth = containerRef.current.querySelector('input[type="range"]').offsetWidth;
      const totalYears = educationData.length;
      const stepWidth = sliderWidth / (totalYears - 1); // Width for each year step

      const centeredPosition = (value * stepWidth) + spacing;
      const maxLeft = containerWidth - boxWidth - spacing; // Calculate max left position
      const clampedPosition = Math.min(centeredPosition, maxLeft); // Ensure it does not go out of the screen

      setBoxLeft(`${clampedPosition}px`);
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [value]);

  const handleSlideChange = (e) => {
    setValue(parseInt(e.target.value));
  };

  return (
    <Box id="education" py={10} px={8} bg={bgColor} ref={containerRef}>
      <Heading as="h2" size="xl" textAlign="center" mb={8} color="teal.500">
        Education Timeline
      </Heading>

      <Box position="relative" width="100%" height="200px" mt={6}>
        {/* Tooltip wrapping the MotionBox */}
        <Tooltip
          label={
            <Box p={3} bg={tooltipBgColor} borderRadius="md" boxShadow="md">
              <Heading as="h4" size="sm" color="teal.500" mb={2}>
                {selectedEducation.degree}
              </Heading>
              <Text fontSize="sm" color={tooltipTextColor}>
                {selectedEducation.institution}
              </Text>
              <Text fontSize="sm" color={tooltipTextColor}>
                {selectedEducation.details}
              </Text>
            </Box>
          }
          placement="top"
          hasArrow
        >
          <MotionBox
            position="absolute"
            top="85%" // Adjust this value to reduce the gap
            left={boxLeft}
            transform="translate(-50%, -100%)"
            zIndex={2}
            width={{ base: '70px', md: '90px' }} // Responsive width
            height={{ base: '70px', md: '90px' }} // Responsive height
            bg={boxBgColor}
            borderRadius="full"
            padding="8px"
            boxShadow="lg"
            display="flex"
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
          >
            <Box
              as={selectedEducation.icon} // Icon from educationData
              boxSize={{ base: '40px', md: '50px' }} // Responsive icon size
              color={iconColor}
            />
          </MotionBox>
        </Tooltip>
      </Box>

      {/* Slider */}
      <Box mt={12} px={8}>
        <input
          type="range"
          min="0"
          max={educationData.length - 1}
          value={value}
          onChange={handleSlideChange}
          style={{
            width: '100%',
            cursor: 'pointer',
            appearance: 'none',
            background: `linear-gradient(to right, ${sliderThumbColor} ${((value / (educationData.length - 1)) * 100)}%, ${sliderTrackColor} ${((value / (educationData.length - 1)) * 100)}%)`,
            height: '8px',
            borderRadius: '4px',
            outline: 'none',
            position: 'relative'
          }}
        />
    
        
        {/* Milestones (Years) - Placed on the Slider */}
        <Flex justify="space-between" mt={2}>
          {educationData.map((edu) => (
            <Text key={edu.year} fontSize="sm" color={yearTextColor}>
              {edu.year}
            </Text>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Education;
