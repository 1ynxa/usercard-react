import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    grobal: {
      body: {
        backgroundcolor: "gray.100",
        color: "gray.800",
      },
    },
  },
});

export default theme;
