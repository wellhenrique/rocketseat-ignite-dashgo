import { Box, Stack, Text } from "@chakra-ui/react";

import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCount: number;
  currentPage?: number;
  registersPerPage?: number;
  onPageChange: (page: number) => void;
}

const generatePagesArray = (from: number, to: number) =>
  [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter((page) => page > 0);

export const Pagination = ({
  totalCount,
  currentPage = 1,
  registersPerPage = 10,
}: PaginationProps) => {
  const lastPage = Math.ceil(totalCount / registersPerPage);
  const siblingsCount = 2;
  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];
  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage),
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

      <Stack direction="row" spacing="2">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem number={1} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" w="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => (
            <PaginationItem number={page} key={page} />
          ))}

        <PaginationItem number={currentPage} isCurrent />

        {nextPages.length > 0 &&
          nextPages.map((page) => <PaginationItem number={page} key={page} />)}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" w="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
};
