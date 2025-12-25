import { fetchDatabase } from "@/functions/fetchDatabase";
import CodingSectionItem from "./CodingSectionItem/CodingSectionItem";
import styles from "./CodingSection.module.css";

export default function CodingSection() {
  const response = fetchDatabase("code");
  const data = response.data;
  if (!data || !data.length) return <p>No items found.</p>;
  const codingProjects = data.toReversed();
  return (
    <section className={styles.section}>
      {codingProjects.map((item) => (
        <CodingSectionItem viewType="preview" key={item.title} project={item} />
      ))}
    </section>
  );
}
