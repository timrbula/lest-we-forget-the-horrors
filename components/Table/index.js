import React from "react";
import { useFlexLayout, useResizeColumns, useTable } from "react-table";
import { Box, Flex, PseudoBox, Text, useColorMode } from "@chakra-ui/core";
//import { FixedSizeList } from "react-window";

const headerProps = (props, { column }) => getStyles(props, column.align);

const cellProps = (props, { cell }) => getStyles(props, cell.column.align);

const getStyles = (props, align = "left") => [
  props,
  {
    style: {
      justifyContent: align === "right" ? "flex-end" : "flex-start",
      alignItems: "flex-start",
      display: "flex",
    },
  },
];

const resizerProps = {
  position: "absolute",
  top: 0,
  right: 0,
  width: "10px",
  height: "100%",
  zIndex: 1,
  style: { touchAction: "none" },
};

const Table = (
  {
    columns,
    data,
    emptyMessage = "No records",
    onRowClick,
    children,
    ...rest
  } /*: {
  columns: Array,
  data: Object,
  emptyMessage?: String,
  onRowClick?: Function,
  children?: any
}*/
) => {
  const { colorMode } = useColorMode();
  const defaultColumn = React.useMemo(
    () => ({
      // When using the useFlexLayout:
      minWidth: 30, // minWidth is only used as a limit for resizing
      width: 150, // width is used for both the flex-basis and flex-grow
      maxWidth: 200, // maxWidth is only used as a limit for resizing
    }),
    []
  );

  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useResizeColumns,
    useFlexLayout,
    (hooks) => {
      hooks.allColumns.push((columns) => columns);
    }
  );

  return (
    <Box {...getTableProps()} flex={1} fontSize="sm" mt={1} {...rest}>
      <Box overflowY="auto" overflowX="hidden">
        {headerGroups.map((headerGroup, i) => (
          <Flex
            flex={1}
            key={i}
            {...headerGroup.getHeaderGroupProps({})}
            borderBottom="1px solid"
            borderColor="gray.300"
          >
            {headerGroup.headers.map((column, i, cols) => (
              <Text as="div" key={i} {...column.getHeaderProps(headerProps)} textAlign="left" minHeight="24px">
                {column.render("Header")}
                {column.canResize && i < cols.length - 1 && <Box {...resizerProps} {...column.getResizerProps()} />}
              </Text>
            ))}
          </Flex>
        ))}
      </Box>
      <Box overflowY="scroll" overflowX="hidden">
        {rows.length ? (
          rows.map((row) => {
            prepareRow(row);
            return (
              <PseudoBox
                display="flex"
                flex={1}
                key={row.id}
                data-rowindex={row.index}
                {...row.getRowProps()}
                onClick={onRowClick}
                cursor={onRowClick ? "pointer" : undefined}
                _hover={{ bg: colorMode === "dark" ? "gray.700" : "gray.100" }}
                minHeight="24px"
                lineHeight="24px"
              >
                {row.cells.map((cell) => {
                  return (
                    <Text
                      as="div"
                      key={row.id + "_" + cell.index}
                      wordBreak="break-all"
                      {...cell.getCellProps(cellProps)}
                    >
                      {cell.render("Cell")}
                    </Text>
                  );
                })}
              </PseudoBox>
            );
          })
        ) : (
          <Text as="div" p="4px 24px" fontSize="md">
            {emptyMessage}
          </Text>
        )}
      </Box>
      {children}
    </Box>
  );
};

export default Table;
