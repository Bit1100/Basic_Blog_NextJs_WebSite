import Link from "next/link";
const ArticleItem = ({ article }) => {
  const { id, title, body } = article;
  return (
    <Link href="/article/[id]" as={`/article/${id}`}>
      <a>
        <div className="card">
          <div className="card-item">USER_ID: &rarr; {id}</div>
          <div className="card-item">Title: &rarr; {title}</div>
          <div className="card-item">Content: &rarr; {body}</div>
        </div>
      </a>
    </Link>
  );
};

export default ArticleItem;
