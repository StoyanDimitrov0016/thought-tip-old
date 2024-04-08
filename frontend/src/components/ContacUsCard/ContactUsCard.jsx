import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardTitle,
  CardText,
  CardValue,
} from "./ContactUsCardStyles";

const ContactUsCard = ({ title, content, value }) => {
  return (
    <CardWrapper>
      <CardContainer>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardValue>{value}</CardValue>
        <CardText>{content}</CardText>
      </CardContainer>
    </CardWrapper>
  );
};

export default ContactUsCard;
