import React from 'react';
import { useHistory} from 'react-router-dom';

function Login() {
    const history = useHistory();

    function handleClick() {
        // const userLoggedIn = false;
        history.push('/blogposts');
        console.log("Hallo");
        // console.log(user);
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