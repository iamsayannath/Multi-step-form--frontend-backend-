import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import FinalStep from "./FinalStep";
import { useFormContext } from "../context/FormContext";

const MultiStepForm = () => {
  const { step } = useFormContext();

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Multi Step Form</h2>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <FinalStep />}
    </div>
  );
};

export default MultiStepForm;
