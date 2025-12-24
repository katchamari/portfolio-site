import { ComponentProps } from "@/types/ComponentProps";

import styles from "./Tabs.module.css";
import Link from "next/link";
import Input from "../Input/Input";
import { ReactNode, useEffect, useState } from "react";
import { FormProps } from "@/types/FormProps";
import { useRouter } from "next/router";
type NavItem = {
  href: string;
  text: string;
  activePages: string[];
};
interface Props extends ComponentProps {
  navItems: NavItem[];
  pageName: string;
}
export default function Tabs({ navItems, pageName }: Props) {
  const router = useRouter();
  const [tabData, setTabData] = useState<FormProps>({
    errors: [],
    submitAttempted: false,
    activeTab: pageName,
  });

  useEffect(() => {
    async function redirect() {
      router.push(tabData.activeTab as string);
    }
    redirect();
  }, [tabData.activeTab]);

  const navItem = (className: string, i: number, content: ReactNode) => {
    const itemClasses = [styles.navItem, className];
    return (
      <li key={i} className={itemClasses.join(" ")}>
        {content}
      </li>
    );
  };
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {navItems.map(({ activePages, href, text }, i) => {
          const classes = [styles.desktop];
          if (activePages.includes(pageName)) classes.push(styles.active);
          return navItem(
            classes.join(" "),
            i,
            <Link href={href} className={`${styles.navLink} ${styles.desktop}`}>
              {text}
            </Link>,
          );
        })}
        {navItem(
          `${styles.mobile} ${styles.active}`,
          navItems.length,
          <Input
            className={`${styles.navLink}`}
            type="select"
            name="activeTab"
            id="activeTab"
            required={false}
            setFormData={setTabData}
            value={
              navItems.find(({ activePages }) => activePages.includes(pageName))
                ?.href
            }
            formData={tabData}
            options={navItems.map(({ text, href, activePages }) => ({
              label: text,
              value: href,
              selected: activePages.includes(pageName),
            }))}
          />,
        )}
      </ul>
    </nav>
  );
}
