import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import History from "../components/sections/history/history"
import About from "../components/sections/about/about"
import Skills from "../components/sections/skills/skills"
import Projects from "../components/sections/projects/projects"
import Contact from "../components/sections/contact/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <History />
    <About />
    <Skills />
    <Projects />
    <Contact />
    
  </Layout>
)

export default IndexPage
