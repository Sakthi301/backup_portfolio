// src/components/Skills.js
import React from 'react';
import { Box, Grid, Heading, Text, useBreakpointValue, Icon } from '@chakra-ui/react';
import { FaReact, FaJava, FaNodeJs, FaDatabase, FaCss3Alt, FaGit, FaHtml5, FaPython } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Skills = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box id="skills" py={16} px={8} bg="gray.200">
      <MotionBox
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        textAlign="center"
        mb={12}
      >
        <Heading as="h2" size="xl" mb={4} color="teal.500">
          My Skills
        </Heading>
        <Text fontSize="lg" color="gray.700">
          Here are some of the technologies and tools I'm proficient with:
        </Text>
      </MotionBox>
      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
        gap={6}
        justifyContent="center"
      >
        {/* Frontend */}
        <Box textAlign="center">
          <Icon as={FaReact} boxSize={12} color="teal.400" mb={4} />
          <Text fontSize="lg" fontWeight="bold">React</Text>
        </Box>
        <Box textAlign="center">
          <Icon as={FaCss3Alt} boxSize={12} color="blue.400" mb={4} />
          <Text fontSize="lg" fontWeight="bold">CSS</Text>
        </Box>
        <Box textAlign="center">
          <Icon as={FaHtml5} boxSize={12} color="orange.500" mb={4} />
          <Text fontSize="lg" fontWeight="bold">HTML</Text>
        </Box>
        <Box textAlign="center">
          <Icon as={FaGit} boxSize={12} color="purple.500" mb={4} />
          <Text fontSize="lg" fontWeight="bold">Git</Text>
        </Box>
        {/* Backend */}
        <Box textAlign="center">
          <Icon as={FaNodeJs} boxSize={12} color="green.500" mb={4} />
          <Text fontSize="lg" fontWeight="bold">Node.js</Text>
        </Box>
        <Box textAlign="center">
          <Icon as={FaJava} boxSize={12} color="blue.500" mb={4} />
          <Text fontSize="lg" fontWeight="bold">Java</Text>
        </Box>
        <Box textAlign="center">
          <Icon as={FaPython} boxSize={12} color="blue.300" mb={4} />
          <Text fontSize="lg" fontWeight="bold">Python</Text>
        </Box>
        <Box textAlign="center">
          <Icon as={FaDatabase} boxSize={12} color="orange.400" mb={4} />
          <Text fontSize="lg" fontWeight="bold">Databases</Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default Skills;
