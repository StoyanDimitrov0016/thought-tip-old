import ContactUsCard from "../components/ContacUsCard/ContactUsCard";
import styled from "styled-components";

const contactOptions = [
  {
    title: "Tel.:",
    content: "Our working time is from 9:00 up to 19:00 every day",
    value: "+359 897 875 9273",
  },
  {
    title: "Email:",
    content: "The average answering time is 1 working day",
    value: "example@emailsomething.com",
  },
];

const ContactView = () => {
  const ContacViewWrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    header {
      text-align: center;
      margin-bottom: 2rem;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      margin-bottom: 1rem;
    }
  `;

  return (
    <ContacViewWrapper>
      <header>
        <h1>Contact Us</h1>
        <p>
          If you are not sure about something, want to send us a suggestion, or
          just something else, feel free to contact us by these options:
        </p>
        <ul>
          {contactOptions.map((option) => (
            <ContactUsCard key={option.title} {...option} />
          ))}
        </ul>
      </header>
    </ContacViewWrapper>
  );
};

export default ContactView;
