import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ImageThumbnail from "../../assets/news-card-thumbnail.png";
import "./news.css";

const News = () => {
  const news = useSelector((state) => state.news.news);
  console.log(news);
  const { sourceName } = useParams();
  const selectedNews = news.find((news) => news?.source.name === sourceName);
  return (
    <>
      <img
        className="selected-news-container"
        src={
          selectedNews.urlToImage ? selectedNews?.urlToImage : ImageThumbnail
        }
      />
      <a href={selectedNews?.url} className="selected-news-title">
        {" "}
        {selectedNews?.title}
      </a>
      <div className="selected-news-time">
        {" "}
        {selectedNews?.publishedAt} <span>by {selectedNews?.author} </span>
      </div>
      <p className="selected-news-description">{selectedNews?.description}</p>
      <p className="selected-news-content">{selectedNews?.content}</p>
    </>
  );
};

export default News;
