"use client";
import { ComponentProps } from "@/app/types/ComponentProps";
import { Art } from "@/app/types/db";
import styles from "./PortfolioItem.module.css";
import React, { useState } from "react";
import Container from "../Container/Container";
import Image from "next/image";
interface Props extends ComponentProps {
  art: Art;
}
export default function PortfolioItem({ art }: Props) {
  const [openArt, setOpenArt] = useState<null | string>(null);

  const handleOpenArt = (url: string) => {
    setOpenArt(url);
  };
  const handleCloseArt = (e) => {
    e.preventDefault();
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
      <article key={art.url} className={styles.item}>
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
        />
      </article>
    </React.Fragment>
  );
}
