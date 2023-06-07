import type { AppProps } from 'next/app'
import { Chakra as ChakraProvider } from '@/component/ChakraProvider/Chakra'
import { AuthProvider } from '@/contexts/AuthContext'
import NextNprogress from 'nextjs-progressbar'
import Header from '@/layout/Header'
import '../styles/globals.css'
import Meta from '@/component/meta'
import Layout from '@/layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ChakraProvider>
        <NextNprogress
          color="#4299E1"
          startPosition={0.3}
          stopDelayMs={0}
          height={7}
          showOnShallow={true}
          options={{ easing: 'ease', speed: 500 }}
        />
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </AuthProvider>
  )
}
