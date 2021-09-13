import { server } from "../config/index";
import ArticleItem from "../components/ArticleItem";
import Meta from "../components/Meta";

// Index Page
export default function Home({ articles }) {
  return (
    <>
      <Meta
        title="Home Page - BiT"
        description="This is a bideo website home page"
      />
      <h1>Welcome to Bideo World</h1>
      {articles.map((article) => {
        return <ArticleItem key={article.id} article={article} />;
      })}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolore,
        ea ratione explicabo enim nobis? Labore in perspiciatis necessitatibus
        beatae dolorum sit corporis alias aperiam asperiores totam minima quam
        voluptatum distinctio facilis eius, deleniti, repudiandae pariatur
        architecto rerum saepe ad debitis, placeat earum? Incidunt explicabo,
        labore fugiat iusto reiciendis ullam consectetur? Libero eius vel
        voluptates earum in. Suscipit possimus, nisi odio aperiam natus neque
        minima at architecto ratione ex similique corporis voluptatem eligendi
        deserunt necessitatibus! Veritatis nesciunt architecto dolorem earum.
      </p>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`${server}/api/articles`);

  const articles = await response.json();

  return {
    props: {
      articles,
    },
  };
};
