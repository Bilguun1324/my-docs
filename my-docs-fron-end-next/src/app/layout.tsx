import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { client } from "@/graphql";
import { GET_ALL_MODULES } from "@/graphql";
import { Navigation } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bilguun Docs",
  description: "Documentation web from Bilguun1324",
};

const RootLayout = async ({ children }: Readonly<{ children: ReactNode }>) => {
  const { data } = await client.query({
    query: GET_ALL_MODULES,
  });

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation modules={data.getModules}/>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
