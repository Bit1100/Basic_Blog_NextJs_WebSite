import { articles } from "../../../data.json";

export default function articlesHandler(req, res) {
  res.status(200).json(articles);
}
