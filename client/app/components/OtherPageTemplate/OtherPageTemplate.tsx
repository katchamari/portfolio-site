"use client";
import { ComponentProps } from "@/app/types/ComponentProps";
import styles from "./OtherPageTemplate.module.css";
import Container from "../Container/Container";
import { useRouter } from "next/navigation";
import React from "react";
import TopActions from "../TopActions/TopActions";
import PageTransition from "../PageTransition/PageTransition";
import Button from "../Button/Button";
interface Props extends ComponentProps {
  width?: string;
}
export default function OtherPageTemplate({ children, width = "100%" }: Props) {
  const router = useRouter();
  return (
    <React.Fragment>
      <TopActions />
      <PageTransition>
        <Container className={styles.page}>
          <Button
            width="100px"
            fillColor="transparent"
            action={() => router.back()}
          >
            <img src="/arrow.png" />
          </Button>

          <main className={styles.card}>{children}</main>
        </Container>
      </PageTransition>
    </React.Fragment>
  );
}
