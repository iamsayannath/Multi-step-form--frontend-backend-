import { useFormContext } from "../context/FormContext";
import axios from "axios";
import { toast } from "react-toastify";

const FinalStep = () => {
  const { formData, prev } = useFormContext();

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/form", formData);
      toast.success("Form submitted successfully!");
      console.log(res);
      console.log(formData);
    } catch (err) {
      if (err.response && err.response.data.errors) {
        const errors = Object.values(err.response.data.errors).join(", ");
        toast.error(`Validation failed: ${errors}`);
      } else {
        toast.error("Submission failed due to server error.");
      }
    }
  };

  return (
    <div className="space-y-4">
      <button className="btn" onClick={prev}>back</button>
      <h3 className="text-xl font-bold">Confirm and Submit</h3>
      <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(formData, null, 2)}</pre>
      <button className="btn" onClick={handleSubmit}>Submit Now</button>
    </div>
  );
};

export default FinalStep;
