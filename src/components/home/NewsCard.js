import { useDispatch } from "react-redux";
import NewsCardThumbnail from "../../assets/news-card-thumbnail.png";
import { addBookmark, removeBookmark } from "../../utils/newsSlice";

const NewsCard = ({ newsData, index, isBookmark }) => {
  const dispatch = useDispatch();

  const bookmarked = (e, index) => {
    e.preventDefault();
    if (newsData?.isBookmark) {
      dispatch(removeBookmark(index));
    } else {
      dispatch(addBookmark(index));
    }
  };

  const theDate = new Date(Date.parse(newsData?.publishedAt));

  return (
    <div className="news-card-container">
      <img
        className="news-card-image"
        src={newsData?.urlToImage ? newsData?.urlToImage : NewsCardThumbnail}
        alt="news card image"
      />
      <h2 className="news-card-title">{newsData?.title}</h2>
      <p className="news-card-description">{newsData?.description}</p>
      <div className="news-card-time-bookmark">
        <div className="news-card-published-time">
          {theDate.toLocaleString()}{" "}
        </div>
        {!isBookmark && (
          <span onClick={(e) => bookmarked(e, index)}>
            {!newsData?.isBookmark ? "Bookmark" : "Bookmarked"}
          </span>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
