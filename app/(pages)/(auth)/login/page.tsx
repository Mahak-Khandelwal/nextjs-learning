"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Aperture } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import useAuth from "@/app/store/useAuth";

// Validation Schema using Yup (optional but recommended)
const validationSchema = Yup.object({
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
});

const Page = () => {
  interface IInitialValues {
    email: string;
    password: string;
  }
  const initialValues: IInitialValues = {
    email: "",
    password: "",
  };
  const { setIsLogin } = useAuth();
  const handleSubmit = (values: IInitialValues) => {
    console.log("Form Submitted:", values);
    setIsLogin();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="lg:w-1/2 flex flex-col gap-4 w-2/3">
        <div className="flex justify-center">
          <Aperture size={100} />
        </div>

        <div>
          <Label>Email</Label>
          <Field as={Input} type="email" name="email" />
          <ErrorMessage
            name="email"
            component="p"
            className="text-red-500 text-sm font-bold capitalize"
          />
        </div>

        <div>
          <Label>Password</Label>
          <Field as={Input} type="password" name="password" />
          <ErrorMessage
            name="password"
            component="p"
            className="text-red-500 text-sm font-bold capitalize"
          />
        </div>

        <Button type="submit">Login</Button>
      </Form>
    </Formik>
  );
};

export default Page;
