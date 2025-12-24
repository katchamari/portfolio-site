import { ComponentProps } from "@/types/ComponentProps";

import styles from "./Tabs.module.css";
import Link from "next/link";
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
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {navItems.map(({ href, text, activePages = [] }, i) => {
          const itemClasses = [styles.navItem];
          if (activePages.includes(pageName)) itemClasses.push(styles.active);
          return (
            <li key={i} className={itemClasses.join(" ")}>
              <Link href={href} className={styles.navLink}>
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
