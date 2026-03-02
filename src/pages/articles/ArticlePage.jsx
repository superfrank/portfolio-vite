import { useParams } from "react-router-dom";
import { getArticleConfig } from "./articleConfig";

const ArticlePage = () => {
  const { articleSlug } = useParams();
  const article = getArticleConfig(articleSlug);

  if (!article) {
    return (
      <main id="top" className="page-article page-article--not-found">
        <div className="page-article__container">
          <h1 className="page-article__title">404</h1>
          <p className="page-article__lede">Page not found.</p>
        </div>
      </main>
    );
  }

  const ArticleComponent = article.component;

  return <ArticleComponent article={article} />;
};

export default ArticlePage;
