import { StepNumbersContainer } from "./styles";

const StepNumbers = ({ totalSteps = 4, activeSteps = [1] }) => {
  return (
    <StepNumbersContainer>
      {Array(totalSteps)
        .fill(1)
        .map((_, index) => (
          <div
            key={index}
            className={`${activeSteps.includes(index + 1) ? "active" : ""}`}
          >
            {index + 1}
          </div>
        ))}
    </StepNumbersContainer>
  );
};

export default StepNumbers;
