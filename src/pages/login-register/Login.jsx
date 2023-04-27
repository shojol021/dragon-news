import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    
    return (
        <div className="my-3">
            <h3 className="text-center">Please Login</h3>
            <Form onSubmit={handleLogin} className="w-25 mx-auto">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Form.Text className="text-muted">
                    <p>{} </p>
                </Form.Text>
                <Button variant="dark" type="submit">
                    Login
                </Button>
                <Form.Text className="text-muted">
                    <p className="mt-2">New to Dragon News? <Link to='/register'>Register here</Link></p>
                </Form.Text>

            </Form>
        </div>
    );
};

export default Login;