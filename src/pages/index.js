import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `aqua` }}>
      <Link to="/contact/">Contact</Link>
    <Header headerText="Hello Great Gatsby!" />
    <p>What a wonderous world we live in!</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
