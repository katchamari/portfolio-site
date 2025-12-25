import { mainLayout } from "@/functions/applyLayout";
import CodingSection from "../components/CodingSection/CodingSection";
import { ReactNode } from "react";
import { useLoading } from "@/contexts/LoadingPage";

export default function Page() {
  const { setIsLoading } = useLoading();
  setIsLoading(false);
  return <CodingSection />;
}
Page.getLayout = (page: ReactNode) => mainLayout(page, "Coding");
