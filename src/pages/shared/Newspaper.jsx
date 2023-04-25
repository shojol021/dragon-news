import { Button, Card } from 'react-bootstrap';
import bg from '../../assets/bg.png'

const Newspaper = () => {
    return (
        <Card className="bg-dark text-white my-4">
            <Card.Img src={bg} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title className='fs-2 text-center lh-base pt-5'>Create an Amazing Newspaper</Card.Title>
                <Card.Text className='text-center mt-4 px-4 lh-lg'>
                    Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                </Card.Text>
                <div className='d-flex justify-content-center mt-5'>
                    <Button className='btn btn-danger'>Learn More</Button>
                </div>
            </Card.ImgOverlay>
        </Card>
    );
};

export default Newspaper;