import {
  ContentSection,
  Description,
  Header,
  MainSection,
  SectionContent,
  SectionHeader,
  Title,
} from "./AboutUs.styles";
import aboutUsContent from "./about-us-content";

const AboutUs = () => {
  return (
    <MainSection>
      <Header>
        <Title>{aboutUsContent.title}</Title>
        <Description>{aboutUsContent.description}</Description>
      </Header>
      {aboutUsContent.sections.map((section, index) => (
        <ContentSection key={index}>
          <SectionHeader>{section.header}</SectionHeader>
          <SectionContent>{section.content}</SectionContent>
        </ContentSection>
      ))}
    </MainSection>
  );
};

export default AboutUs;
