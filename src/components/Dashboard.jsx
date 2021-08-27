import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Dashboard({ nftData }) {
  return (
    <Box bg="#282c34" minH="100vh" p="5" rounded="md">
      <Link to="/">
        <Heading fontFamily="Raleway" mb={4} fontSize="1.1rem" color="#f5f5f5">
          NFT Wallet
        </Heading>
      </Link>
      <hr></hr>
      <Heading
        my={16}
        fontFamily="Poppins"
        fontWeight="500"
        textAlign="center"
        color="#f5f5f5"
        size="lg"
      >
        Your NFTs
      </Heading>
      {nftData.map((list, index) => {
        return (
          <Link to={`/dashboard/${index}`} key={index}>
            <Flex
              bg={"rgb(50, 50, 66)"}
              justifyContent="space-between"
              p={5}
              px={10}
              mt={2}
              rounded="md"
              color="#f5f5f5"
              fontFamily="Poppins"
            >
              <Text justifyContent="flex-start">{list.name}</Text>
              <Text>${list.price}</Text>
            </Flex>
          </Link>
        );
      })}
    </Box>
  );
}

export default Dashboard;
