import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bgColor="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Eduarda da Silva</Text>
                    <Text fontSize="sm" color="gray.300">
                      Eduadra@otullok.net
                    </Text>
                  </Box>
                </Td>
                <Td>31 de Março, 2022</Td>
                <Td>
                  <Button
                    as="a"
                    fontSize="sm"
                    size="sm"
                    colorScheme="purple"
                    leftIcon={<RiPencilLine fontSize="15" />}
                  >
                    editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Welisson Henrique Matos</Text>
                    <Text fontSize="sm" color="gray.300">
                      wellrenqi.@email.com.br
                    </Text>
                  </Box>
                </Td>
                <Td>28 de Março, 2022</Td>
                <Td>
                  <Button
                    as="a"
                    fontSize="sm"
                    size="sm"
                    colorScheme="purple"
                    leftIcon={<RiPencilLine fontSize="15" />}
                  >
                    editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Karina algustina da Silva</Text>
                    <Text fontSize="sm" color="gray.300">
                      karina@outlook.com.br
                    </Text>
                  </Box>
                </Td>
                <Td>27 de Março, 2022</Td>
                <Td>
                  <Button
                    as="a"
                    fontSize="sm"
                    size="sm"
                    colorScheme="purple"
                    leftIcon={<RiPencilLine fontSize="15" />}
                  >
                    editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Valdinei Gordao Henrique</Text>
                    <Text fontSize="sm" color="gray.300">
                      valdiney.@email.com
                    </Text>
                  </Box>
                </Td>
                <Td>25 de Março, 2022</Td>
                <Td>
                  <Button
                    as="a"
                    fontSize="sm"
                    size="sm"
                    colorScheme="purple"
                    leftIcon={<RiPencilLine fontSize="15" />}
                  >
                    editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Vagner da Silva</Text>
                    <Text fontSize="sm" color="gray.300">
                      vava@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>24 de Março, 2022</Td>
                <Td>
                  <Button
                    as="a"
                    fontSize="sm"
                    size="sm"
                    colorScheme="purple"
                    leftIcon={<RiPencilLine fontSize="15" />}
                  >
                    editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
