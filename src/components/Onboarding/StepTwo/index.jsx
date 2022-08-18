import Input from "components/Common/Input";
import Button from "components/Common/Button";

import StepLayout from "components/Common/Steps/StepLayout";

const StepTwo = ({ handleSteps, inputProps, formData }) => {
  return (
    <StepLayout
      title="Let's set up a home for all your work"
      paragraph="You can always create another workspace later"
    >
      <section>
        <Input
          name="workspace_name"
          labelText="Workspace Name"
          placeholder="Eden"
          customStyle={{
            marginBottom: "1rem",
          }}
          value={formData?.workspace_name || ""}
          {...inputProps}
        />
        <Input
          name="workspace_url"
          labelText="Workspace URL"
          optionalLabelText="optional"
          placeholder="Example"
          prependText="www.eden.com/"
          customStyle={{
            marginBottom: "1.5rem",
          }}
          value={formData?.workspace_url || ""}
          {...inputProps}
        />
        <Button
          onClick={handleSteps}
          disabled={!formData?.workspace_name || !formData?.workspace_url}
        >
          Create Workspace
        </Button>
      </section>
    </StepLayout>
  );
};

export default StepTwo;
