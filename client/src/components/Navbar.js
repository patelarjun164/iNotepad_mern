import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router';



const Navbar = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const handleLogout = async () => {
        const response = await fetch("https://inotepad-backend.vercel.app/api/auth/logout", {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        // const response = await fetch("http://localhost:5000/api/auth/logout", {
        //     method: 'GET',
        //     credentials: 'include',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // });
        const json = await response.json();
        if (json.success) {
            localStorage.removeItem("user");
            navigate("/login");
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNotepad</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>

                    </ul>
                    {localStorage.getItem("user") ? <button onClick={handleLogout} className="btn btn-danger">Logout</button> : <form className="d-flex">
                        <Link className="btn btn-success mx-1" to="/login" role="button">Login</Link>
                        <Link className="btn btn-info mx-1" to="/signup" role="button">Sign Up</Link>
                    </form>}

                </div>
            </div>
        </nav>
    )
}

export default Navbar