import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h3>Terms & Conditions</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis sit, enim suscipit tempora illo, cupiditate nemo laudantium minima consequatur ullam rem. Perspiciatis molestiae ab quisquam odit eligendi incidunt quae quasi, sed provident sapiente doloremque velit quam sit amet recusandae tenetur!</p>
            <p className='text-center mt-5 '>Go back to <Link to='/register'>Register</Link></p>
        </Container>
    );
};

export default Terms;