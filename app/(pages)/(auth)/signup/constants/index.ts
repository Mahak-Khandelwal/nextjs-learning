import { IFormFieldProps } from "@/components/custom/form-field";
import { Input } from "@/components/ui/input";
import * as Yup from "yup";

export const FORM_FIELDS: IFormFieldProps[] = [
  {
    label: "First Name",
    name: "firstName",
    type: "text",
    as: Input,
    placeholder: "Enter first name",
  },
  {
    label: "Last Name",
    name: "lastName",
    type: "text",
    as: Input,
    placeholder: "Enter last name",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    as: Input,
    placeholder: "Enter email",
  },
  {
    label: "Date of Birth",
    name: "dob",
    type: "date",
    as: Input,
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    as: Input,
    placeholder: "Enter password",
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
    as: Input,
    placeholder: "Re-enter password",
  },
];

export const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email.")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Minimum 6 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[0-9]/, "Must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Must contain at least one special character"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  dob: Yup.date()
    .required("Date of birth is required")
    .max(
      new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
      "You must be at least 18 years old"
    ),
});

export interface IInitialValues {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  dob: Date | string;
}
