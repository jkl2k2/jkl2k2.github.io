import React from "react";
// import { Link } from "gatsby"

export default function Home() {
  return (
    <div style={{ fontFamily: `arial`, textAlign: `center`, color: `white`, fontSize: 20 }}>
      <div class="topnav">
        <a href="/"><b>Home</b></a>
        <a href="/about/"><b>About</b></a>
      </div>
      <h2>I have some open-source projects on GitHub</h2>
      <h2><a href="https://github.com/jkl2k2">My GitHub profile</a></h2>
    </div>
  )
}