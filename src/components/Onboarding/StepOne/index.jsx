import Input from "components/Common/Input";
import Button from "components/Common/Button";
import StepLayout from "components/Common/Steps/StepLayout";

const StepOne = ({ handleSteps, formData, inputProps }) => {
  return (
    <StepLayout
      title="Welcome! First things first..."
      paragraph="You can always change them later"
    >
      <section>
        <Input
          name="full_name"
          labelText="Full Name"
          placeholder="John Doe"
          customStyle={{
            marginBottom: "1rem",
          }}
          value={formData?.full_name || ""}
          {...inputProps}
        />
        <Input
          name="display_name"
          labelText="Display Name"
          placeholder="John"
          customStyle={{
            marginBottom: "1.5rem",
          }}
          value={formData?.display_name || ""}
          {...inputProps}
        />
        <Button
          onClick={handleSteps}
          disabled={!formData?.full_name || !formData?.display_name}
        >
          Create Workspace
        </Button>
      </section>
    </StepLayout>
  );
};

export default StepOne;
