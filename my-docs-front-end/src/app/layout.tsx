import { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { RootLayout } from "@/components";
import { GET_ALL_MODULES, client } from "@/graphql"

export const metadata: Metadata = {
  title: "Bilguun Docs",
  description: "Documentation web from Bilguun1324",
};

const Layout = async ({ children }: Readonly<{ children: ReactNode }>) => {
  const { data, error } = await client.query({
    query: GET_ALL_MODULES,
  });

  if (error) {
    return <div>Error</div>
  }

  return (
    <html lang="en" className="w-full h-full">
      <body className="flex w-full h-full">
        <RootLayout modules={data.getModules}>{children}</RootLayout>
      </body>
    </html>
  );
};

export default Layout;
