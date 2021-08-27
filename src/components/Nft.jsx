import React from "react";
import {
  Box,
  Tag,
  Flex,
  Text,
  Heading,
  Icon,
  Stack,
  Image,
} from "@chakra-ui/react";
import { IoMdArrowDropleft } from "react-icons/io";
import { Link, useParams } from "react-router-dom";

function Nft({ nftData }) {
  let { tokenID } = useParams();
  console.log(tokenID);
  //   if (tokenID === "dashboard") {
  //     tokenID = "0";
  //   }
  return (
    <Box bg="#282c34" minH="100vh" p="5" rounded="md">
      <Heading fontFamily="Raleway" mb={4} fontSize="1.1rem" color="#f5f5f5">
        <Link to="/"> NFT Wallet </Link>
      </Heading>

      <hr></hr>
      <Text
        py={4}
        fontSize="14px"
        fontFamily="Poppins"
        color="#f5f5f5"
        textDecoration="underline"
      >
        <Link to="/dashboard">
          {" "}
          <Icon as={IoMdArrowDropleft} />
          Back
        </Link>
      </Text>

      <Box my={7} color="#f5f5f5" fontFamily="Poppins">
        <Stack spacing={4}>
          <Image
            borderRadius="md"
            border="4px"
            color="#0070F3"
            boxSize="170px"
            objectFit="cover"
            src={nftData[tokenID].image}
            alt={nftData[tokenID].name}
            alignSelf="center"
          />
          <Heading textAlign="center" p={5}>
            {nftData[tokenID].name}
          </Heading>

          <Stack px={5} spacing={8}>
            <Flex justifyContent="space-between">
              {" "}
              <Text fontSize="18px">Price:</Text>
              <Tag bg={"rgba(255, 255, 255, 0.404)"}>
                $ {nftData[tokenID].price}
              </Tag>
            </Flex>
            <Flex justifyContent="space-between">
              {" "}
              <Text fontSize="18px">TokenID:</Text>
              <Tag bg={"rgba(255, 255, 255, 0.404)"}>
                {" "}
                {nftData[tokenID].tokenid}
              </Tag>
            </Flex>
            <Flex justifyContent="space-between">
              {" "}
              <Text fontSize="18px">Contract Address:</Text>
              <Tag bg={"rgba(255, 255, 255, 0.404)"}>
                {`${nftData[tokenID].address.substr(0, 6)}...${nftData[
                  tokenID
                ].address.substr(-4)}`}
              </Tag>
            </Flex>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default Nft;
