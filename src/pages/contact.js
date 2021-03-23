import React from "react"
import { Link } from "gatsby"

export default function Contact() {
    return (
        <div style={{ color: `teal` }}>
            <Link to="/">Home</Link>
            <h1>Contact</h1>
            <p>Send us a message!</p>
        </div>
    )
}