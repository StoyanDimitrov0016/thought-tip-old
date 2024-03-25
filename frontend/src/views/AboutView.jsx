import styled from 'styled-components';

const MainContainer = styled.main`
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  margin: 0;
  color: #333;
`;

const Paragraph = styled.p`
  line-height: 1.6;
`;

const AboutView = () => {
  return (
    <MainContainer>
      <Header>
        <Title>Welcome to ThoughtTip</Title>
      </Header>

      <Paragraph>
        ThoughtTip is not just a platform, it's a revolution in the way we appreciate and reward intellectual effort. In a world bustling with information, ThoughtTip stands out by offering a sanctuary for those who seek to share their knowledge and for those who are eager to learn. Our core belief is that valuable insights deserve more than just recognition—they deserve tangible appreciation.
      </Paragraph>
      <Paragraph>
        We have created a unique ecosystem where thinkers, writers, and educators can publish their articles, insights, and tutorials across diverse subjects. From the depths of quantum physics to the practical tips on everyday life, ThoughtTip serves as a bridge connecting knowledge seekers with knowledge providers.
      </Paragraph>
      <Paragraph>
        What sets ThoughtTip apart is our innovative tipping system. Readers who find particular articles enlightening or beneficial have the option to tip the authors in satoshis—the smallest unit of the bitcoin currency. This micro-tipping model not only fosters a culture of generosity and gratitude but also establishes a new way to value and incentivize the sharing of knowledge.
      </Paragraph>
      <Paragraph>
        Every article on ThoughtTip is a step towards enlightening someone's path. Whether you're here to share your expertise or to quench your thirst for knowledge, you're contributing to a cycle of continuous learning and appreciation. It's more than just an exchange of information; it's about building a community that values and supports intellectual contributions.
      </Paragraph>
      <Paragraph>
        Join us in this journey of knowledge and appreciation. Share your thoughts, tip your favorite authors, and become part of a movement that values knowledge not just for its utility but for the effort and thought put into it. Let's create a world where every thought counts and every tip tips the scales towards a more informed and appreciative society.
      </Paragraph>
    </MainContainer>
  );
};

export default AboutView;
