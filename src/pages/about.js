import React from "react";

export default function About() {
    return (
        <div style={{ fontFamily: `arial`, textAlign: `center`, color: `white`, fontSize: 20 }}>
            <div class="topnav">
                <a href="/"><b>Home</b></a>
                <a href="/about/"><b>About</b></a>
            </div>
            <h2>I'm mostly using this site as a way to learn HTML and CSS</h2>
            <div style={{ padding: 30 }}>
                <img src="https://cdn.discordapp.com/attachments/785080637144956938/823707286156476477/alien.png" alt="" />
            </div>
        </div>
    )
}