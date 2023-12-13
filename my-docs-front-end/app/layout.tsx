import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Docs",
  description: "Document website for Bilguun Modules",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
      <div>{children}</div>
  );
};

export default Layout;
