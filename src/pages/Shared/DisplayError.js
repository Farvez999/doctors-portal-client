import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const DisplayError = () => {

    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate();


    const error = useRouteError()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .then(error => console.log(error))
    }

    return (
        <div>
            <p className='text-red-500'>Something want wrong!!!!</p>
            <p className='text-red-600'>{error.statusText || error.message}</p>
            <h3 className='text-3xl'><button onClick={handleLogOut}>Sign Out</button> and Please Log back in</h3>
        </div>
    );
};

export default DisplayError;