"use client";
import { ReactNode } from "react";
import { Navigation } from "@/components";
import { ModuleProvider } from "@/providers/modules-provider";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/graphql";
import { ModuleType } from "@/utils";

type RootLayoutProps = {
  children: ReactNode;
  modules: ModuleType[];
};

export const RootLayout = (props: RootLayoutProps) => {
  const { children, modules } = props;

  return (
    <ModuleProvider>
      <ApolloProvider client={client}>
        <div className="flex h-screen w-screen">
          <Navigation modulesFromSSR={modules}/>
          <div className={`w-full h-screen overflow-y-auto overflow-x-hidden flex justify-center`}>{children}</div>
        </div>
      </ApolloProvider>
    </ModuleProvider>
  );
};
