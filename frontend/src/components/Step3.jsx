import { useFormContext } from "../context/FormContext";
import { useState } from "react";
import '../index.css';

const Step3 = () => {
  const { formData, updateField, next, prev } = useFormContext();
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.bio || formData.bio.length < 10) newErrors.bio = "Min 10 characters";
    if (!formData.dob) newErrors.dob = "Select date of birth";
    if (!formData.preferredTime) newErrors.preferredTime = "Select time";
    if (!formData.website.startsWith("http")) newErrors.website = "Enter valid URL";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) next();
  };

  return (
    <div className="flex flex-col gap-6 p-4">
      <textarea
        className="input"
        placeholder="Your bio"
        value={formData.bio}
        onChange={(e) => updateField("bio", e.target.value)}
      />
      {errors.bio && <p className="text-red-500">{errors.bio}</p>}

      <input
        className="input"
        type="date"
        value={formData.dob}
        onChange={(e) => updateField("dob", e.target.value)}
      />
      {errors.dob && <p className="text-red-500">{errors.dob}</p>}

      <input
        className="input"
        type="time"
        value={formData.preferredTime}
        onChange={(e) => updateField("preferredTime", e.target.value)}
      />
      {errors.preferredTime && <p className="text-red-500">{errors.preferredTime}</p>}

      <label>
        Range: {formData.range}
        <input
          className="w-full"
          type="range"
          min="0"
          max="100"
          value={formData.range}
          onChange={(e) => updateField("range", e.target.value)}
        />
      </label>

      <input
        className="input"
        type="url"
        placeholder="Website"
        value={formData.website}
        onChange={(e) => updateField("website", e.target.value)}
      />
      {errors.website && <p className="text-red-500">{errors.website}</p>}

      <div className="flex justify-between">
        <button className="btn" onClick={prev}>Back</button>
        <button className="btn" onClick={handleNext}>Submit</button>
      </div>
    </div>
  );
};

export default Step3;
