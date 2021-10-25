import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    let history = useHistory();
    let location = useLocation();
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="mt-5 pt-5">
            <h2>Please Login</h2>
            <button
                onClick={handleGoogleLogin}
                className="btn btn-warning"
            >Google Sign In</button>
        </div>
    );
};

export default Login;