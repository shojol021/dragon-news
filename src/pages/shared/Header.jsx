import React from 'react';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='text-center'>
            <img src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>date</p>
        </div>
    );
};

export default Header;