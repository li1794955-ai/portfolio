import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="zh-CN">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="李栋 - 视觉传达设计师作品集 | Li Dong - Visual Communication Design Portfolio" />
        <meta name="keywords" content="视觉传达设计,平面设计,设计师作品集" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body className="bg-dark-bg text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
