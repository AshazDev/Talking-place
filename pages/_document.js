import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' href='/chat.png' />
          <meta
            name='Talking'
            content='Talking Place'
          />
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
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
