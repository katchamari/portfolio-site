import { formSubmit } from "@/app/functions/formSubmit";
import { useState } from "react";
import Button from "../Button/Button";
import { ComponentProps } from "@/app/types/ComponentProps";
import { FormProps } from "@/app/types/FormProps";
import { Response } from "@/app/types/Response";

interface Props extends ComponentProps {
  formData: FormProps;
  submitButtonText?: string;
  setFormData: React.Dispatch<React.SetStateAction<FormProps>>;
  onSubmitSuccess: () => Response | Promise<Response> | void | Promise<void>;
  callback?: () => Response | Promise<Response> | void | Promise<void>;
}
export default function Form({
  children,
  formData,
  submitButtonText = "Submit",
  className = "",
  setFormData,
  onSubmitSuccess = () => {},
  callback,
}: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <form
      noValidate
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        if (isSubmitting) return;
        setFormData((prev) => ({
          ...prev,
          submitAttempted: true,
        }));
        formSubmit({
          formData,
          setIsLoading: setIsSubmitting,
          callback,
          successMessage: "Logging in...",
          fn: onSubmitSuccess,
        });
      }}
    >
      {children}
      <Button disabled={isSubmitting} width="100%">
        {submitButtonText}
      </Button>
    </form>
  );
}
