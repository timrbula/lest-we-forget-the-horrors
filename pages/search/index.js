import React from "react";
import { Flex } from "@chakra-ui/core";
import Table from "@/components/Table";
import horrorList from "@/data/horrorList.json";

export default function Horrors() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Date",
        accessor: "date", // accessor is the "key" in the data
      },
      { Header: "Text", accessor: "text" },
      {
        Header: "Categories",
        accessor: "categories",
      },
      {
        Header: "Links",
        accessor: "links",
      },
    ],
    []
  );

  const handleRowClick = () => {};

  return (
    <Flex flex={1} p={4}>
      <Table columns={columns} data={horrorList} onRowClick={handleRowClick} />
    </Flex>
  );
}
