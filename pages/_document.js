import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Chan,N Rechat" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap');
        </style>
      </Head>
      <body >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}