import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsCard from '../newsCard/NewsCard';

const Category = () => {
    const { id } = useParams()

    const [categoryNews, setCategoryNews] = useState([])
    useEffect(() => {
        fetch(`https://dragon-news-server-shojol021.vercel.app/categories/${id}`)
            .then(res => res.json())
            .then(data => setCategoryNews(data))
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            <h2></h2>
            <div>
                {
                    categoryNews.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default Category;