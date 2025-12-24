import { ComponentProps } from "@/types/ComponentProps";
import { ReactNode, useState } from "react";
import styles from "./PillSections.module.css";
import { motion } from "motion/react";

type Section = {
  title: string;
  section: ReactNode;
};
interface Props extends ComponentProps {
  sections: Section[];
}
export default function PillSections({ sections, className = "" }: Props) {
  const [activeSection, setActiveSection] = useState("Technical Skills");
  const activeIndex = sections.map(({ title }) => title).indexOf(activeSection);
  if (!sections.length) return;
  return (
    <div className={className}>
      <nav className={styles.pillTabs}>
        <ul className={styles.list}>
          {sections.map(({ title }) => {
            const classes = [styles.tab];
            if (activeSection === title) classes.push(styles.active);
            return (
              <li key={title}>
                <button
                  onClick={() => setActiveSection(title)}
                  type="button"
                  className={classes.join(" ")}
                >
                  {title}
                </button>
              </li>
            );
          })}
          <motion.div
            className={styles.activeBackground}
            layoutId="activeTabBackground"
            style={{
              left: `${(activeIndex * 100) / sections.length}%`,
              width: `${100 / sections.length}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          ></motion.div>
        </ul>
      </nav>
      <div>
        {sections.map(({ title, section }) => {
          if (activeSection !== title) return;
          return section;
        })}
      </div>
    </div>
  );
}
