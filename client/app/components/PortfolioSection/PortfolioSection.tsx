import { fetchDatabase } from "@/app/functions/fetchDatabase";
import styles from "./PortfolioSection.module.css";
import PortfolioItem from "./PortfolioItem";
export default function PortfolioSection() {
  const response = fetchDatabase("art");
  const data = response.data;
  if (!data || !data.length) return <p>No items found.</p>;
  const artworks = data.toReversed();
  return (
    <section className={styles.items}>
      {artworks.map((art) => (
        <PortfolioItem art={art} key={art.url} />
      ))}
    </section>
  );
}
