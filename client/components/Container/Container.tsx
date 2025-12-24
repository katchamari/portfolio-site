import { ComponentProps } from "@/types/ComponentProps";

import styles from "./Container.module.css";
interface Props extends ComponentProps {
  width?: string;
}
export default function Container({
  children,
  className = "",
  width = "1440px",
}: Props) {
  const classes = `${styles.container} ${className}`;
  return (
    <div style={{ maxWidth: width }} className={classes}>
      {children}
    </div>
  );
}
