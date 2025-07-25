import React, { useRef } from "react";
import Form from '../../Components/login/Form';
import './login.css';

const LoginPage = () => {
    const containerRef = useRef(null);

    const handleSignUp = () => {
        containerRef.current.classList.add("right-panel-active");
    };

    const handleSignIn = () => {
        containerRef.current.classList.remove("right-panel-active");
    };

    return (
        <div>
            <Form />
        </div>
    );
};

export default LoginPage;