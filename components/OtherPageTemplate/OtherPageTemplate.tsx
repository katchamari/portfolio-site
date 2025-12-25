"use client";
import { ComponentProps } from "@/types/ComponentProps";

import styles from "./OtherPageTemplate.module.css";
import Container from "../Container/Container";
import { useRouter } from "next/navigation";
import React from "react";
import Button from "../Button/Button";
import Image from "next/image";
import Head from "next/head";
interface Props extends ComponentProps {
  width?: string;
  pageName: string;
}
export default function OtherPageTemplate({
  children,
  width = "1440px",
  pageName,
}: Props) {
  const router = useRouter();
  return (
    <React.Fragment>
      <Head>
        <title>{pageName}- momie&apos;s site</title>
      </Head>
      <Container width={width} className={styles.page}>
        <Button width="100px" color="transparent" action={() => router.back()}>
          <Image
            alt="Backwards facing arrow drawn in crayon"
            src="/arrow.png"
            width={100}
            height={100}
          />
        </Button>

        <main className={styles.card}>
          <div className={styles.cardOuter}>
            <div className={styles.cardInner}>{children}</div>
          </div>
        </main>
      </Container>
    </React.Fragment>
  );
}
