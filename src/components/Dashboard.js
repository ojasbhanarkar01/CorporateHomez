import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from ".././firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Dashboard() {
    const [user, loading] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();

            setName(data.name);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");

        fetchUserName();
    }, [user, loading, navigate]);

    return (
        <div className="dashboard">
            <Navbar fixed="top" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/dashboard">CorporateHomez</Navbar.Brand>
                    <Nav.Link href="">Browse Listings</Nav.Link>
                    <Nav.Link href="">Create Listing</Nav.Link>
                    <Nav.Link href="/profile">My Profile</Nav.Link>
                    <Button variant="outline-primary" onClick={logout}>Sign Out</Button>
                </Container>
            </Navbar>
            <br></br>
            <br></br>
            <div className="dashboard__container">
                Welcome to the dashboard,
                <div>{name}</div>
            </div>
        </div>
    );
}

export default Dashboard;