import Document, { Html, Main, Head, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>My Next.js App</title>
          <link rel="stylesheet" href="/styles/globals.css" />
         {/* Example of adding a new script */}
          <script src="lib/analytics.js" defer></script>
        </Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
