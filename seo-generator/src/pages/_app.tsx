import KeywordContextProvider, { KeywordContext } from '@/context/Context'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return( 
  <KeywordContextProvider>
    <Component {...pageProps} />
  </KeywordContextProvider>
  )
}
