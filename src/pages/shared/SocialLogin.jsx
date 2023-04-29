import { useContext } from "react";
import { Button } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SocialLogin = () => {
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
        </div>
    )
};



export default SocialLogin;