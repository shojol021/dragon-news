import React from 'react';
import Header from '../pages/shared/Header';
import Footer from '../pages/shared/Footer';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/shared/RightNav';
import LeftNave from '../pages/shared/LeftNave';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col><RightNav></RightNav></Col>
                    <Col lg={6}>Page Content</Col>
                    <Col><LeftNave></LeftNave></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;