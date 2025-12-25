import { mainLayout } from "@/functions/applyLayout";
import PortfolioSection from "../components/PortfolioSection/PortfolioSection";
import { ReactNode } from "react";

export default function Page() {
  return <PortfolioSection />;
}
Page.getLayout = (page: ReactNode) => mainLayout(page, "Art");
