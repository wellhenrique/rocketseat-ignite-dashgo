import { Box, Stack, Text } from "@chakra-ui/react";

import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export function Pagination({
  totalCountOfRegisters,
  registerPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registerPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingCount, lastPage),
        )
      : [];

  return (
    <Stack
      direction={["column", "row"]}
      spacing="6"
      mt="8"
      justifyContent="space-between"
      alignContent="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>1000</strong>
      </Box>
      <Stack direction="row" spacing="2" />

      {currentPage > 1 + siblingCount && (
        <>
          <PaginationItem number={1} />
          {currentPage > 2 + siblingCount && (
            <Text color="gray.300" width="8" textAlign="center">
              ...
            </Text>
          )}
        </>
      )}

      {previousPages.length > 0 &&
        previousPages.map((page) => {
          return <PaginationItem number={currentPage} key={page} />;
        })}

      <PaginationItem number={currentPage} isCurrent />

      {previousPages.length > 0 &&
        previousPages.map((page) => {
          return <PaginationItem number={currentPage} key={page} />;
        })}

      {currentPage + siblingCount < lastPage && (
        <>
          <PaginationItem number={lastPage} />
          {currentPage + 1 + siblingCount < siblingCount && (
            <Text color="gray.300" width="8" textAlign="center">
              ...
            </Text>
          )}
        </>
      )}
    </Stack>
  );
}
