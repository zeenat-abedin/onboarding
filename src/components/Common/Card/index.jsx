import { CardContainer } from "./styles";

const Card = ({ children, ...props }) => {
  return <CardContainer {...props}>{children}</CardContainer>;
};

export default Card;
