import React from 'react'

export default function Footer() {

    return (
        <div style={{
            textAlign:"center",
            width:"100%",
            height:"150px",
            backgroundColor:"#888",
            padding: "12px"
        }}>
            ©yourBizz {new Date().toLocaleDateString()}
        </div>
    )
}