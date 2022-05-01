import Document, { Html, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(
      // This wraps the page in the StyleSheet ServerStyleSheet
      // to render the styles on the server
      // eslint-disable-next-line react/jsx-props-no-spreading
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();

    // take the page and add the styles on the server
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en-CA">
        <Head />
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
