import React from "react";
import { Flex, Button } from "@chakra-ui/core";
import HorrorCard from "@/components/HorrorCard";
import horrorList from "@/data/horrorList.json";

function getRandomHorror() {
  const max = horrorList.length;
  const randomIndex = Math.round(Math.random() * max);
  console.log(randomIndex);
  return horrorList[randomIndex];
}

export default function Horrors() {
  const [randomHorror, setRandomHorror] = React.useState(getRandomHorror());
  return (
    <Flex align="center" direction="column" flex={1} p={4}>
      <Flex>
        <HorrorCard horror={randomHorror} />
      </Flex>
      <Button onClick={() => setRandomHorror(getRandomHorror)} variant="ghost" variantColor="red">
        Horrify Me
      </Button>
    </Flex>
  );
}
