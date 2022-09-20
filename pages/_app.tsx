import '../styles/globals.css'
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { Header } from '../components/Header.component';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <SSRProvider>
     <Header />
    <Component {...pageProps} />
   
  </SSRProvider>
  )
}

export default MyApp
