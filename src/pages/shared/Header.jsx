import logo from '../../assets/logo.png'
import moment from 'moment/moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("ddd, MMMM DD, YYYY")}</p>
        </div>
    );
};

export default Header;