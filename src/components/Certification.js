// src/components/Certification.js
import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  Image,
  useColorModeValue
} from '@chakra-ui/react';

import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const certifications = [
  {
    title: 'AWS Cloud Practitioner',
    issuedBy: 'Amazon Web Services',
    year: '2024',
    imageUrl: './aws2.jpg',
    description: 'AWS Cloud Practitioner certification validates cloud fluency and foundational AWS knowledge.'
  },
  {
    title: 'UiPath Skill-a-thon',
    issuedBy: 'UiPath',
    year: '2024',
    imageUrl: 'https://via.placeholder.com/150?text=UiPath+Skill-a-thon',
    description: 'UiPath Skill-a-thon certification demonstrates expertise in UiPath automation.'
  },
  {
    title: 'Networking Technologies',
    issuedBy: 'TCILIT',
    year: '2024',
    imageUrl: 'https://via.placeholder.com/150?text=Networking+Technologies',
    description: 'Networking Technologies certification covers network concepts and configurations.'
  },
  {
    title: 'C Programming',
    issuedBy: 'SoloLearn',
    year: '2023',
    imageUrl: 'https://via.placeholder.com/150?text=C+Programming',
    description: 'C Programming certification from SoloLearn showcases proficiency in C language fundamentals.'
  },
  {
    title: 'JDBC',
    issuedBy: 'GreatLearning',
    year: '2023',
    imageUrl: 'https://via.placeholder.com/150?text=JDBC',
    description: 'JDBC certification highlights expertise in Java Database Connectivity.'
  },
  {
    title: 'Inplant Training',
    issuedBy: 'Lenovo',
    year: '2023',
    imageUrl: 'https://via.placeholder.com/150?text=Inplant+Training',
    description: 'Inplant Training from Lenovo provides hands-on experience in real-world scenarios.'
  }
];

const Certification = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCert, setSelectedCert] = useState(null);

  const handleOpen = (cert) => {
    setSelectedCert(cert);
    onOpen();
  };

  return (
    <Box id="certifications" py={16} px={8} bg={useColorModeValue('gray.100', 'gray.800')}>
      <Flex direction="column" align="center">
        <MotionBox
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          textAlign="center"
          mb={8}
        >
          <Heading as="h2" size="xl" mb={4} color="teal.600">
            Certifications
          </Heading>
          <Text fontSize="lg" color="gray.700">
            Here are some of the certifications I've earned to enhance my skills and knowledge.
          </Text>
        </MotionBox>

        <Flex
          direction="row"
          wrap="wrap"
          justify="center"
          align="center"
          gap={8}
        >
          {certifications.map((cert, index) => (
            <MotionBox
              key={index}
              bg="white"
              borderRadius="md"
              boxShadow="lg"
              p={6}
              maxWidth="300px"
              textAlign="center"
              cursor="pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleOpen(cert)}
            >
              
              <Heading as="h3" size="md" mt={4} color="teal.600">
                {cert.title}
              </Heading>
              <Text mt={2} color="gray.600">
                {cert.year}
              </Text>
            </MotionBox>
          ))}
        </Flex>

        {selectedCert && (
          <Modal isOpen={isOpen} onClose={onClose} size="lg">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{selectedCert.title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Stack spacing={4}>
                  <Image
                    borderRadius="md"
                    src={selectedCert.imageUrl}
                    alt={selectedCert.title}
                    mb={4}
                    maxWidth="100%"
                    objectFit="cover"
                  />
                  <Text fontSize="lg" color="gray.800">
                    <strong>Issued By:</strong> {selectedCert.issuedBy}
                  </Text>
                  <Text fontSize="lg" color="gray.800">
                    <strong>Year:</strong> {selectedCert.year}
                  </Text>
                  <Text fontSize="md" color="gray.600">
                    {selectedCert.description}
                  </Text>
                </Stack>
                
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </Flex>
    </Box>
  );
};

export default Certification;
