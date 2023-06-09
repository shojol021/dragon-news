import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useState } from "react";
import SocialLogin from "../shared/SocialLogin";

const Login = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const { setUser, userLogin } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(navigate)
    const from = location.state?.loc.pathname || '/category/0';

    const handleLogin = (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(res => {
                if (!res.user.emailVerified) {
                    return setError('Please verify your email first')
                }
                const loggedUser = res.user;
                setUser(loggedUser)
                setSuccess('Successfully logged in')
                navigate(from)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className="my-3">
            <h3 className="text-center">Please Login</h3>
            <Form onSubmit={handleLogin} className="w-25 mx-auto">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Text className="text-muted">
                    <p className="mt-2">Forgot Password? <Link className="">Reset here</Link></p>
                </Form.Text>
                <Form.Text className="text-muted">
                    <p className="text-danger">{error} </p>
                    <p className="text-success">{success} </p>
                </Form.Text>
                <Button variant="dark" type="submit" className="w-100">
                    Login
                </Button>
                <Form.Text className="text-muted">
                    <p className="mt-2">New to Dragon News? <Link to='/register'>Register here</Link></p>
                </Form.Text>

            </Form>
            <div className="mx-auto w-25">
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;