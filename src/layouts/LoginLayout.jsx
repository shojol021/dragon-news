import DragonNav from '../pages/shared/DragonNav';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <DragonNav></DragonNav>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;