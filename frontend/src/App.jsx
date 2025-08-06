import { FormProvider } from "./context/FormContext";
import MultiStepForm from "./components/MultiStepForm";

function App() {
  return (
    <FormProvider>
      <MultiStepForm />
    </FormProvider>
  );
}

export default App;
