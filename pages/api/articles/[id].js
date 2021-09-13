import { articles } from "../../../data.json";

export default function articlesHandler(req, res) {
  const id = req.query.id;

  const filteredArticle = JSON.parse(articles).filter(
    (article) => article.id === id
  );

  if (filteredArticle.length) {
    res.status(200).json(filteredArticle[0]);
  } else {
    res.status(404).json({ message: `Page with ${id} Not Found` });
  }
}
