import { Component } from "@/types/global";
import styles from "./ErrorMessage.module.css";
export default function ErrorMessage({ children, className = "" }: Component) {
  const classes = `${styles.error} ${className}`;
  return <p className={classes}>{children}</p>;
}
