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
  const preview = viewType === "preview";
  return (
    <article className={styles.project}>
      <div className={styles.details}>
        <h2 className={styles.title}>{project.title}</h2>

        <p>{project.description}</p>
        <div className={styles.actions}>
          {!!(preview || project.siteLink) && (
            <Button
              target={preview ? "_self" : "_blank"}
              href={
                preview
                  ? `/coding-projects/${encodeURIComponent(project.title)}`
                  : project.siteLink
              }
              style={preview ? "outline" : "fill"}
            >
              {preview ? "View Project" : "See Live"}
            </Button>
          )}
          {!preview && (
            <Button
              target="_blank"
              color="orange"
              href={project.githubLink}
              style="fill"
            >
              View Github
            </Button>
          )}
        </div>

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
