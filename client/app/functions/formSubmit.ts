import { FormProps } from "../types/FormProps";
import { Response } from "../types/Response";
import toast from "react-hot-toast";

type Props = {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  fn: () => Response | Promise<Response> | void | Promise<void>;
  callback?: () => Response | Promise<Response> | void | Promise<void>;
  formData: FormProps;
  successMessage: string;
};
export async function formSubmit({
  formData,
  setIsLoading,
  successMessage,
  callback = () => {},
  fn = () => {},
}: Props) {
  if (formData.errors.length) return;
  try {
    setIsLoading(true);
    const response = await fn();
    if (response && response.err) {
      throw new Error(response.err);
    }
    toast.success(successMessage);
    callback();
  } catch (err) {
    if (err instanceof Error) {
      toast.error(err.message);
    } else {
      toast.error("An unknown error occurred");
    }
    setIsLoading(false);
  }
}
