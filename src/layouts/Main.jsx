import Header from '../pages/shared/Header';
import Footer from '../pages/shared/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/shared/RightNav';
import LeftNave from '../pages/shared/LeftNave';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col><LeftNave></LeftNave></Col>
                    <Col lg={6}>Page Content</Col>
                    <Col><RightNav></RightNav></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;