import '../styles/globals.css';
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'Nprogress';
import { ChakraProvider } from '@chakra-ui/react';


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
