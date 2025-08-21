import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  Link,
  VStack,
  HStack,
  SimpleGrid,
  Badge,
  Flex,
  chakra,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaPencilAlt, FaRocket, FaBlog, FaCode, FaUsers, FaLightbulb, FaFeatherAlt } from "react-icons/fa";
import { BiPencil, BiBookOpen } from "react-icons/bi";
import { HiSparkles } from "react-icons/hi";


interface Props {
  absoluteUrl: string;
}

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const useCases = [
  {
    icon: HiSparkles,
    title: "AI Writing Assistant",
    description: "Build an AI-powered writing tool that helps users create content effortlessly",
    color: "purple",
    gradient: "linear(to-br, purple.400, pink.400)",
  },
  {
    icon: BiBookOpen,
    title: "Content Creation Platform",
    description: "Launch a platform for bloggers, journalists, and content creators",
    color: "blue",
    gradient: "linear(to-br, blue.400, cyan.400)",
  },
  {
    icon: FaCode,
    title: "Code Documentation Tool",
    description: "Create a tool that makes writing technical documentation simple",
    color: "teal",
    gradient: "linear(to-br, teal.400, green.400)",
  },
  {
    icon: FaRocket,
    title: "Copywriting Service",
    description: "Start a professional copywriting service for businesses",
    color: "orange",
    gradient: "linear(to-br, orange.400, yellow.400)",
  },
  {
    icon: FaUsers,
    title: "Collaborative Writing",
    description: "Build a collaborative writing platform for teams and organizations",
    color: "pink",
    gradient: "linear(to-br, pink.400, purple.400)",
  },
  {
    icon: FaLightbulb,
    title: "Creative Writing Hub",
    description: "Establish a hub for creative writers to share and improve their craft",
    color: "cyan",
    gradient: "linear(to-br, cyan.400, blue.400)",
  },
];

