import Head from "next/head";
import Script from 'next/script'; // Import Script
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Container from "../components/container";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import MoreStories from "../components/more-stories";
import { request } from "../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import { useRouter } from "next/router";
import LanguageBar from "../components/language-bar";

export async function getStaticProps({preview, locale}) {
  // ... existing getStaticProps code ...
}

export default function Index({ subscription }) {
  const {
    data: { allPosts, site, blog },
  } = useQuerySubscription(subscription);

  // ... existing Index component code ...

  return (
    <>
      <Layout preview={subscription.preview}>
        <Head>{renderMetaTags(metaTags)}</Head>
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-R1TN5P38SJ" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
        <Container>
          <LanguageBar />
          <Intro />
          {heroPost && (
            // ... existing HeroPost component code ...
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}
