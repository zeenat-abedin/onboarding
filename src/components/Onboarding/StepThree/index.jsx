import { useState } from "react";

import Button from "components/Common/Button";
import Card from "components/Common/Card";
import StepLayout from "components/Common/Steps/StepLayout";

import { CardContainer, CardContentDiv } from "./styles";

const CardContent = ({ title, text, imgFile, isActive }) => {
  return (
    <CardContentDiv isActive={isActive}>
      {imgFile && <img src={imgFile} alt={title} />}
      <h3>{title}</h3>
      <p>{text}</p>
    </CardContentDiv>
  );
};

const StepThree = ({ handleSteps }) => {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <StepLayout
      title="How are you planning to use Eden"
      paragraph="We'll streamline your setup experience accordingly"
    >
      <CardContainer>
        <Card
          isActive={activeCard === 1 ? "true" : "false"}
          onClick={() => setActiveCard(1)}
          style={{ cursor: "pointer" }}
        >
          <CardContent
            title="For myself"
            text="With better, Think more clearly. Stay organized."
            imgFile="/user.png"
            isActive={activeCard === 1 ? "true" : "false"}
          />
        </Card>
        <Card
          isActive={activeCard === 2 ? "true" : "false"}
          onClick={() => setActiveCard(2)}
          style={{ cursor: "pointer" }}
        >
          <CardContent
            title="With my team"
            text="Wikis, docs, tasks & projects, all in one place."
            imgFile="/teams.png"
            isActive={activeCard === 2 ? "true" : "false"}
          />
        </Card>
      </CardContainer>
      <Button onClick={handleSteps}>Create Workspace</Button>
    </StepLayout>
  );
};

export default StepThree;
