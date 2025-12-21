"use client";
import styles from "./Button.module.css";
import React from "react";
import Link from "next/link";
import { ComponentProps } from "@/app/types/ComponentProps";
interface ButtonProps extends ComponentProps {
  disabled?: boolean;
  style?: "fill" | "outline";
  // for outline buttons this is the border color and hover fill color
  fillColor?: string;
  textColor?: string;
  action?: (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  href?: string;
  // technically used for max-width property in css but is used to specify width in practice
  width?: string;
  value?: string;
}
export default function Button({
  style = "fill",
  fillColor = "var(--accentColor)",
  textColor,
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
  const padding = fillColor === 'transparent' ? {padding:0} : {};
  if (href) {
    return (
      <Link
        href={href}
        className={`${styles.button} ${styles[style]} ${className}`}
        style={{
          maxWidth: width,
          background: fillColor,
          borderColor: fillColor,
          color: style === "fill" ? textColor : fillColor,
          ...padding
        }}
      >
        {children}
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
        background: fillColor,
        borderColor: fillColor,
        color: style === "fill" ? textColor : fillColor,
        ...padding
      }}
    >
      {children}
    </button>
  );
}
