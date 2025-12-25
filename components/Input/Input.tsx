"use client";
import { ComponentProps } from "@/types/ComponentProps";

import styles from "./Input.module.css";
import { useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { FormProps } from "@/types/FormProps";
type Option = {
  label: string;
  value: string;
};
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
  defaultValue?: string;
  value?: string;
  options?: Option[];
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
  defaultValue: string,
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
      return (
        <select
          value={value}
          onChange={handleInputChange}
          defaultValue={defaultValue}
        >
          {!!input.options &&
            input.options.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
        </select>
      );
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
    defaultValue = "",
    value: controlledValue,
    setFormData = () => {},
    name,
  } = input;
  const [value, setValue] = useState<string>("");
  const currentError = findErrors(input, value);

  useEffect(() => {
    async function setFields() {
      if (controlledValue) setValue(controlledValue);
    }
    setFields();
  }, [controlledValue]);
  useEffect(() => {
    async function setFields() {
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
    }
    setFields();
  }, [currentError, input.id, name, value, setFormData]);
  return (
    <div
      className={`${styles.inputGroup} ${styles[type]} ${styles[format]} ${className}`}
    >
      {label && <label>{label}</label>}
      <div className={styles.inputContainer}>
        {inputTag(input, value, setValue, defaultValue)}
      </div>
      {!!(currentError && formData.submitAttempted) && (
        <ErrorMessage className={styles.error}>{currentError}</ErrorMessage>
      )}
    </div>
  );
}
