import { useFormContext } from "../context/FormContext";
import { useState } from "react";
import '../index.css';

const Step1 = () => {
  const { formData, updateField, next } = useFormContext();
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(formData.email.trim())) newErrors.email = "Invalid email";
    if (formData.password.length < 6) newErrors.password = "Min 6 characters";
    if (!formData.age || isNaN(formData.age)) newErrors.age = "Enter valid age";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) next();
  };

  return (
    <div className="flex flex-col gap-6 p-4">
      <input
        className="input"
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => updateField("name", e.target.value)}
      />
      {errors.name && <p className="text-red-500">{errors.name}</p>}

      <input
        className="input"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => updateField("email", e.target.value)}
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}

      <input
        className="input"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => updateField("password", e.target.value)}
      />
      {errors.password && <p className="text-red-500">{errors.password}</p>}

      <input
        className="input"
        type="number"
        placeholder="Age"
        value={formData.age}
        onChange={(e) => updateField("age", e.target.value)}
      />
      {errors.age && <p className="text-red-500">{errors.age}</p>}

      <button className="btn" onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step1;
