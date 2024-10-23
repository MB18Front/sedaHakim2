import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="fa" dir="rtl">
      <Head />
      <body className="text-black bg-white text-center overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;