import { ComponentProps } from "@/app/types/ComponentProps";
import Tabs from "../Tabs/Tabs";
import styles from "./PageTemplate.module.css";
import Container from "../Container/Container";
import React from "react";
import TopActions from "../TopActions/TopActions";
import PageTransition from "../PageTransition/PageTransition";
interface Props extends ComponentProps {
  pageName: string;
}
export default function PageTemplate({ children, pageName }: Props) {
  const navItems = [
    { href: "/", text: "Home", activePages: ["Home"] },
    { href: "/portfolio", text: "Portfolio", activePages: ["Portfolio"] },
  ];
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <TopActions />
        <Container>
          <h1>kinakomomie</h1>
        </Container>
      </header>
      <Container className={styles.window}>
        <Tabs pageName={pageName} navItems={navItems} />
        <main className={styles.windowMain}>
          <div className={styles.mainInner}>
            <PageTransition>{children}</PageTransition>
          </div>
        </main>
      </Container>
    </div>
  );
}
