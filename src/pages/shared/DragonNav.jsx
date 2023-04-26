import { Button, Container, Nav, Navbar } from "react-bootstrap";
import profileImage from '../../assets/profile.png';

const DragonNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#career">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets"><img style={{ width: '35px' }} src={profileImage} alt="" /></Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="dark">Latest</Button>{' '}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default DragonNav;