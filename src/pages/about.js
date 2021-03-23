import React from "react"

export default function About() {
    return (
        <div style={{ fontFamily: `arial`, textAlign: `center`, color: `white`, fontSize: 20 }}>
            <div class="topnav">
                <a href="/"><b>Home</b></a>
                <a href="/about/"><b>About</b></a>
            </div>
            <h1>I made this using Gatsby in like 3 hours</h1>
            <h2><a href="https://github.com/jkl2k2">https://github.com/jkl2k2</a></h2>
        </div>
    )
}