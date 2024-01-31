import { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { client } from "@/graphql";
import { GET_ALL_MODULES } from "@/graphql";
import { RootLayout } from "@/components";

export const metadata: Metadata = {
  title: "Bilguun Docs",
  description: "Documentation web from Bilguun1324",
};

const Layout = async ({ children }: Readonly<{ children: ReactNode }>) => {
  const { data } = await client.query({
    query: GET_ALL_MODULES,
  });

  return (
    <html lang="en" className="w-full h-full">
      <body className="flex w-full h-full">
        <RootLayout modules={data.getModules}>{children}</RootLayout>
      </body>
    </html>
  );
};

export default Layout;
