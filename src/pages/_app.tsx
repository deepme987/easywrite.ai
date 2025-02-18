/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from "next/app";
import Head from "next/head";

import { Chakra } from "lib/components/Chakra";
import Layout from "lib/layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Chakra>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  );
};

export default MyApp;
