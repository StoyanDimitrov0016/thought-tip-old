import {
  Button,
  CareersSection,
  Header,
  List,
  ListItem,
  Text,
} from "./Careers.styles";

const CareersView = () => {
  return (
    <CareersSection>
      <Header>Careers</Header>
      <Text>
        I am currently seeking new opportunities to bring dedication and
        technical skill to a dynamic team. Here's what I can offer:
      </Text>
      <List>
        <ListItem>Deep knowledge in JavaScript, React, and Node.js</ListItem>
        <ListItem>
          Experience with responsive and cross-platform design
        </ListItem>
        <ListItem>
          Proven track record of delivering projects successfully
        </ListItem>
      </List>
      <Text>
        View my projects and resume or contact me directly to learn more about
        how I can contribute to your team.
      </Text>
      <Button>Download Resume</Button>
      <Button>Contact Me</Button>
    </CareersSection>
  );
};

export default CareersView;
