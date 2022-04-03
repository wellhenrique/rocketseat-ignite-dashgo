import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import dynamic from "next/dynamic";
import { theme } from "../styles/theme";
import { ApexOptions } from "apexcharts";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2021-03-18T00:00:00.000Z",
      "2021-03-19T00:00:00.000Z",
      "2021-03-20T00:00:00.000Z",
      "2021-03-21T00:00:00.000Z",
      "2021-03-22T00:00:00.000Z",
      "2021-03-23T00:00:00.000Z",
      "2021-03-24T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.6,
      opacityTo: 0.3,
    },
  },
};

const series1 = [{ name: "series1", data: [31, 120, 10, 28, 51, 18, 109] }];
const series2 = [{ name: "series2", data: [12, 27, 41, 58, 16, 82, 91, 73] }];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100%">
      <Header />

      <Flex w="100%" my="6" maxWidth="1480" marginX="auto" px="6">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p="8" bgColor="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Chart
              options={options}
              series={series1}
              type="area"
              height={160}
            />
          </Box>

          <Box p="8" bgColor="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Chart
              options={options}
              series={series2}
              type="area"
              height={160}
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
