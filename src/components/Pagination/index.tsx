import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  const paginationNumber = [
    { id: 1, isCurrent: true },
    { id: 2, isCurrent: false },
    { id: 3, isCurrent: false },
    { id: 4, isCurrent: false },
    { id: 5, isCurrent: false },
  ];

  return (
    <Stack
      direction="row"
      mt="8"
      justifyContent="space-between"
      alignContent="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>5</strong> de <strong>50</strong>
      </Box>

      <Stack direction="row" spacing="2">
        {paginationNumber.map((pagination) => (
          <PaginationItem
            key={pagination.id}
            isCurrent={pagination.isCurrent}
            number={pagination.id}
          />
        ))}
      </Stack>
    </Stack>
  );
}
