import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/shared/RightNav';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header';
import DragonNav from '../pages/shared/DragonNav';

const NewsLayout = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Header></Header>
                    <DragonNav></DragonNav>
                    <Col lg={9}><Outlet></Outlet></Col>
                    <Col lg={3}><RightNav></RightNav></Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewsLayout;