import React from 'react';
import { useHistory} from 'react-router-dom';
import app from "../App";


function Login() {
    const history = useHistory();

    function handleClick() {
        // toggleIsAuthenticated(!isAuthenticated);
        // console.log(isAuthenticated);
        history.push('/blogposts');
    }

    return (
        <>
            <button type="button" onClick={handleClick}>
                Login
            </button>
        </>
    );
}

export default Login;