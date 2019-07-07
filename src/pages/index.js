import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import History from "../components/sections/history/history"
import About from "../components/sections/about/about"
import Skills from "../components/sections/skills/skills"
import Projects from "../components/sections/projects/projects"
import BottomNotification from "../components/ui/bottom-notification/bottom-notification"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <History />
    <Skills />
    <About />
    <Projects />
    <BottomNotification text="View Website Repo" link="https://github.com/matthi01/new-portfolio" />
  </Layout>
)

export default IndexPage
