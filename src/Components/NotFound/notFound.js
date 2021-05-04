import React from 'react'

import "./notFound.scss";

import {
    Link
} from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="error">
            <h1>404</h1>
            <p>Page Not Found.</p>
            
            <Link style={{ textDecoration: 'none', color: 'white' }}to="/" ><i className="fas fa-arrow-left"></i>{" "}Go Back</Link>
        </div>
    )
}