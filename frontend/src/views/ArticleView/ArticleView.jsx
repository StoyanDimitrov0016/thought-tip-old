import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArticleView = () => {
  const { articleId } = useParams();
  const [currentArticle, setCurrentArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Example URL structure - replace "https://example.com/api/articles/" with your actual API endpoint
    const url = `https://something-url.com/api/articles/${articleId}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCurrentArticle(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the article:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [articleId]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  if (!currentArticle) return <div>No article found</div>;

  const { title, author, avgReadingTime, content, publishedDate } =
    currentArticle;

  return (
    <main>
      <article>
        <header>
          <h1>{title}</h1>
          <p>
            By <strong>{author}</strong>
          </p>
          <p>
            Average Reading Time: <strong>{avgReadingTime} minutes</strong>
          </p>
          <time dateTime={publishedDate}>
            Published on: {new Date(publishedDate).toLocaleDateString()}
          </time>
        </header>
        <section>
          <p>{content}</p>
        </section>
        <div className="article-actions">
          <button>Add Comment</button>
          <button>Add To Favourite</button>
          <button>Tip</button>
          <button>Like</button>
        </div>
      </article>
    </main>
  );
};

export default ArticleView;
