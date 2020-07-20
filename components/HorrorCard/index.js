import React from "react";
import { PseudoBox, Flex, Tag, Text } from "@chakra-ui/core";
import { format } from "date-fns";
import { categoryDisplayMap } from "@/constants/index";

export default function HorrorCard({ horror, ...rest }) {
  const date = new Date(horror.date);
  return (
    <PseudoBox
      display="flex"
      flexDirection="column"
      bg="white"
      fontSize="0.875rem"
      margin="1rem"
      maxW="70ch"
      padding="1.5rem"
      textAlign="left"
      color="inherit"
      textDecoration="none"
      border="1px solid #eaeaea"
      borderRadius="10px"
      transition="transform 0.25s ease"
      _focus={{
        transform: "scale(1.03)",
      }}
      _hover={{
        transform: "scale(1.03)",
      }}
      {...rest}
    >
      <Text color="gray.700" fontWeight="600" as="date">
        {String(date) !== "Invalid Date" ? format(date, "MMMM dd, yyyy") : "---"}
      </Text>
      <Text
        color="gray.700"
        as="p"
        lineHeight="1.5"
        fontSize="1rem"
        dangerouslySetInnerHTML={{ __html: horror.html }}
      />
      <Flex marginTop="auto" flexWrap="wrap">
        {horror.categories.map((category) => {
          const categoryDisplay = categoryDisplayMap[category];

          return (
            <Tag variantColor={categoryDisplay.variantColor} key={category} m={1}>
              {categoryDisplay.copy}
            </Tag>
          );
        })}
      </Flex>
    </PseudoBox>
  );
}
