import { Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const SingleNews = () => {
    const news = useLoaderData()
    const { title, image_url, details, category_id } = news

    return (
        <div>
            <h4>Dragon News</h4>
            <div className="border p-2 rounded">
                <img className="w-100" src={image_url} alt="" />
                <h2 className="my-3">{title}</h2>
                <p>{details}</p>
                <Link to={`/category/${category_id}`}>
                    <Button variant='danger'>
                        <FaArrowLeft></FaArrowLeft>  All news from this category
                    </Button>
                </Link>
            </div>

        </div>
    );
};

export default SingleNews;