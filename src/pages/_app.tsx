import { Chakra } from '@/component/ChakraProvider/Chakra'
import type { AppProps } from 'next/app'
import Header from '@/layout/Header'
import '../styles/globals.css'
import { AuthProvider } from '@/contexts/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Chakra>
        <Header />
          <Component {...pageProps} />
      </Chakra>
    </AuthProvider>
  )
}
