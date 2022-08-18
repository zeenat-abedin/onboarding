import { StepLayoutContainer } from "./styles";

const StepLayout = ({ title, paragraph, children, ...props }) => {
  return (
    <StepLayoutContainer {...props}>
      <header>
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </header>
      {children}
    </StepLayoutContainer>
  );
};

export default StepLayout;
