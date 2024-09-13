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
import Slider from 'react-slick';

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
    imageUrl: './SKILL-A-THON.jpg',
    description: 'UiPath Skill-a-thon certification demonstrates expertise in UiPath automation.'
  },
  {
    title: 'Networking Technologies',
    issuedBy: 'TCILIT',
    year: '2024',
    imageUrls: [
      './NT1.jpg',
      './NT2.jpg'
    ],
    description: 'Networking Technologies certification covers network concepts and configurations.'
  },
  {
    title: 'C Programming',
    issuedBy: 'SoloLearn',
    year: '2023',
    imageUrl: './sololearn.jpg',
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

  // Color mode values
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const cardBgColor = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const headingColor = useColorModeValue('teal.600', 'teal.300');

  // Settings for the slider (react-slick)
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    swipeToSlide: true, // Enable dragging to slide
    touchThreshold: 10, // Adjust sensitivity of dragging
  };

  return (
    <Box id="certifications" py={16} px={8} bg={bgColor}>
      <Flex direction="column" align="center">
        <MotionBox
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          textAlign="center"
          mb={8}
        >
          <Heading as="h2" size="xl" mb={4} color={headingColor}>
            Certifications
          </Heading>
          <Text fontSize="lg" color={textColor}>
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
              bg={cardBgColor}
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
              <Heading as="h3" size="md" mt={4} color={headingColor}>
                {cert.title}
              </Heading>
              <Text mt={2} color={textColor}>
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
                  {/* If it's the Networking Technologies certification, show slider */}
                  {selectedCert.title === 'Networking Technologies' && (
                    <Slider {...sliderSettings}>
                      {selectedCert.imageUrls.map((imageUrl, idx) => (
                        <Image
                          key={idx}
                          borderRadius="md"
                          src={imageUrl}
                          alt={selectedCert.title}
                          mb={4}
                          maxWidth="100%"
                          objectFit="cover"
                        />
                      ))}
                    </Slider>
                  )}

                  {/* For other certifications, show a single image */}
                  {selectedCert.imageUrl && selectedCert.title !== 'Networking Technologies' && (
                    <Image
                      borderRadius="md"
                      src={selectedCert.imageUrl}
                      alt={selectedCert.title}
                      mb={4}
                      maxWidth="100%"
                      objectFit="cover"
                    />
                  )}
                  
                  <Text fontSize="lg" color={textColor}>
                    <strong>Issued By:</strong> {selectedCert.issuedBy}
                  </Text>
                  <Text fontSize="lg" color={textColor}>
                    <strong>Year:</strong> {selectedCert.year}
                  </Text>
                  <Text fontSize="md" color={textColor}>
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