export default function Sale({ absoluteUrl }: Props) {
  const bgGradient = "linear(to-br, purple.50 0%, pink.50 25%, orange.50 50%, yellow.50 75%, green.50 100%)";
  const cardBg = "white";
  const borderColor = "gray.100";
  const headingColor = "gray.800";
  const subtitleColor = "gray.600";
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="white" minH="100vh" py={10}>
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        height="600px"
        bgGradient={bgGradient}
        opacity={0.3}
        zIndex={0}
      />
      <Container maxW="6xl" position="relative" zIndex={1}>
        <VStack spacing={20}>
          {/* Hero Section */}
          <Stack
            as={Box}
            textAlign="center"
            spacing={{ base: 8, md: 14 }}
            py={{ base: 10, md: 20 }}
          >
            <MotionBox
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HStack justify="center" mb={6}>
                <Box
                  p={4}
                  borderRadius="2xl"
                  bg="white"
                  boxShadow="xl"
                  border="2px"
                  borderColor="purple.200"
                >
                  <Icon as={FaFeatherAlt} boxSize={10} color="purple.500" />
                </Box>
              </HStack>
              <Badge
                bg="purple.100"
                color="purple.700"
                fontSize="md"
                px={4}
                py={2}
                borderRadius="full"
                mb={4}
                fontWeight="semibold"
              >
                Premium Domain Available
              </Badge>
            </MotionBox>

            <MotionHeading
              fontWeight={800}
              fontSize={{ base: "3xl", sm: "5xl", md: "7xl" }}
              lineHeight="110%"
              color={headingColor}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Text
                as="span"
                bgGradient="linear(to-r, purple.500, pink.500, orange.500)"
                bgClip="text"
                fontWeight="extrabold"
              >
                {absoluteUrl}
              </Text>
              <br />
              <Text as="span" fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }} color="gray.700">
                Where Writing Becomes Effortless
              </Text>
            </MotionHeading>

            <MotionText
              color={subtitleColor}
              fontSize={{ base: "lg", md: "xl" }}
              maxW="3xl"
              mx="auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              lineHeight="tall"
            >
              Transform your writing vision into reality with this premium domain. Perfect for launching
              an AI-powered writing platform, content creation tool, or collaborative writing service.
            </MotionText>

            <Stack
              direction="column"
              spacing={4}
              align="center"
              justify="center"
              position="relative"
              pt={8}
            >
              <MotionBox
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link href="https://yidm7xbz9cz.typeform.com/to/gWQBgAXg" isExternal>
                  <Button
                    size="lg"
                    bgGradient="linear(to-r, purple.500, pink.500)"
                    color="white"
                    rounded="full"
                    px={10}
                    py={7}
                    fontSize="xl"
                    fontWeight="bold"
                    _hover={{
                      bgGradient: "linear(to-r, purple.600, pink.600)",
                      transform: "translateY(-2px)",
                      boxShadow: "2xl",
                    }}
                    boxShadow="lg"
                    leftIcon={<Icon as={HiSparkles} />}
                  >
                    Make an Offer
                  </Button>
                </Link>
              </MotionBox>
            </Stack>
          </Stack>

          {/* Use Cases Section */}
          <VStack spacing={12} w="full">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              textAlign="center"
            >
              <Heading
                fontSize={{ base: "3xl", md: "5xl" }}
                fontWeight="bold"
                color={headingColor}
                mb={4}
              >
                What Could You Build with{" "}
                <Text as="span" bgGradient="linear(to-r, purple.500, pink.500)" bgClip="text">
                  EasyWrite.ai
                </Text>
                ?
              </Heading>
              <Text fontSize="xl" color={subtitleColor} maxW="2xl" mx="auto" fontWeight="medium">
                This premium domain is perfect for various writing and content creation ventures
              </Text>
            </MotionBox>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
              {useCases.map((useCase, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Box
                    bg={cardBg}
                    p={8}
                    borderRadius="2xl"
                    borderWidth={2}
                    borderColor="gray.100"
                    boxShadow="md"
                    _hover={{
                      boxShadow: "2xl",
                      borderColor: `${useCase.color}.200`,
                      transform: "translateY(-4px)",
                    }}
                    transition="all 0.3s"
                    h="full"
                    position="relative"
                    overflow="hidden"
                  >
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      height="4px"
                      bgGradient={useCase.gradient}
                    />
                    <VStack spacing={4} align="start">
                      <Flex
                        w={14}
                        h={14}
                        align="center"
                        justify="center"
                        borderRadius="xl"
                        bgGradient={useCase.gradient}
                        boxShadow="lg"
                      >
                        <Icon as={useCase.icon} boxSize={7} color="white" />
                      </Flex>
                      <Heading size="md" color={headingColor} fontWeight="bold">
                        {useCase.title}
                      </Heading>
                      <Text color={subtitleColor} fontSize="md" lineHeight="tall">
                        {useCase.description}
                      </Text>
                    </VStack>
                  </Box>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>

          {/* Features Section */}
          <VStack spacing={8} w="full" py={10}>
            <Heading
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="bold"
              color={headingColor}
              textAlign="center"
            >
              Why Choose This Domain?
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} maxW="4xl" mx="auto">
              {[
                { 
                  title: "Brandable",
                  desc: "Short, catchy, and easy to remember",
                  icon: "✨",
                  color: "purple"
                },
                { 
                  title: "AI-Ready", 
                  desc: "Perfect for AI and machine learning applications",
                  icon: "🤖",
                  color: "blue"
                },
                { 
                  title: "Industry Relevant", 
                  desc: "Ideal for the growing content creation market",
                  icon: "📈",
                  color: "green"
                },
              ].map((feature, i) => (
                <MotionBox
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                >
                  <VStack
                    p={8}
                    bg={cardBg}
                    borderRadius="2xl"
                    borderWidth={2}
                    borderColor="gray.100"
                    spacing={4}
                    boxShadow="md"
                    _hover={{
                      boxShadow: "xl",
                      borderColor: `${feature.color}.200`,
                    }}
                    transition="all 0.3s"
                  >
                    <Text fontSize="3xl">{feature.icon}</Text>
                    <Text fontWeight="bold" fontSize="xl" color={headingColor}>
                      {feature.title}
                    </Text>
                    <Text color={subtitleColor} textAlign="center" fontSize="md">
                      {feature.desc}
                    </Text>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>

          {/* CTA Section */}
          <Box
            w="full"
            bgGradient="linear(to-r, purple.50, pink.50)"
            p={12}
            borderRadius="3xl"
            boxShadow="xl"
            borderWidth={2}
            borderColor="purple.100"
          >
            <VStack spacing={6}>
              <Icon as={FaFeatherAlt} boxSize={12} color="purple.500" />
              <Heading size="xl" textAlign="center" color={headingColor}>
                Ready to Launch Your Writing Platform?
              </Heading>
              <Text fontSize="xl" color={subtitleColor} textAlign="center" maxW="2xl" fontWeight="medium">
                Don't miss this opportunity to own a premium domain that perfectly captures
                the essence of effortless writing and content creation.
              </Text>
              <Box pt={4}>
                <Link href="https://yidm7xbz9cz.typeform.com/to/gWQBgAXg" isExternal>
                  <Button
                    size="lg"
                    bgGradient="linear(to-r, purple.500, pink.500)"
                    color="white"
                    px={10}
                    py={7}
                    fontSize="xl"
                    fontWeight="bold"
                    borderRadius="full"
                    _hover={{
                      bgGradient: "linear(to-r, purple.600, pink.600)",
                      transform: "translateY(-2px)",
                      boxShadow: "2xl",
                    }}
                    boxShadow="lg"
                  >
                    Get Started Today
                  </Button>
                </Link>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
