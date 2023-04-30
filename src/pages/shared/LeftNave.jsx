import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNave = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://dragon-news-server-shojol021.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h4 className='fw-bold mb-4'>All Categories</h4>
            {
                categories.map(category => <p key={category.id}
                >
                    <Link to={`/category/${category.id}`}>
                        <button className='text-secondary btn btn-link text-decoration-none' type="button">
                            {category.name}
                        </button>
                    </Link>
                </p>)

            }
        </div>
    );
};

export default LeftNave;