import { ContactHeader, ContactInfo, ContactSection } from "./ContactUs.styles";

// TODO: Add integrated contact form
const ContactUs = () => {
  return (
    <ContactSection aria-labelledby="contactus-header">
      <ContactHeader>
        <h1 id="contactus-header">Contact Us</h1>
        <p>
          If you have any questions, suggestions, or need assistance, please
          feel free to contact us:
        </p>
      </ContactHeader>
      <ContactInfo>
        <h2>Telephone</h2>
        <p>Available from 9:00 to 19:00 every day.</p>
        <p>
          <a href="tel:+3598978759273">+359 897 875 9273</a>
        </p>
      </ContactInfo>
      <ContactInfo>
        <h2>Email</h2>
        <p>Responses are typically provided within one working day.</p>
        <p>
          <a href="mailto:someemailexample@gmail.com">
            someemailexample@gmail.com
          </a>
        </p>
      </ContactInfo>
    </ContactSection>
  );
};

export default ContactUs;
