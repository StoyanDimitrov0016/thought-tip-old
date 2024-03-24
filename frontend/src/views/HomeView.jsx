import { useEffect, useState } from "react";
import articles from "../mock-data";
import ArticlePreview from "../components/ArticlePreview/ArticlePreview";
import styled from "styled-components";
import Searchbar from "../components/Searchbar/Searchbar";

const MainWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
`;

const MainStyled = styled.main``;

const AsideStyled = styled.aside`
align-self: flex-start;
`;

const HomeView = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    setThoughts(articles.slice(10));
  }, []);

  return (
    <MainWrapper>
      <MainStyled>
        {thoughts &&
          thoughts.length > 0 &&
          thoughts.map((t) => <ArticlePreview key={t.id} article={t} />)}
      </MainStyled>
      <AsideStyled>
        <Searchbar />
      </AsideStyled>
    </MainWrapper>
  );
};

export default HomeView;
