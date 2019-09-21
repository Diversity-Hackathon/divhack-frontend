// INPUT COMPONENT

// REACT IMPORT
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Actions, Selectors } from '../../data/current-user-id';

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');

    const isLoading = useSelector(Selectors.getLoadingStatus);

    const handleChange = (e) => {
        setEmail(e.currentTarget.value);
    }

    const handleClick = () => {
        dispatch(Actions.login(email));
    }

    return (
        <div className="input-container">
            <div className="input-column">
                <div className="input-group">
                    <input
                        name="email"
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={handleChange}
                    />
                    <button className="input-button" onClick={handleClick}>Login</button>
                </div>
            </div>
            { isLoading && <div>Wait we're loading</div>}
        </div>
    );
};

export default Login;