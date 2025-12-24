import { ComponentProps } from "@/types/ComponentProps";

import styles from "./CodingSectionItem.module.css";
import Image from "next/image";
import Button from "../../Button/Button";
import Tags from "../../Tags/Tags";
import { Code } from "@/types/db";
interface Props extends ComponentProps {
  project: Code;
  viewType: "details" | "preview";
}
export default function CodingSectionItem({ project, viewType }: Props) {
  return (
    <article className={styles.project}>
      <div className={styles.details}>
        <h2 className={styles.title}>{project.title}</h2>

        <p>{project.description}</p>
        {viewType === "preview" && (
          <Button
            href={`/coding-projects/${encodeURIComponent(project.title)}`}
            style="outline"
          >
            View Project
          </Button>
        )}

        <Tags tags={project.tags} className={styles.tags} />
      </div>
      <div className={styles.thumbnail}>
        <Image
          src={project.thumbnail.src}
          width={300}
          height={300}
          alt={project.thumbnail.alt}
        />
      </div>
    </article>
  );
}
