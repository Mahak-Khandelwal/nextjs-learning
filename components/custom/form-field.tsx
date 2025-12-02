import React from "react";
import { Label } from "../ui/label";
import { ErrorMessage, Field } from "formik";

export interface IFormFieldProps {
  label: string;
  as: React.ElementType;
  type: string;
  name: string;
  placeholder?: string;
}

const FormField = (item: IFormFieldProps) => {
  return (
    <div>
      <Label>{item.label}</Label>
      <Field
        as={item.as}
        type={item.type}
        name={item.name}
        placeholder={item.placeholder}
      />
      <ErrorMessage
        name={item.name}
        component="p"
        className="text-red-500 text-sm  capitalize"
      />
    </div>
  );
};

export default FormField;
