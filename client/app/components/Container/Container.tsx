import { ComponentProps } from "@/app/types/ComponentProps";
import styles from "./Container.module.css";
export default function Container({
  children,
  className = "",
}: ComponentProps) {
  const classes = `${styles.container} ${className}`;
  return <div className={classes}>{children}</div>;
}
