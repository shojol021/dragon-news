import { useContext } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [accept, setAccept] = useState(false)
    console.log(accept)

    const {createUser, verifyEmail } = useContext(AuthContext)
    
    const handleSignup = (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')
        const form = e.target;
        const email = form.email.value;
        const confirm = form.confirm.value;
        const password = form.password.value;
        
        if(password.length < 6){
            setError('At least 6 characters')
            return
        }
        else if(!(password === confirm)){
            setError('Password did not match')
            return
        }

        createUser(email, password)
        .then(userDetails => {
            verifyEmail(userDetails.user)
            setSuccess(`A verification mail sent to ${userDetails.user.email}`)
        })
        .catch(error => {
            console.log(error.message)
            setError(error.message)
        })
    }

    const handleAccept = (event) => {
        const clicked = event.target.checked
        setAccept(clicked)
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
                    <Form.Check onClick={handleAccept} type="checkbox" label={<>Accept <Link to='/terms'>terms and condition</Link></>}  />
                </Form.Group>
                <Form.Text className="text-muted">
                    <p className="text-danger">{error} </p>
                    <p className="text-success">{success} </p>
                </Form.Text>
                <Button variant="dark" type="submit" className="w-100" disabled={!accept}>
                    Register
                </Button>
                <Form.Text className="text-muted">
                    <p className="mt-2">Already have an account? <Link to='/login'>Login here</Link></p>
                </Form.Text>

            </Form>
        </div>
    );
};

export default Register;