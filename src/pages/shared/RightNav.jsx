import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from './QZone';
import Newspaper from './Newspaper';
import { createContext } from 'react';
import SocialLogin from './SocialLogin';

export const SocialContext = createContext({})

const RightNav = () => {

    return (

        <div>
            <SocialLogin></SocialLogin>
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