import { useFormContext } from "../context/FormContext";
import { useState } from "react";
import '../index.css';

const Step2 = () => {
  const { formData, updateField, next, prev } = useFormContext();
  const [errors, setErrors] = useState({});

  const interestsList = ["Coding", "Music", "Traveling", "Reading"];
  const countries = ["India", "USA", "UK", "Canada"];

  const handleCheckbox = (value) => {
    const updated = formData.interests.includes(value)
      ? formData.interests.filter((item) => item !== value)
      : [...formData.interests, value];
    updateField("interests", updated);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.phone || formData.phone.length < 10) newErrors.phone = "Invalid phone";
    if (!formData.gender) newErrors.gender = "Select gender";
    if (formData.interests.length === 0) newErrors.interests = "Select at least one interest";
    if (!formData.country) newErrors.country = "Select country";
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
        type="tel"
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => updateField("phone", e.target.value)}
      />
      {errors.phone && <p className="text-red-500">{errors.phone}</p>}

      <div>
        <label className="mr-4">Gender:</label>
        <label><input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={(e) => updateField("gender", e.target.value)} /> Male</label>
        <label className="ml-4"><input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={(e) => updateField("gender", e.target.value)} /> Female</label>
        {errors.gender && <p className="text-red-500">{errors.gender}</p>}
      </div>

      <div>
        <label>Interests:</label>
        <div className="flex gap-4 flex-wrap">
          {interestsList.map((interest) => (
            <label key={interest}>
              <input type="checkbox" value={interest} checked={formData.interests.includes(interest)} onChange={() => handleCheckbox(interest)} />
              {interest}
            </label>
          ))}
        </div>
        {errors.interests && <p className="text-red-500">{errors.interests}</p>}
      </div>

      <div>
        <label>Country:</label>
        <select className="input" value={formData.country} onChange={(e) => updateField("country", e.target.value)}>
          <option value="">Select</option>
          {countries.map((country) => <option key={country}>{country}</option>)}
        </select>
        {errors.country && <p className="text-red-500">{errors.country}</p>}
      </div>

      <div className="flex justify-between">
        <button className="btn" onClick={prev}>Back</button>
        <button className="btn" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Step2;
