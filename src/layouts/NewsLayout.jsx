import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/shared/RightNav';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={9}><Outlet></Outlet></Col>
                    <Col><RightNav></RightNav></Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewsLayout;