import { Button, Card, Image } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { FaRegBookmark, FaRegEye, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import moment from "moment/moment";

const NewsCard = ({ news }) => {
    const { category_id, author, details, image_url, rating, title, total_view, _id } = news;

    return (

        <Card className="mb-4">
            <Card.Header className="d-flex align-items-center">
                <Image roundedCircle src={author?.img} style={{ height: '40px' }}></Image>
                <div className="ms-2 flex-grow-1">
                    <p className="m-0">{author?.name}</p>
                    <p className="m-0">{moment(author?.published_date).format('YYYY-MM-DD')}</p>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length <= 250 ?
                        details : details.slice(0, details.lastIndexOf(' ', 250))}...
                    <Link to={`/news/${_id}`}><Button variant="link">Read more</Button></Link>
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <Rating className="flex-grow-1"
                    readonly
                    placeholderRating={rating}
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                />

                <div className="d-flex">
                    <FaRegEye></FaRegEye>
                    <p>{total_view}</p>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;