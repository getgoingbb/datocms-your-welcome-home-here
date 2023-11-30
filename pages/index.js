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
        <Script id="google-analytics">
          {`
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'G-R1TN5P38SJ', 'auto');
            ga('send', 'pageview');
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
