import { Button, Container, Nav, Navbar } from "react-bootstrap";
import profileImage from '../../assets/profile.png';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Blocks } from "react-loader-spinner";

const DragonNav = () => {
    const { user, logOut, loading } = useContext(AuthContext)

    const handleLogOut = () => {
        console.log('1')
        logOut()
            .then(res => {
                console.log(res, 'logged out')
            })
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className="me-4 text-decoration-none text-secondary" to='/category/0'>Home</Link>
                        <Link className="me-4 text-decoration-none text-secondary" to='/'>About</Link>
                        <Link className="me-4 text-decoration-none text-secondary" to='/'>Career</Link>
                    </Nav>
                    <Nav>
                        {loading ? <Blocks
                            visible={true} height="80" width="80" ariaLabel="blocks-loading"
                            wrapperStyle={{}} wrapperClass="blocks-wrapper"
                        /> :
                            <>
                                <img style={{ width: '35px' }} src={user?.photoURL ? user.photoURL :
                                    profileImage} alt="" className="me-2" />
                                <p className="me-2">{user?.email}</p>
                                {user ?
                                    <Button onClick={handleLogOut} variant="dark">Signout</Button> :
                                    <Link to='/login'><Button variant="dark">Login</Button></Link>
                                }
                            </>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default DragonNav;