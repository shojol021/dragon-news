import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from './QZone';
import Newspaper from './Newspaper';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const RightNav = () => {
    const { googleLogin, facebookLogin, setUser, githubLogin } = useContext(AuthContext)

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser)
                setUser(loggedUser)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleFacebookLogin = () => {
        facebookLogin()
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser)
                setUser(loggedUser)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser)
                setUser(loggedUser)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div>
            <div>
                <h4 className='fw-bolder'>Login With</h4>
                <Button onClick={handleGoogleLogin} className='my-2 w-100' variant="outline-success"><FaGoogle></FaGoogle> Login with Google</Button>{' '}
                <Button onClick={handleGithubLogin} className='my-2 w-100' variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
                <Button onClick={handleFacebookLogin} className='my-2 w-100' variant="outline-primary"><FaFacebook></FaFacebook> Login with Facebook</Button>
            </div>
            <div>
                <h4 className='fw-bolder mt-4'>Find Us On</h4>
                <ButtonGroup vertical className='w-100'>
                    <Button className='bg-white text-dark border border-secondary'><FaFacebook className='text-primary'></FaFacebook> Facebook</Button>
                    <Button className='bg-white text-dark border border-secondary'><FaTwitter className='text-info'></FaTwitter> Twitter</Button>
                    <Button className='bg-white text-dark border border-secondary'><FaInstagram className='text-danger'></FaInstagram> Instagram</Button>
                </ButtonGroup>
            </div>
            <div className='mt-4 bg-secondary'>
                <QZone className='my-4'></QZone>
            </div>
            <Newspaper></Newspaper>
        </div>
    );
};

export default RightNav;