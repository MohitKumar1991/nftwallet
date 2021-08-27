import React from "react";
import {
  Box,
  Button,
  Heading,
  chakra,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Icon,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useHistory, Link } from "react-router-dom";
import { FaCreditCard } from "react-icons/fa";

function Payment() {
  const history = useHistory();
  return (
    <Box bg="#282c34" minH="100vh" p="5" rounded="md">
      <Heading fontFamily="Raleway" mb={4} fontSize="1.1rem" color="#f5f5f5">
        <Link to="/"> NFT Wallet </Link>
      </Heading>
      <hr></hr>

      <Heading p={2} mt={10} fontSize="1.5rem" color="#f5f5f5">
        <Icon h={4} w={4} color="#e0e0e0" mb={1} as={FaCreditCard} /> Payement
        Details
      </Heading>

      <Box>
        <chakra.form
          onSubmit={(e) => {
            e.preventDefault();
            // your login logic here
            console.log("Buy");
          }}
        >
          <Stack spacing="6">
            <FormControl mt={10}>
              <FormLabel color="#f5f5f5">Name on card</FormLabel>
              <Input
                variant="filled"
                bg="#26303C"
                color="#79b8ff"
                _hover={{ bg: "#26303C" }}
                _focus={{ bg: "#26303C" }}
                type="text"
                required
              />
              <Text color="#f5f5f5" fontSize="12px" p={2}>
                (Full name as displayed on card)
              </Text>
            </FormControl>
            <FormControl>
              <FormLabel color="#f5f5f5">Card Number</FormLabel>
              <Input
                variant="filled"
                bg="#26303C"
                color="#79b8ff"
                _hover={{ bg: "#26303C" }}
                _focus={{ bg: "#26303C" }}
                type="number"
                required
              />
            </FormControl>
            <Flex>
              <FormControl my={2} mr={4}>
                <FormLabel color="#f5f5f5">Expiration</FormLabel>
                <Input
                  type="text"
                  variant="filled"
                  bg="#26303C"
                  color="#79b8ff"
                  _hover={{ bg: "#26303C" }}
                  _focus={{ bg: "#26303C" }}
                  required
                />
              </FormControl>
              <FormControl my={2}>
                <FormLabel color="#f5f5f5">CVV</FormLabel>
                <Input
                  type="number"
                  variant="filled"
                  bg="#26303C"
                  color="#79b8ff"
                  _hover={{ bg: "#26303C" }}
                  _focus={{ bg: "#26303C" }}
                  required
                />
              </FormControl>
            </Flex>
            <Button type="submit" bg="#90CDF4" size="md" fontSize="md">
              Place Order
            </Button>
          </Stack>
        </chakra.form>
      </Box>
    </Box>
  );
}

export default Payment;
