import React from "react";
import { Flex, Link } from "@chakra-ui/core";

export default function index() {
  return (
    <Flex direction="column">
      <Link href="https://www.washingtonpost.com/graphics/politics/trump-claims-database/?utm_term=.27babcd5e58c&itid=lk_inline_manual_2&itid=lk_inline_manual_2">
        Washington Post Fact Checker
      </Link>
      <Link href="https://www.factcheck.org/person/donald-trump/">FactCheck</Link>
      <Link href="https://www.politifact.com/personalities/donald-trump/">Politifact</Link>
      <Link href="https://en.wikipedia.org/wiki/Veracity_of_statements_by_Donald_Trump/">
        Veracity of Statements of Donald Trump
      </Link>
    </Flex>
  );
}
