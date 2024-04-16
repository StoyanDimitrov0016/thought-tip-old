import { useState } from "react";

export const useForm = (initialValues, submitCallback, numberValues = []) => {
  const [formValues, setFormValues] = useState(initialValues);

  const onChangeHandler = (event) => {
    const { name, value, type, checked } = event.target;

    let finalValue = value;

    if (type === "checkbox") {
      finalValue = checked;
    } else if (numberValues.includes(name)) {
      finalValue = Number(value);
    }
    setFormValues((prev) => ({
      ...prev,
      [name]: finalValue,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(formValues);
    await submitCallback(formValues);
  };

  const resetFormValues = () => {
    setFormValues(initialValues);
  };
  return { formValues, onChangeHandler, onSubmit, resetFormValues };
};
