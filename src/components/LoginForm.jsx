import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  chakra,
  FormControl,
  FormLabel,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useHistory, Link } from "react-router-dom";

function LoginForm() {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <Box
      bg="#282c34"
      minH="100vh"
      py="12"
      px={{ base: "4", lg: "8" }}
      rounded="md"
    >
      <Link to="/payment">
        <Heading
          fontFamily="Raleway"
          mb={12}
          textAlign="center"
          color="#f5f5f5"
        >
          NFT Wallet
        </Heading>
      </Link>
      <Box
        bg={"rgb(48, 48, 56)"}
        fontFamily="Poppins"
        maxW="sm"
        p={10}
        mx="auto"
        rounded="10px"
        boxShadow={
          "rgba(255, 255, 255, 0.05) 0px 10px 36px 0px, rgba(255, 255, 255, 0.04) 0px 0px 0px 1px"
        }
      >
        <Heading
          fontFamily="Poppins"
          fontWeight="500"
          textAlign="center"
          color="#f5f5f5"
          size="lg"
        >
          Sign In
        </Heading>
        <chakra.form
          onSubmit={(e) => {
            e.preventDefault();
            // your login logic here
            console.log("Sign In");
            let path = `/dashboard`;
            history.push(path);
          }}
        >
          <Stack spacing="6">
            <FormControl mt={10}>
              <FormLabel color="#f5f5f5">Email address</FormLabel>
              <Input
                variant="filled"
                bg="#26303C"
                color="#79b8ff"
                _hover={{ bg: "#26303C" }}
                _focus={{ bg: "#26303C" }}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email address"
                required
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel color="#f5f5f5">Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  variant="filled"
                  bg="#26303C"
                  color="#79b8ff"
                  _hover={{ bg: "#26303C" }}
                  _focus={{ bg: "#26303C" }}
                  placeholder="Enter your password"
                  required
                />
                <InputRightElement width="3rem">
                  <IconButton
                    h="1.5rem"
                    size="md"
                    onClick={handlePasswordVisibility}
                    variant="ghost"
                    color="#f5f5f5"
                    _hover={{ bg: "#26303C" }}
                    _focus={{ bg: "#26303C" }}
                  >
                    {showPassword ? (
                      <Icon as={AiFillEye} />
                    ) : (
                      <Icon as={AiFillEyeInvisible} />
                    )}
                  </IconButton>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button type="submit" bg="#90CDF4" size="md" fontSize="md">
              Sign in
            </Button>
          </Stack>
        </chakra.form>
      </Box>
    </Box>
  );
}

export default LoginForm;
