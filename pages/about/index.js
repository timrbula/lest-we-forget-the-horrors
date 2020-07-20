import React from "react";
import { Link, Flex, Text } from "@chakra-ui/core";

export default function About() {
  return (
    <Flex align="center" justify="center">
      <Text as="p">
        All content courtesy{" "}
        <Link href="https://www.mcsweeneys.net/articles/the-complete-listing-so-far-atrocities-1-796">McSweeney's</Link>
      </Text>
    </Flex>
  );
}
