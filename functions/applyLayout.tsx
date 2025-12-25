import OtherPageTemplate from "@/components/OtherPageTemplate/OtherPageTemplate";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import React from "react";

export function mainLayout(page: React.ReactNode, pageName: string) {
  return {
    variant: "template1",
    template: <PageTemplate pageName={pageName}>{page}</PageTemplate>,
  };
}

export function altLayout(page: React.ReactNode, pageName: string) {
  return {
    variant: "template2",
    template: <OtherPageTemplate pageName={pageName}>{page}</OtherPageTemplate>,
  };
}
