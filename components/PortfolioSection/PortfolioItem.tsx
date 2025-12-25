"use client";
import { ComponentProps } from "@/types/ComponentProps";

import styles from "./PortfolioItem.module.css";
import React, { useState } from "react";
import Container from "../Container/Container";
import Image from "next/image";
import { Art } from "@/types/db";
import { playClick } from "@/functions/sounds";
interface Props extends ComponentProps {
  art: Art;
  setLoadedCount: React.Dispatch<React.SetStateAction<number>>;
}
export default function PortfolioItem({
  art,
  setLoadedCount,
  className = "",
}: Props) {
  const [openArt, setOpenArt] = useState<null | string>(null);

  const handleOpenArt = (url: string) => {
    playClick();
    setOpenArt(url);
  };
  const handleCloseArt = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    playClick();
    setOpenArt(null);
  };
  return (
    <React.Fragment>
      {!!openArt && (
        <div className={styles.openItem}>
          <Container className={styles.container}>
            <a onClick={handleCloseArt} className={styles.closeItem}>
              <Image
                src="/x.png"
                width={100}
                height={100}
                alt="X icon to close image popup."
              />
            </a>
            <Image
              src={art.url}
              width={1200}
              height={900}
              alt={`Full size image: ${art.alt}`}
            />
          </Container>
        </div>
      )}
      <article key={art.url} className={`${styles.item} ${className}`}>
        <a
          className={styles.link}
          onClick={(e) => {
            e.preventDefault();
            handleOpenArt(art.url);
          }}
        />
        <Image
          alt={art.alt}
          src={art.url}
          fill
          style={{ objectFit: "cover" }}
          onLoad={() => setLoadedCount((prev) => (prev += 1))}
        />
      </article>
    </React.Fragment>
  );
}
