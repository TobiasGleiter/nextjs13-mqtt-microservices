import Header from "@/components/navigation/Header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col ">
        <div className="relative flex-col min-w-screen w-full">
          <Header />
          <div className="mx-auto flex max-w-7xl align-middle items-center justify-between px-4 mt-16 ">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
