import logo from '../../assets/logo.png'
import moment from 'moment/moment';
import Container from 'react-bootstrap/Container';



const Header = () => {
    return (
        <Container className='mt-5 mb-3'>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format("ddd, MMMM DD, YYYY")}</p>
            </div>
        </Container>
    );
};

export default Header;