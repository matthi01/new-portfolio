import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import History from "../components/sections/history/history"
import About from "../components/sections/about/about"
import Skills from "../components/sections/skills/skills"
import Projects from "../components/sections/projects/projects"
import Contact from "../components/sections/contact/contact"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <History />
    <Skills />
    <About />
    <Projects />
    <Contact />

  </Layout>
)

export default IndexPage
