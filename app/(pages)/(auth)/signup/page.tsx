"use client";
import FormField from "@/components/custom/form-field";
import { Button } from "@/components/ui/button";
import { Form, Formik, FormikHelpers } from "formik";
import { Aperture } from "lucide-react";
import Image from "next/image";
import { FORM_FIELDS, IInitialValues, validationSchema } from "./constants";

const Page = () => {
  const initialValues: IInitialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    dob: "",
  };

  const handleSubmit = (
    values: IInitialValues,
    { resetForm }: FormikHelpers<IInitialValues>
  ) => {
    console.log("Form Submitted:", values);
    resetForm();
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

        {FORM_FIELDS.map((item) => (
          <FormField {...item} />
        ))}

        <Button type="submit">Login</Button>
      </Form>
    </Formik>
  );
};

export default Page;
