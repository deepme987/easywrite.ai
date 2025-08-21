import { NextPageContext } from "next";
import { NextSeo } from "next-seo";

import Sale from "lib/components/sale";

interface Props {
  absoluteUrl: string;
}

const Home = ({ absoluteUrl }: Props) => {
  return (
    <>
      <NextSeo
        title={`EasyWrite.ai - Premium Domain for AI Writing Platform`}
        canonical={`https://www.${absoluteUrl}`}
        description={`EasyWrite.ai - Premium domain perfect for AI writing assistants, content creation platforms, and collaborative writing tools. Available for acquisition.`}
        openGraph={{
          url: `https://www.${absoluteUrl}`,
          title: `🪶 EasyWrite.ai - Premium Domain for AI Writing Platform`,
          description: `Transform your writing experience with EasyWrite.ai. Perfect domain for launching AI-powered writing platforms and content creation tools.`,
          images: [
            {
              url: `https://www.${absoluteUrl}/og.png`,
              width: 1200,
              height: 630,
              alt: `EasyWrite.ai - Premium Domain Available`,
            },
          ],
          site_name: `🪶 EasyWrite.ai`,
        }}
      />
      <Sale absoluteUrl={absoluteUrl} />
    </>
  );
};

export default Home;

export function getServerSideProps(context: NextPageContext) {
  const pathname = context.req!.url === "/" ? "" : context.req!.url;
  const absoluteUrl = context.req!.headers!.host! + pathname;
  return {
    props: {
      pathname,
      absoluteUrl,
    },
  };
}
