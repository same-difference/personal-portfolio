import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Analytics />
      {children}
    </>
  );
}
