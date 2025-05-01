import { Metadata } from "next";

export const metadata : Metadata = {
  title: "Falarohy | Auth",
  description: "hello world !"
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>
}