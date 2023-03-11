import "./globals.css";

import { Providers } from "./GlobalRedux/provider";
import Menu from "./components/Menu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>
          <Menu />
          {children}
        </Providers>
      </body>
    </html>
  );
}
