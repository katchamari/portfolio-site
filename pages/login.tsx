"use client";
import { useLoading } from "@/contexts/LoadingPage";
import LoginForm from "../components/LoginForm/LoginForm";
import { altLayout } from "@/functions/applyLayout";
import { ReactNode } from "react";

export default function Page() {
  const { setIsLoading } = useLoading();
  setIsLoading(false);
  return <LoginForm />;
}

Page.getLayout = (page: ReactNode) => altLayout(page, "Login");
