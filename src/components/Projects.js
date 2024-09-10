// src/components/Projects.js
import React from 'react';
import { Box, Flex, Heading, Text, useBreakpointValue, Stack, Button } from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const ProjectCard = ({ title, description, repoUrl, liveUrl }) => (
  <MotionBox
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    p={6}
    boxShadow="lg"
    bg="white"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <Heading as="h3" size="lg" mb={4} color="teal.500">{title}</Heading>
    <Text mb={4} color="gray.700">{description}</Text>
    <Flex justify="space-between">
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
      {liveUrl && (
        <Button
          as="a"
          href={liveUrl}
          target="_blank"
          colorScheme="teal"
          leftIcon={<FaExternalLinkAlt />}
          variant="outline"
        >
          Live Demo
        </Button>
      )}
    </Flex>
  </MotionBox>
);

const Projects = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Example project data
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of Project One. It does amazing things with technology X.',
      repoUrl: 'https://github.com/yourusername/project-one',
      liveUrl: 'https://yourprojectone.com',
    },
    {
      title: 'Project Two',
      description: 'A brief description of Project Two. It showcases some great features and functionality.',
      repoUrl: 'https://github.com/yourusername/project-two',
      liveUrl: 'https://yourprojecttwo.com',
    },
    // Add more projects as needed
  ];

  return (
    <Box id="projects" py={16} px={8} bg="gray.100">
      <Flex direction="column" align="center">
        <MotionBox
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          textAlign="center"
          mb={8}
        >
          <Heading as="h2" size="xl" mb={4} color="teal.500">
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
            <Box key={index} mx={4} mb={8}>
              <ProjectCard
                title={project.title}
                description={project.description}
                repoUrl={project.repoUrl}
                liveUrl={project.liveUrl}
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Projects;
