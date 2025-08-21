const APP_NAME = "🪶 EasyWrite.ai";

const Meta = () => {
  return (
    <>
      <meta name="application-name" content={APP_NAME} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={APP_NAME} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#9F7AEA" />

      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.svg" />

      <link rel="manifest" href="/manifest.json" />
    </>
  );
};

export default Meta;
