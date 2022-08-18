import Button from "components/Common/Button";
import StepLayout from "components/Common/Steps/StepLayout";

import { StepFourContainer } from "./styles";

const StepFour = ({ handleSteps }) => {
  const handleSubmit = () => {
    handleSteps([1]);
  };
  return (
    <StepLayout>
      <StepFourContainer>
        <img src="/checked.png" alt="success" />
        <section>
          <h2>Congratulations, John!</h2>
          <p>You have completed onboarding, you can start using the Eden!</p>
        </section>
        <Button onClick={handleSubmit}>Launch Eden</Button>
      </StepFourContainer>
    </StepLayout>
  );
};

export default StepFour;
