import React from 'react'
import './nav.css'

export default function Nav() {

    return (
        <div style={{
            textAlign:"center",
            width:"100%",
            height:"80px",
            backgroundColor:"#ccc"
        }}>
            <ul style={{
                display:"inline"
            }}>
                <li><a href="/">Home </a></li>
                <li><a href="/about"> About</a></li>
            </ul>
        </div>
    )
}