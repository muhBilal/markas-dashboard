import '/public/assets/css/style.css';
import '../styles/globals.css';
import Head from 'next/head';

import { AuthContextProvider } from '../context/auth';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <script src="/assets/js/main.js?v=4.1" />
    </Head>
      <AuthContextProvider>
        <Component {...pageProps} />;
      </AuthContextProvider>
    </>
  )
}

export default MyApp;
