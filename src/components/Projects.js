// src/components/Projects.js
import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Tag,
  TagLabel,
  useBreakpointValue,
  Button,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const ProjectCard = ({ title, description, repoUrl, languages }) => (
  <MotionBox
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    p={6}
    bg="gray.50" // Updated color for a clean look
    borderColor="gray.200" // Light border color
    boxShadow="md" // Medium shadow for a subtle 3D effect
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <Heading as="h3" size="lg" mb={4} color="teal.600">
      {title}
    </Heading>
    <Text mb={4} color="gray.600">
      {description}
    </Text>
    <Flex wrap="wrap" mb={4}>
      {languages.map((lang, index) => (
        <Tag
          key={index}
          size="md"
          variant="solid"
          colorScheme="teal"
          mr={2}
          mb={2}
          borderRadius="full" // Rounded corners for tags
        >
          <TagLabel>{lang}</TagLabel>
        </Tag>
      ))}
    </Flex>
    <Flex justify="space-between" align="center">
      {repoUrl && (
        <Button
          as="a"
          href={repoUrl}
          target="_blank"
          colorScheme="teal"
          leftIcon={<FaGithub />}
          variant="outline"
        >
          Repository
        </Button>
      )}
    </Flex>
  </MotionBox>
);

const Projects = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Updated project data
  const projects = [
    {
      title: 'Enhanced Remote-Control Interface for Productivity Tools',
      description: 'Created an Android app for remote control of PowerPoint presentations, allowing slide navigation, presentation control, and zoom adjustments via a user-friendly interface.',
      repoUrl: 'https://github.com/Sakthi301/Enhanced-Remote-Control-Interface-for-Productivity-Tools/tree/main',
      languages: ['Android SDK', 'Java', 'XML','CSS'],
    },
    {
      title: 'Lead Management System',
      description: 'Developed a comprehensive web application for managing leads from various sources using APIs. Designed features for lead management, task assignment, and user management.',
      repoUrl: 'https://github.com/yourusername/lead-management-system',
      languages: ['Angular', 'SpringBoot', 'Java', 'MySql' ,'TypeScript', 'BootStrap'],
    },
    // Add more projects as needed
  ];

  return (
    <Box id="projects" py={16} px={8} bg="gray.100" pt='100px'>
      <Flex direction="column" align="center">
        <MotionBox
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          textAlign="center"
          mb={8}
        >
          <Heading as="h2" size="xl" mb={4} color="teal.600">
            My Projects
          </Heading>
          <Text fontSize="lg" color="gray.700" mb={8}>
            Here are some of the projects I have worked on:
          </Text>
        </MotionBox>
        <Flex
          direction={isMobile ? 'column' : 'row'}
          wrap="wrap"
          justify="center"
          align="center"
          spacing={8}
        >
          {projects.map((project, index) => (
            <Box key={index} mx={4} mb={8} width={{ base: '100%', md: '45%', lg: '30%' }}>
              <ProjectCard
                title={project.title}
                description={project.description}
                repoUrl={project.repoUrl}
                languages={project.languages}
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Projects;
