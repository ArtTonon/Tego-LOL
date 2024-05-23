// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Adicione o link para o favicon aqui */}
          <link rel="icon" href="/lol-icon.png" />
          {/* Adicione outros links ou metadados necessários aqui */}
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
