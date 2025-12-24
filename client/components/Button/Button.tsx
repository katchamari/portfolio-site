"use client";
import styles from "./Button.module.css";
import React from "react";
import Link from "next/link";
import { ComponentProps } from "@/types/ComponentProps";
interface ButtonProps extends ComponentProps {
  disabled?: boolean;
  style?: "fill" | "outline";
  color?: "green" | "orange" | "transparent";
  action?: (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  href?: string;
  // technically used for max-width property in css but is used to specify width in practice
  width?: string;
  value?: string;
}
export default function Button({
  style = "fill",
  color = "green",
  action = (e) => {
    return e;
  },
  href,
  className = "",
  children,
  width = "fit-content",
  value = "on",
  disabled = false,
}: ButtonProps) {
  const getColor = (color: string) => {
    switch (color) {
      case "green":
        return "var(--accentColor)";
      case "orange":
        return "var(--accentColor)";
      default:
        return "transparent";
    }
  };
  const getBg = (color: string) => {
    switch (color) {
      case "green":
        return "url(/crayonbg1.svg)";
      default:
        return "transparent";
    }
  };
  const padding = color === "transparent" ? { padding: 0 } : {};

  if (href) {
    return (
      <Link
        href={href}
        className={`${styles.button} ${styles[style]} ${className}`}
        style={{
          maxWidth: width,
          borderColor: getColor(color),
          color: getColor(color),
          ...padding,
        }}
      >
        <span className={styles.text}>{children}</span>
        <span
          className={styles.background}
          style={{ background: getBg(color) }}
        />
      </Link>
    );
  }
  return (
    <button
      disabled={disabled}
      value={value}
      className={`${styles.button} ${styles[style]} ${className}`}
      onClick={action}
      style={{
        maxWidth: width,
        background: getBg("/crayonbg1.svg)"),
        borderColor: getColor(color),
        color: getColor(color),
        ...padding,
      }}
    >
      <span className={styles.text}>{children}</span>
      <span
        className={styles.background}
        style={{ background: getBg(color) }}
      />
    </button>
  );
}
