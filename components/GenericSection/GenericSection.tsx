import { ComponentProps } from "@/types/ComponentProps";
import PortfolioItem from "../PortfolioSection/PortfolioItem";
import { CodeBodyItem } from "@/types/db";
import styles from "./GenericSection.module.css";

interface Props extends ComponentProps {
  section: CodeBodyItem;
  title: string;
}
export default function GenericSection({ section, title }: Props) {
  const { type, content = [] } = section;
  switch (type) {
    case "heading":
      return content.map((text) => <h2 key={text}>{text}</h2>);
    case "text":
      return content.map((text) => <p key={text}>{text}</p>);
    case "list":
      return (
        <ul>
          {content.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      );
    case "image":
      return (
        <div className={styles.photos}>
          {content.map((url) => (
            <PortfolioItem
              key={url}
              className={styles.photo}
              art={{ url, alt: title + " snapshot" }}
              setLoadedCount={() => {}}
            />
          ))}
        </div>
      );
    default:
      return;
  }
}
