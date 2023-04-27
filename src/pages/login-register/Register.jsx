import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    
    const handleSignup = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const confirm = form.confirm.value;
        const password = form.password.value;
        console.log(name, email, password, confirm)
        
        if(password.length < 6){
            setError('At least 6 characters')
            return
        }
        else if(!(password === confirm)){
            setError('Password did not match')
            return
        }

        
    }
    
    return (
        <div className="my-3">
            <h3 className="text-center">Register Now</h3>
            <Form onSubmit={handleSignup} className="w-25 mx-auto">
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" name="name" placeholder="Enter name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirm">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="confirm" placeholder="Confirm password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept terms and condition" required />
                </Form.Group>
                <Form.Text className="text-muted">
                    <p className="text-danger">{error} </p>
                    <p className="text-success">{success} </p>
                </Form.Text>
                <Button variant="dark" type="submit">
                    Login
                </Button>
                <Form.Text className="text-muted">
                    <p className="mt-2">Already have an account? <Link to='/login'>Login here</Link></p>
                </Form.Text>

            </Form>
        </div>
    );
};

export default Register;