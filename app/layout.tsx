import SessionFalarohy from "@/lib/SessionFalarohy";
import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: "Falarohy",
  description: "hello world !"
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionFalarohy>
      <html lang="en">
        <body
          className={"antialiased font-outfit"}
        >
          {children}
        </body>
      </html>
    </SessionFalarohy>
  );
}
