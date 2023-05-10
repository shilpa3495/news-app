
import { useEffect } from "react"
import NewsCard from "./NewsCard"
import "./home.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../utils/newsSlice";




const Home = () => {
    const news = useSelector((state) => state.news.news)
    const loading = useSelector((state) => state.news.loading)
    const error = useSelector((state) => state.news.error)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNews())
    }, [])

    if (loading === 'pending') {
        return <p>Loading....</p>
    }

    if (error !== null) return <p>{error}</p>;

    if (loading === "idle") {
        return (
            <>

                {news?.map((news, index) => {
                    return (
                        <Link to={"/news/" + news.source.name} key={index}> {/* I used title here because id is null */}
                            <NewsCard newsData={news} index={index} /> {/* I used index here because id is null */}
                        </Link>
                    );
                })}


            </>
        )
    }

}

export default Home