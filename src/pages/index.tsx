import { Flex } from "@chakra-ui/react";
import { NextPageContext } from "next";
import { NextSeo } from "next-seo";

import Sale from "lib/components/sale";

interface Props {
  absoluteUrl: string;
}

const Home = ({ absoluteUrl }: Props) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <NextSeo
        title={`Purchase this Domain | ${absoluteUrl}`}
        canonical={`https://www.${absoluteUrl}`}
        description={`Domain for sale | ${absoluteUrl} `}
        openGraph={{
          url: `https://www.${absoluteUrl}`,
          title: `Purchase this Domain | ${absoluteUrl}`,
          images: [
            {
              url: `https://www.${absoluteUrl}/og.png`,
              width: 800,
              height: 600,
              alt: `Purchase this Domain | ${absoluteUrl}`,
            },
          ],
          site_name: `Purchase this Domain | ${absoluteUrl}`,
        }}
      />
      <Sale absoluteUrl={absoluteUrl} />
    </Flex>
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
