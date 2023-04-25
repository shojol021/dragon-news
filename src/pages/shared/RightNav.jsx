import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const RightNav = () => {
    return (
        <div>
            <div>
                <h4 className='fw-bolder'>Login With</h4>
                <Button className='my-2 w-100' variant="outline-success"><FaGoogle></FaGoogle> Login with Google</Button>{' '}
                <Button className='my-2 w-100' variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
            </div>
            <div>
                <div>
                    <h4 className='fw-bolder mt-4'>Find Us On</h4>
                    <ButtonGroup vertical className='w-100'>
                        <Button className='bg-white text-dark border border-secondary'><FaFacebook className='text-primary'></FaFacebook> Facebook</Button>
                        <Button className='bg-white text-dark border border-secondary'><FaTwitter className='text-info'></FaTwitter> Twitter</Button>
                        <Button className='bg-white text-dark border border-secondary'><FaInstagram className='text-danger'></FaInstagram> Instagram</Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    );
};

export default RightNav;