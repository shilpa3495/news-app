
import NewsCard from "../home/NewsCard"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./bookmark.css"


const Bookmark = () => {
   const news = useSelector((state) => state.news.news)

   const bookmarked = news.filter((newsSelected) => {
      return newsSelected.isBookmark
   });


   return (
      <>
         {bookmarked?.length===0 ?  <p>No bookmark please go to <Link to="/">Home</Link> page</p> :

         bookmarked?.map((news, index) => {
            return (
               <Link to={"/news/" + news.title} key={index}>
                  <NewsCard newsData={news} index={index} />
               </Link>
            );
         })}

      </>
   )
}


export default Bookmark