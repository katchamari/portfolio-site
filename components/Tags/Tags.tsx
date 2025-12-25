import { ComponentProps } from "@/types/ComponentProps";

import styles from "./Tags.module.css";
interface Props extends ComponentProps {
  tags?: string[];
}
export default function Tags({ tags = [], className = "" }: Props) {
  if (!tags.length) return;
  const classes = `${styles.tags} ${className}`;
  return (
    <div className={classes}>
      {tags?.map((tag) => (
        <span key={tag} className={styles.tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}
