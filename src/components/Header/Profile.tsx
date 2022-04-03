import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface InterfaceProps {
  name: string;
  src: string;
  showProfileData: boolean;
}

export function Profile({ name, src, showProfileData = true }: InterfaceProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <>
          <Box mr="4" textAlign="right">
            <Text>Welisson Henrique</Text>
            <Text fontSize="small" color="gray.300">
              welissonh80@gmail.com
            </Text>
          </Box>
        </>
      )}

      <Avatar size="md" name={name} src={src} />
    </Flex>
  );
}
