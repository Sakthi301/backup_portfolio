import React from 'react';
import { Box, Flex, Heading, Text, VStack, Divider, useColorModeValue, Stack, Tag } from '@chakra-ui/react';

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'XYZ Solutions',
    duration: 'Jun 2019 - Dec 2020',
    description: 'Worked on building responsive and interactive user interfaces for various client projects. Improved performance and user experience through optimization techniques.',
    tags: ['JavaScript', 'CSS', 'HTML'],
  },
  {
    title: 'Intern',
    company: 'TechCorp',
    duration: 'Jan 2019 - May 2019',
    description: 'Assisted in the development of internal tools and applications. Gained hands-on experience with software development processes and teamwork.',
    tags: ['Python', 'Django', 'Git'],
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
        <Heading as="h1" size="xl" mb={8} textAlign="center" color={textColor}>
          My Experience
        </Heading>
        <VStack spacing={8} w="100%" maxW="1200px">
          {experiences.map((exp, index) => (
            <Box key={index} bg={cardBg} p={6} shadow="md" borderRadius="md" width="100%">
              <Heading as="h3" size="lg" mb={2} color={textColor}>
                {exp.title}
              </Heading>
              <Text fontSize="md" color={textColor} mb={2}>
                <strong>{exp.company}</strong> | {exp.duration}
              </Text>
              <Text fontSize="md" color={textColor} mb={4}>
                {exp.description}
              </Text>
              <Stack spacing={2} direction="row" wrap="wrap">
                {exp.tags.map((tag, i) => (
                  <Tag key={i} colorScheme="teal" variant="solid" color={tagColor}>
                    {tag}
                  </Tag>
                ))}
              </Stack>
              {index < experiences.length - 1 && <Divider my={6} borderColor={dividerColor} />}
            </Box>
          ))}
        </VStack>
      </Flex>
    </Box>
  );
};

export default Experience;
