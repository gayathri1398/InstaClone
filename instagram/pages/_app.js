import { ChakraProvider } from '@chakra-ui/react';
import {instagramTheme} from "../themes"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={instagramTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp