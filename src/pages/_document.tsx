import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="overflow-x-hidden bg-whitebkg ">
        <div className="relative min-h-screen">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
