import Header from '../pages/shared/Header';
import Footer from '../pages/shared/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/shared/RightNav';
import LeftNave from '../pages/shared/LeftNave';
import { Outlet } from 'react-router-dom';
import Latest from '../pages/home/Latest';
import DragonNav from '../pages/shared/DragonNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Latest></Latest>
            <DragonNav></DragonNav>
            <Container>
                <Row>
                    <Col><LeftNave></LeftNave></Col>
                    <Col lg={6}><Outlet></Outlet></Col>
                    <Col><RightNav></RightNav></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;