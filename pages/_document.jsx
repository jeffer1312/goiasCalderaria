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

          <meta charSet='UTF-8' />

          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700&display=swap'
            rel='stylesheet'
          />
          <link
            href="'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap'"
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Akaya+Telivigala&display=swap'
            rel='stylesheet'
          />
          <link
            href="'https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap'"
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
