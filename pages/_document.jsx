import Document, {
  DocumentProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
          <meta name='description' content='Goias Caldeiraria' />
          <meta
            name='keywords'
            content='Goias,Caldeiraria,mineiros,goias,solda,usina,eth'
          />
          <meta name='author' content='Jefferson Felizardo' />

          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700&display=swap'
            rel='stylesheet'
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
