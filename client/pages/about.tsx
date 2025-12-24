import { mainLayout } from "@/functions/applyLayout";
import AboutSection from "../components/AboutSection/AboutSection";
import { ReactNode } from "react";
import { useLoading } from "@/contexts/LoadingPage";

export default function Page() {
  const { setIsLoading } = useLoading();
  setIsLoading(false);
  return <AboutSection />;
}
Page.getLayout = (page: ReactNode) => mainLayout(page, "About");
