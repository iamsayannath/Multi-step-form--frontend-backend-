import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    phone: "",
    gender: "",
    interests: [],
    country: "",
    bio: "",
    dob: "",
    preferredTime: "",
    range: 50,
    website: "",
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const next = () => setStep((prev) => prev + 1);
  const prev = () => setStep((prev) => prev - 1);

  return (
    <FormContext.Provider value={{ step, next, prev, formData, updateField }}>
      {children}
    </FormContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFormContext = () => useContext(FormContext);
