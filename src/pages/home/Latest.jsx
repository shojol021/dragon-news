import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Latest = () => {
    return (
        <Container>
            <div className='d-flex bg-secondary'>
                <Button variant="danger">Latest</Button>{' '}
                <Marquee pauseOnHover='true' speed={60} className='my-auto text-white'>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet. &nbsp; &nbsp; &nbsp; &nbsp; 3-day Sudan ceasefire announced by US Secretary of State. &nbsp; &nbsp; &nbsp; &nbsp; Delhi Capitals hang on to defend 144 against Sunrisers Hyderabad &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;</Marquee>
            </div>
        </Container>
    );
};

export default Latest;