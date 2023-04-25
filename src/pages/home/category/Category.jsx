import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
    const { id } = useParams()

    const [categoryNews, setCategoryNews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/categories/${id}`)
        .then(res => res.json())
        .then(data => setCategoryNews(data))
        .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            <div>
                {
                    categoryNews.map(news => <p key={news._id}>{news.title}</p>)
                }
            </div>
        </div>
    );
};

export default Category;