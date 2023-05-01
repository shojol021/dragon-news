import { useContext } from "react";
import { Button } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleLogin, facebookLogin, setUser, githubLogin, twitterLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.loc.pathname || '/category/0';
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                const loggedUser = res.user;
                setUser(loggedUser)
                navigate(from)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleFacebookLogin = () => {
        facebookLogin()
            .then(res => {
                const loggedUser = res.user;
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
                setUser(loggedUser)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleTwitterLogin = () => {
        twitterLogin()
            .then(res => {
                const loggedUser = res.user;
                setUser(loggedUser)
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error)
            })
    }
        ;

    return (
        <div>
            <h4 className='fw-bolder'>Login With</h4>
            <Button onClick={handleGoogleLogin} className='my-2 w-100' variant="outline-success"><FaGoogle></FaGoogle> Login with Google</Button>{' '}
            <Button onClick={handleGithubLogin} className='my-2 w-100' variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
            <Button onClick={handleFacebookLogin} className='my-2 w-100' variant="outline-primary"><FaFacebook></FaFacebook> Login with Facebook</Button>
            <Button onClick={handleTwitterLogin} className='my-2 w-100' variant="outline-info"><FaTwitter></FaTwitter> Login with Twitter</Button>
        </div>
    )
};



export default SocialLogin;