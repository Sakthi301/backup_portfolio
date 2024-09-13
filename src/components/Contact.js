import React, { useState } from 'react';
import { Box, Flex, Heading, Input, Textarea, Button, VStack, Divider, Link, Icon, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const bg = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const iconColor = useColorModeValue('gray.500', 'gray.300');
  const inputBg = useColorModeValue('white', 'gray.700');
  const dividerColor = useColorModeValue('gray.400', 'gray.600');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      try {
        // POST request to backend API
        await axios.post('http://localhost:8080/api/contacts', formData);
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        toast.error('Error sending message. Please try again later.');
      }
    } else {
      toast.warn('Hey! 😓 Don’t ghost us-fill in all the fields!');
    }
  };

  return (
    <Box py={{ base: '80px', md: '120px' }} px={{ base: 4, md: 8 }} minHeight="75vh" bg={bg}>
      <ToastContainer />
      <Flex justify="center" align="center" direction={{ base: 'column', md: 'row' }} w="100%">
        {/* Left side: Contact Form */}
        <VStack spacing={4} w={{ base: '100%', md: '45%' }} mb={{ base: 8, md: 0 }}>
          <Heading as="h2" size="lg" textAlign="center" color={textColor}>Contact Me</Heading>
          <Input 
            name="name" 
            placeholder="Name" 
            size="md" 
            variant="outline" 
            isRequired 
            bg={inputBg} 
            value={formData.name} 
            onChange={handleInputChange} 
          />
          <Input 
            type="email" 
            name="email" 
            placeholder="Email" 
            size="md" 
            variant="outline" 
            isRequired 
            bg={inputBg} 
            value={formData.email} 
            onChange={handleInputChange} 
          />
          <Textarea 
            name="message" 
            placeholder="Message" 
            rows={4} 
            variant="outline" 
            isRequired 
            bg={inputBg} 
            value={formData.message} 
            onChange={handleInputChange} 
          />
          <Button colorScheme="teal" size="md" width="full" onClick={handleSubmit}>Send Message</Button>
        </VStack>

        {/* Divider */}
        <Divider orientation="vertical" borderColor={dividerColor} mx={6} display={{ base: 'none', md: 'block' }} />

        {/* Right side: Contact Information */}
        <VStack spacing={4} w={{ base: '100%', md: '45%' }}>
          <Heading as="h2" size="lg" textAlign="center" color={textColor}>My Contact</Heading>
          <VStack align="start" spacing={2}>
            <HStack>
              <Icon as={FaEnvelope} boxSize={{ base: 5, md: 6 }} color={iconColor} />
              <Text fontSize={{ base: 'sm', md: 'md' }} color={textColor}>
                Email: <Link href="mailto:sakthiganapathy75@gmail.com" color="teal.500">sakthiganapathy75@gmail.com</Link>
              </Text>
            </HStack>
            <HStack>
              <Icon as={FaPhone} boxSize={{ base: 5, md: 6 }} color={iconColor} />
              <Text fontSize={{ base: 'sm', md: 'md' }} color={textColor}>
                Phone: <Link href="tel:+916382734067" color="teal.500">+91 6382734067</Link>
              </Text>
            </HStack>
            <HStack>
              <Icon as={FaMapMarkerAlt} boxSize={{ base: 5, md: 6 }} color={iconColor} />
              <Text fontSize={{ base: 'sm', md: 'md' }} color={textColor}>
                Address: 71, Lawspet Main Road, Bharathi Nagar, Puducherry, India
              </Text>
            </HStack>
          </VStack>

          <Heading as="h5" size="md" textAlign="center" mt={4} color={textColor}>Connect with Me</Heading>
          <HStack spacing={4} mt={3} wrap="wrap" justify="center">
            <Link href="https://www.linkedin.com/in/sakthi-ganapathy-s-675652216/" isExternal>
              <Button variant="outline" colorScheme="linkedin" leftIcon={<FaLinkedin />}>LinkedIn</Button>
            </Link>
            <Link href="https://github.com/yourprofile" isExternal>
              <Button variant="outline" colorScheme="gray" leftIcon={<FaGithub />}>GitHub</Button>
            </Link>
            <Link href="https://twitter.com/yourprofile" isExternal>
              <Button variant="outline" colorScheme="twitter" leftIcon={<FaTwitter />}>Twitter</Button>
            </Link>
            <Link href="https://www.facebook.com/yourprofile" isExternal>
              <Button variant="outline" colorScheme="facebook" leftIcon={<FaFacebook />}>Facebook</Button>
            </Link>
            <Link href="https://wa.me/916382734067" isExternal>
              <Button variant="outline" colorScheme="whatsapp" leftIcon={<FaWhatsapp />}>WhatsApp</Button>
            </Link>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Contact;
