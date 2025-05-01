'use client'

import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"antialiased font-outfit"}
      >
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>

  );
}
