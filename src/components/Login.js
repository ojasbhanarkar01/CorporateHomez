import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { auth, signInWithGoogle } from ".././firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate("/dashboard");
    }, [user, loading, navigate]);

    return (
        <div className="login">
            <Navbar fixed="top" bg="light" variant="light">
                <Container>
                    <Navbar.Brand>CorporateHomez</Navbar.Brand>
                    <Button variant="outline-primary" onClick={signInWithGoogle}>Sign In With Google</Button>
                </Container>
            </Navbar>
        </div>
    )
}

export default Login;