import styles from "./PortfolioSection.module.css";
import PortfolioItem from "./PortfolioItem";
import { fetchDatabase } from "@/functions/fetchDatabase";
import { useEffect, useState } from "react";
import { useLoading } from "@/contexts/LoadingPage";
import { Art } from "@/types/db";
export default function PortfolioSection() {
  const [artworks, setArtworks] = useState<Art[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const { setIsLoading } = useLoading();
  useEffect(() => {
    async function fetchItems() {
      const response = fetchDatabase("art");
      const data = response.data;
      if (!data || !data.length) return;
      setArtworks(data);
    }
    fetchItems();
  }, []);
  useEffect(() => {
    if (!artworks.length) return;
    if (loadedCount >= artworks.length) setIsLoading(false);
  }, [loadedCount, artworks, setIsLoading]);

  if (!artworks.length) return <p>No items found.</p>;

  return (
    <section className={styles.items}>
      {artworks.map((art) => (
        <PortfolioItem
          setLoadedCount={setLoadedCount}
          art={art}
          key={art.url}
        />
      ))}
    </section>
  );
}
