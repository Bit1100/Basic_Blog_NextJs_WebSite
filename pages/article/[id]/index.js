import { server } from "../../../config/index";
import Meta from "../../../components/Meta";

// import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Article = ({ article }) => {
  // const [article, setArticle] = useState({});
  // const { id } = router.query;
  const router = useRouter();
  const { id, title, body } = article;

  /* useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      const article = await response.json();

      setArticle(article);
    })();
  }, []); */

  return (
    <>
      <Meta title={title} description={body} />
      <h1>Welcome to BiT Article No. {id}</h1>

      <div className="card">
        <div className="card-item">USER_ID: &rarr; {id}</div>
        <div className="card-item">Title: &rarr; {title}</div>
        <div className="card-item">Content: &rarr; {body}</div>
      </div>
      <div className="err-btn-wrapper">
        <button onClick={() => router.push("/")}>Go to Home Page</button>
      </div>
    </>
  );
};

export default Article;

export const getStaticProps = async (context) => {
  const response = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await response.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch(`${server}/api/articles/`);

  const articles = await response.json();

  const ids = articles.map((article) => article.id);

  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

/* export const getServerSideProps = async (context) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.query.id}`
  );

  const article = await response.json();

  return {
    props: {
      article,
    },
  };
}; */
