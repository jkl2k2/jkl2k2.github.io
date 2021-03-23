import React from "react"
// import { Link } from "gatsby"

export default function Home() {
  return (
    <div style={{ fontFamily: `arial`, textAlign: `center`, color: `white`, fontSize: 20 }}>
      <div class="topnav">
        <a href="/"><b>Home</b></a>
        <a href="/about/"><b>About</b></a>
      </div>
      <div class="customHeader">
        <p><h2>Image test</h2></p>
      </div>
      <div>
        <img src="https://cdn.discordapp.com/attachments/785080637144956938/823707286156476477/alien.png" alt="" />
      </div>
    </div>
  )
}