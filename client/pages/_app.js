import '../styles/reset.css';
import '../styles/globals.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
        <link rel="preconnect" href="https://cphapp.rema1000.dk" />
        <link rel="preconnect" href="https://coopmad-website-prod-endpoint.azureedge.net" />
        <link rel="preconnect" href="https://digitalassets.sallinggroup.com" />
        <title>TilbudsTracker - Track gode tilbud!</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
