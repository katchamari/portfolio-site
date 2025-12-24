import { ComponentProps } from "@/types/ComponentProps";
import styles from "./ErrorMessage.module.css";
export default function ErrorMessage({
  children,
  className = "",
}: ComponentProps) {
  const classes = `${styles.error} ${className}`;
  return <p className={classes}>{children}</p>;
}
