// src/components/Experience.js
import React from 'react';
import { Box, Flex, Heading, Text, VStack, Divider, useColorModeValue, Stack, Tag, Image, List, ListItem } from '@chakra-ui/react';

const experiences = [
  {
    title: 'FullStack Developer Intern',
    company: 'RKS Infotech',
    duration: 'July 2024 - Oct 2024',
    logo: 'https://rksinfotech.com/wp-content/uploads/2023/12/cropped-rks-infotech-logo-png.png',
    description: (
      <List spacing={3}>
        <ListItem>Developed a comprehensive web application for managing leads from various sources (IndiaMART, JustDial, Facebook, Instagram) using their APIs.</ListItem>
        <ListItem>Designed and built features for lead management, task assignment to executives, and user management.</ListItem>
      </List>
    ),
    tags: ['Angular', 'SpringBoot', 'TypeScript', 'Java'],
  },
];

const Experience = () => {
  const bg = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const cardBg = useColorModeValue('white', 'gray.800');
  const dividerColor = useColorModeValue('gray.300', 'gray.600');
  const tagColor = useColorModeValue('gray.100', 'gray.300');

  return (
    <Box py={{ base: '80px', md: '120px' }} px={{ base: 4, md: 8 }} minHeight="75vh" bg={bg}>
      <Flex direction="column" align="center">
        <Heading as="h1" size="2xl" mb={8} textAlign="center" color={textColor} fontFamily="'Poppins', sans-serif">
          My Experience
        </Heading>
        <VStack spacing={12} w="100%" maxW="1400px">
          {experiences.map((exp, index) => (
            <Box key={index} bg={cardBg} p={8} shadow="lg" borderRadius="lg" width="100%">
              <Flex align="center" mb={6}>
                {exp.logo && (
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    boxSize="150px"
                    objectFit="contain"
                    mr={6}
                  />
                )}
                <Flex direction="column" px={4}>
                  <Heading as="h3" size="lg" mb={2} color={textColor} fontFamily="'Poppins', sans-serif">
                    {exp.title}
                  </Heading>
                  <Text fontSize="lg" color={textColor} fontFamily="'Poppins', sans-serif">
                    <strong>{exp.company}</strong> | {exp.duration}
                  </Text>
                </Flex>
              </Flex>
              <Box fontSize="lg" color={textColor} mb={6} fontFamily="'Poppins', sans-serif">
                {exp.description}
              </Box>
              <Stack spacing={3} direction="row" wrap="wrap">
                {exp.tags.map((tag, i) => (
                  <Tag key={i} colorScheme="teal" variant="solid" color={tagColor}>
                    {tag}
                  </Tag>
                ))}
              </Stack>
              {index < experiences.length - 1 && <Divider my={8} borderColor={dividerColor} />}
            </Box>
          ))}
        </VStack>
      </Flex>
    </Box>
  );
};

export default Experience;
