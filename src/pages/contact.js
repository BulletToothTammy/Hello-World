import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Contact() {
  return (
    <div style={{ color: `pink` }}>
      <Link to="/">Home</Link>
      <Header headerText="Contact" />
      <p>We look forward to hearing from you!</p>
    </div>
  )
}