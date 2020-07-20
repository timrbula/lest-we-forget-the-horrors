import Link from "next/link";
import { Flex } from "@chakra-ui/core";
import HorrorCard from "@/components/HorrorCard";
import { dbConnect } from "@/utils/index";
import Horror from "@/models/Horror";

const Index = ({ horrors }) => (
  <Flex as="ul" flexWrap="wrap" justifyContent="center" direction="column" alignItems="center">
    {horrors.map((horror) => {
      const date = new Date(horror.date);
      return <HorrorCard as="li" horror={horror} key={horror._id} />;
    })}
  </Flex>
);

export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Horror.find({});
  const horrors = result.map((doc) => {
    const horror = doc.toObject();
    horror._id = horror._id.toString();
    return horror;
  });

  return { props: { horrors } };
}

export default Index;
