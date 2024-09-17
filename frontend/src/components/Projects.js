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
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const ProjectCard = ({ title, description, repoUrl, languages }) => {
  const cardBg = useColorModeValue('gray.50', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const headingColor = useColorModeValue('teal.600', 'teal.200');
  const tagBgColor = useColorModeValue('teal.500', 'teal.300');

  return (
    <MotionBox
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={6}
      bg={cardBg}
      borderColor={borderColor}
      boxShadow="md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Heading as="h3" size="lg" mb={4} color={headingColor}>
        {title}
      </Heading>
      <Text mb={4} color={textColor}>
        {description}
      </Text>
      <Flex wrap="wrap" mb={4}>
        {languages.map((lang, index) => (
          <Tag
            key={index}
            size="md"
            variant="solid"
            bg={tagBgColor}
            color="white"
            mr={2}
            mb={2}
            borderRadius="full"
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
};

const Projects = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const projects = [
    {
      title: 'Enhanced Remote-Control Interface for Productivity Tools',
      description:
        'Created an Android app for remote control of PowerPoint presentations, allowing slide navigation, presentation control, and zoom adjustments via a user-friendly interface.',
      repoUrl:
        'https://github.com/Sakthi301/Enhanced-Remote-Control-Interface-for-Productivity-Tools/tree/main',
      languages: ['Android SDK', 'Java', 'XML', 'CSS'],
    },
    {
      title: 'Lead Management System',
      description:
        'Developed a comprehensive web application for managing leads from various sources using APIs. Designed features for lead management, task assignment, and user management.',
      repoUrl: 'https://github.com/yourusername/lead-management-system',
      languages: ['Angular', 'SpringBoot', 'Java', 'MySQL', 'TypeScript', 'Bootstrap'],
    },
  ];

  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const headingColor = useColorModeValue('teal.600', 'teal.200');

  return (
    <Box id="projects" py={16} px={8} bg={bgColor} pt="100px">
      <Flex direction="column" align="center">
        <MotionBox
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          textAlign="center"
          mb={8}
        >
          <Heading fontSize='50px' mb={4} color={headingColor}>
            My Projects
          </Heading>
          <Text fontSize="lg" color={textColor} mb={8}>
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
            <Box
              key={index}
              mx={4}
              mb={8}
              width={{ base: '100%', md: '45%', lg: '30%' }}
            >
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
