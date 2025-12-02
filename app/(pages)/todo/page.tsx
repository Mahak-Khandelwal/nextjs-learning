"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  title: Yup.string().required("title is required"),
  description: Yup.string().required("description is required"),
});

const todo = () => {
  interface IInitialValues {
    title: string;
    description: string;
  }
  const initialValues: IInitialValues = {
    title: "",
    description: "",
  };

  const handleSubmit = (values: IInitialValues) => {
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <Label>Title</Label>
            <Field as={Input} type="text" name="title" />
            <ErrorMessage name="title" component="p" />
          </div>
          <div>
            <Label>Description</Label>
            <Field as={Input} type="text" name="description" />
            <ErrorMessage name="description" />
          </div>
          <Button type="submit">Added</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default todo
