import logo from '../../assets/logo.png'
import moment from 'moment/moment';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Marquee from "react-fast-marquee";
import profileImage from '../../assets/profile.png';


const Header = () => {
    return (
        <Container className='mt-5 mb-3'>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format("ddd, MMMM DD, YYYY")}</p>
            </div>
            <div className='d-flex bg-secondary'>
                <Button variant="danger">Latest</Button>{' '}
                <Marquee pauseOnHover='true' speed={60} className='my-auto text-white'>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet. &nbsp; &nbsp; &nbsp; &nbsp; 3-day Sudan ceasefire announced by US Secretary of State. &nbsp; &nbsp; &nbsp; &nbsp; Delhi Capitals hang on to defend 144 against Sunrisers Hyderabad &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;</Marquee>
            </div>
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
        </Container>
    );
};

export default Header;