import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

import theme from "../theme";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
          initialColorMode: "light",
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
