// src/components/Navbar.js
import React, { useState } from 'react';
import { 
  Box, 
  Flex, 
  Text, 
  IconButton, 
  Button, 
  Stack, 
  useColorMode, 
  useColorModeValue, 
  HStack, 
  Spacer 
} from '@chakra-ui/react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'; // React Icons
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink from react-scroll

const MotionBox = motion(Box);

const Navbar = ({ setActiveSection }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Responsive variants for Framer Motion
  const navVariants = {
    open: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
    closed: { opacity: 0, y: "-100%", transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <Box 
      bg={useColorModeValue('gray.100', 'gray.900')} 
      px={4} 
      shadow="md" 
      position="fixed"  // Make the navbar fixed
      top={0}           // Stick to the top
      width="100%"      // Full width
      zIndex={1000}     // Ensure it's above other content
    >
      <Flex h={16} alignItems="center">
        {/* Logo */}
        <MotionBox
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Text fontSize="lg" fontWeight="bold">
            SakthiGanapathy
          </Text>
        </MotionBox>

        {/* Spacer to push navigation items to the right */}
        <Spacer />

        {/* Desktop Navigation */}
        <HStack
          as="nav"
          spacing={4}
          display={{ base: 'none', md: 'flex' }}
        >
          <ScrollLink to="about" smooth={true} duration={500} onClick={() => setActiveSection('about')}>
            <Button variant="ghost">About</Button>
          </ScrollLink>
          <ScrollLink to="skills" smooth={true} duration={500} onClick={() => setActiveSection('skills')}>
            <Button variant="ghost">Skills</Button>
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} onClick={() => setActiveSection('projects')}>
            <Button variant="ghost">Projects</Button>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} onClick={() => setActiveSection('contact')}>
            <Button variant="ghost">Contact</Button>
          </ScrollLink>
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          size="md"
          icon={isOpen ? <FaTimes /> : <FaBars />}  // Using React Icons
          aria-label="Toggle Menu"
          display={{ md: 'none' }}
          onClick={toggleMenu}
          ml={4}
          pl='3'
        />

        {/* Color Mode Toggle */}
        <IconButton
          size="md"
          icon={isDarkMode ? <FaSun /> : <FaMoon />}  // Using React Icons
          aria-label="Toggle Color Mode"
          onClick={toggleColorMode}
          ml={4}
        />
      </Flex>

      {/* Mobile Navigation */}
      {isOpen ? (
        <MotionBox
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={navVariants}
          display={{ md: 'none' }}
        >
          <Stack as="nav" spacing={4}>
            <ScrollLink to="about" smooth={true} duration={500} onClick={() => {
              setActiveSection('about');
              toggleMenu();
            }}>
              <Button w="full" variant="ghost">About</Button>
            </ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={500} onClick={() => {
              setActiveSection('skills');
              toggleMenu();
            }}>
              <Button w="full" variant="ghost">Skills</Button>
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} onClick={() => {
              setActiveSection('projects');
              toggleMenu();
            }}>
              <Button w="full" variant="ghost">Projects</Button>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} onClick={() => {
              setActiveSection('contact');
              toggleMenu();
            }}>
              <Button w="full" variant="ghost">Contact</Button>
            </ScrollLink>
          </Stack>
        </MotionBox>
      ) : null}
    </Box>
  );
};

export default Navbar;
