import React, { useState } from 'react';

import StepNumbers from 'components/Common/Steps/StepNumbers';
import LazyLoader from 'components/Common/LazyLoading';

import { Header } from './styles';

const StepOne = LazyLoader(() => import('./StepOne'));
const StepTwo = LazyLoader(() => import('./StepTwo'));
const StepThree = LazyLoader(() => import('./StepThree'));
const StepFour = LazyLoader(() => import('./StepFour'));

const OnBoarding = () => {
  const [activeSteps, setActiveSteps] = useState([1]);
  const [formData, setFormData] = useState({});

  const handleSteps = (stepNumbers) => {
    if (stepNumbers.constructor.name === 'Array') {
      // From last step
      setActiveSteps([...stepNumbers]);
      if (stepNumbers.length === 1 && stepNumbers[0] === 1) {
        // Initial start case
        setFormData({});
      }
    } else {
      const nextStep = activeSteps.length + 1;
      setActiveSteps([...activeSteps, nextStep]);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const props = {
    currentStep: activeSteps.length,
    handleSteps,
    inputProps: {
      onChange: handleChange,
    },
    formData,
  };

  const allSteps = {
    1: <StepOne {...props} />,
    2: <StepTwo {...props} />,
    3: <StepThree {...props} />,
    4: <StepFour {...props} />,
  };

  return (
    <>
      <Header>
        <img src="/logo192.png" alt="eden" />
        <h1>Eden</h1>
      </Header>
      <StepNumbers
        totalSteps={Object.keys(allSteps).length}
        activeSteps={activeSteps}
      />
      {allSteps[props.currentStep]}
    </>
  );
};

export default OnBoarding;
