import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  Grid,
  GridItem,
  Progress,
  Tag,
  TagLabel,
} from '@chakra-ui/react';
import { FaReact, FaJava, FaNodeJs, FaGitAlt, FaAngular, FaBootstrap } from 'react-icons/fa';
import { SiChakraui, SiVite, SiSpringboot, SiJavascript, SiTypescript, SiMysql, SiMongodb } from 'react-icons/si';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact, color: 'teal.400', level: 50 },
      { name: 'Angular', icon: FaAngular, color: 'red.500', level: 60 },
      { name: 'Bootstrap', icon: FaBootstrap, color: 'purple.500', level: 70 },
      { name: 'Chakra UI', icon: SiChakraui, color: 'teal.300', level: 60 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: 'green.500', level: 20 },
      { name: 'Spring Boot', icon: SiSpringboot, color: 'green.500', level: 80 },
    ],
  },
  {
    category: 'Programming Languages',
    skills: [
      { name: 'JavaScript (JS)', icon: SiJavascript, color: 'yellow.500', level: 50 },
      { name: 'TypeScript (TS)', icon: SiTypescript, color: 'blue.400', level: 40 },
      { name: 'Java', icon: FaJava, color: 'blue.500', level: 80 },
    ],
  },
  {
    category: 'Build Tools',
    skills: [
      { name: 'Vite', icon: SiVite, color: 'purple.500', level: 90 },
      { name: 'Angular CLI', icon: FaAngular, color: 'red.400', level: 90 },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: 'orange.500', level: 80 },
      { name: 'MongoDB', icon: SiMongodb, color: 'green.500', level: 40 },
    ],
  },
  {
    category: 'APIs',
    skills: [
      { name: 'REST API', icon: FaReact, color: 'blue.400', level: 70 },
    ],
  },
  {
    category: 'Version Control',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: 'orange.500', level: 80 },
    ],
  },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('Frontend');
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const boxBgColor = useColorModeValue('white', 'gray.800');
  const iconColor = useColorModeValue('gray.600', 'gray.200');

  const handleTagClick = (category) => {
    setSelectedCategory(category);
  };

  const selectedSkills = skillsData.find(category => category.category === selectedCategory);

  return (
    <Box id="skills" py={16} px={8} bg={bgColor} pt='100px'>
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
      </MotionBox>

      <HStack spacing={4} mb={12} justify="center">
        {skillsData.map((category, idx) => (
          <Tag
            key={idx}
            size="lg"
            variant={selectedCategory === category.category ? 'solid' : 'outline'}
            colorScheme="teal"
            onClick={() => handleTagClick(category.category)}
            cursor="pointer"
          >
            <TagLabel>{category.category}</TagLabel>
          </Tag>
        ))}
      </HStack>

      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
        gap={6}
        mb={6}
        pt={16}
      >
        {selectedSkills?.skills.map((skill, index) => (
          <GridItem key={index}>
            <VStack spacing={4} align="center">
              <Icon as={skill.icon} boxSize={12} color={skill.color} />
              <Text fontSize="lg" fontWeight="bold" color={iconColor} textAlign="center">
                {skill.name}
              </Text>
              <Progress
                value={skill.level}
                colorScheme="teal"
                size="md"
                width="100%"
                borderRadius="md"
              />
              <Text fontSize="sm" color={iconColor} textAlign="center">
                Proficiency: {skill.level}%
              </Text>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
  