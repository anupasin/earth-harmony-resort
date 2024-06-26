// /pages/_app.js
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Welcome to My Next.js App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
