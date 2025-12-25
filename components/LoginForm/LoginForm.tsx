"use client";
import styles from "./LoginForm.module.css";
import Form from "../Form/Form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Input from "../Input/Input";
import { FormProps } from "@/types/FormProps";

export default function LoginForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormProps>({
    errors: [],
    submitAttempted: false,
    email: "",
    password: "",
  });
  const handleLogin = () => {
    return;
  };
  return (
    <Form
      className={styles.form}
      onSubmitSuccess={handleLogin}
      setFormData={setForm}
      formData={form}
      submitButtonText="Log In"
      callback={() => {
        router.push("/login");
      }}
    >
      <h1 className={styles.title}>Login</h1>
      <Input
        required={true}
        setFormData={setForm}
        name="email"
        label="Email"
        id="email"
        type="email"
        formData={form}
      />
      <Input
        required={true}
        id="password"
        setFormData={setForm}
        name="password"
        label="Password"
        type="password"
        formData={form}
      />
    </Form>
  );
}
