import { InputGroup, InputAddOnContainer } from "./styles";

const Input = ({
  labelText,
  customStyle = {},
  optionalLabelText,
  prependText,
  ...props
}) => {
  const { id, htmlFor, name } = props;
  const inputId = id || htmlFor || name;

  return (
    <InputGroup style={customStyle}>
      <label htmlFor={inputId}>
        <span className="label_text">{labelText}</span>
        {optionalLabelText && (
          <span className="optional_label_text">({optionalLabelText})</span>
        )}
      </label>
      {prependText ? (
        <InputAddOnContainer>
          <span className="item">{prependText}</span>
          <input
            className="field"
            type="text"
            placeholder="type here..."
            id={inputId}
            {...props}
          />
        </InputAddOnContainer>
      ) : (
        <input type="text" placeholder="type here..." id={inputId} {...props} />
      )}
    </InputGroup>
  );
};

export default Input;
