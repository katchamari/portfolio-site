import { ComponentProps } from "@/types/ComponentProps";
import { AnimatePresence, motion } from "motion/react";
import Tabs from "../Tabs/Tabs";
import styles from "./PageTemplate.module.css";
import Container from "../Container/Container";
import { tabTransition } from "@/functions/transitions";
import Head from "next/head";
import { Fragment } from "react/jsx-runtime";
import { useLoading } from "@/contexts/LoadingPage";
interface Props extends ComponentProps {
  pageName: string;
}
export default function PageTemplate({ children, pageName }: Props) {
  const { isLoading } = useLoading();
  const navItems = [
    { href: "/", text: "Home", activePages: ["Home"] },
    { href: "/coding", text: "Coding", activePages: ["Coding"] },
    { href: "/art", text: "Art", activePages: ["Art"] },
  ];
  return (
    <Fragment>
      <Head>
        <title>{pageName} - momie&apos;s site</title>
      </Head>
      <Container className={styles.window}>
        <Tabs pageName={pageName} navItems={navItems} />
        <main className={styles.windowMain}>
          <div className={styles.mainOuter}>
            <AnimatePresence mode="wait">
              <motion.div
                className={styles.mainInner}
                variants={tabTransition}
                initial="hidden"
                animate={isLoading ? "hidden" : "enter"}
                exit="exit"
                transition={{ type: "tween", duration: 0.5 }}
                key={pageName}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </Container>
    </Fragment>
  );
}
