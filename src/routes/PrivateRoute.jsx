import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Blocks } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {loading, user} = useContext(AuthContext)
    const location = useLocation()
    console.log('private', location)
    
    
    if(loading){
        return <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    }

    if(user){
        return children
    }
    else{
       return <Navigate to='/login' state={{loc: location}} ></Navigate>
    }
};

export default PrivateRoute;