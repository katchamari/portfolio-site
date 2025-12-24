"use client";
import { ComponentProps } from "@/types/ComponentProps";

import styles from "./Input.module.css";
import { useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { FormProps } from "@/types/FormProps";
interface Props extends ComponentProps {
  type:
    | "text"
    | "email"
    | "password"
    | "select"
    | "textarea"
    | "checkbox"
    | "radio";
  name: string;
  id: string;
  format?: "wrapped" | "same-line";
  label?: string;
  required: boolean;
  setFormData?: React.Dispatch<React.SetStateAction<FormProps>>;
  formData: { submitAttempted: boolean };
}
const inputTag = (
  input: Props,
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
) => {
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setValue(e.target.value);
  };
  switch (input.type) {
    case "select":
      return <select></select>;
    case "textarea":
      return <textarea></textarea>;
    default:
      return <input onChange={handleInputChange} type={input.type} />;
  }
};
const findErrors = (input: Props, value: string) => {
  const { type, required = false } = input;
  const val = value.trim();
  if (required && !val) return "This field is required";
  switch (type) {
    case "email":
      return !/^.+@.+$/.test(val) && "Incorrect email format";
  }
};
export default function Input(input: Props) {
  const {
    type,
    className = "",
    format = "wrapped",
    label = "",
    formData,
    setFormData = () => {},
    name,
  } = input;
  const [value, setValue] = useState<string>("");
  const currentError = findErrors(input, value);

  useEffect(() => {
    setFormData((prev: FormProps) => {
      const errorsSet = new Set(prev.errors);

      if (currentError) errorsSet.add(input.id);
      else errorsSet.delete(input.id);

      return {
        ...prev,
        errors: Array.from(errorsSet),
        [name]: value,
      };
    });
  }, [currentError, input.id, name, value, setFormData]);
  return (
    <div
      className={`${styles.inputGroup} ${styles[type]} ${styles[format]} ${className}`}
    >
      {label && <label>{label}</label>}
      <div className={styles.inputContainer}>
        {inputTag(input, value, setValue)}
      </div>
      {!!(currentError && formData.submitAttempted) && (
        <ErrorMessage className={styles.error}>{currentError}</ErrorMessage>
      )}
    </div>
  );
}
