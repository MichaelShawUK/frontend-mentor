interface Props {
  image: string;
  rank: string;
  title: string;
  summary: string;
}

function ArticlePreview({ image, rank, title, summary }: Props) {
  return (
    <div className="article-preview">
      <img src={image} />
      <h2>{rank}</h2>
      <h4>{title}</h4>
      <p>{summary}</p>
    </div>
  );
}

export default ArticlePreview;
