import { useLoading } from "@/contexts/LoadingPage";
import { mainLayout } from "@/functions/applyLayout";
import { ReactNode } from "react";

export default function Page() {
  const { setIsLoading } = useLoading();
  setIsLoading(false);
  return;
}
Page.getLayout = (page: ReactNode) => mainLayout(page, "Home");
