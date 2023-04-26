import { Button, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { category_id, author, details, image_url, rating, title, total_view, _id } = news;

    return (

        <Card className="mb-4">
            <Card.Header className="d-flex">
                <Image roundedCircle src={author.img} style={{ height: '40px' }}></Image>
                <div className="ms-2">
                    <p className="m-0">{author.name}</p>
                    <p className="m-0">{author.published_date}</p>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details.length < 250?  details:
                    `${details.slice(0, 250)}...`}
                </Card.Text>
                <Link to={`/news/${_id}`}><Button variant="link">Read more</Button></Link>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default NewsCard;