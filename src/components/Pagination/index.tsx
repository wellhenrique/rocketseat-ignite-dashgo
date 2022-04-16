import { Box, Button, Stack } from "@chakra-ui/react";
import { useState } from "react";
import {
  PrimaryButton,
  Pagination as PaginationLib,
} from "softcenter-design-system";

interface PaginationProps {
  totalCountOfRegisters: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

export function Pagination(
  {
    // totalCountOfRegisters,
    // registerPerPage = 10,
    // currentPage = 1,
    // onPageChange,
  },
) {
  // const lastPage = Math.floor(totalCountOfRegisters / registerPerPage);
  const [item, setItem] = useState(1);
  console.log(item);
  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justifyContent="space-between"
      alignContent="center"
      spacing="6"
    >
      <PaginationLib currentPage={item} maxPages={10} setCurrent={setItem} />
    </Stack>
  );
}
