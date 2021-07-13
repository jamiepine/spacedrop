import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/kko5zpl.css" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/fomantic-ui/2.8.7/components/icon.min.css"
          />
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
