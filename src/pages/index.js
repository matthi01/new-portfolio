import React from "react"
import Layout from "../components/layout"
import Header from "../components/header/header"
import SEO from "../components/seo"
import History from "../components/sections/history/history"
import About from "../components/sections/about/about"
import Skills from "../components/sections/skills/skills"
import Projects from "../components/sections/projects/projects"
import Blog from "../components/sections/blog/blog"
import BottomNotification from "../components/ui/bottom-notification/bottom-notification"

const IndexPage = () => {

  return (
    <Layout>
      <Header />
      <SEO title="Home" />
      <History />
      <Skills />
      <About />
      <Projects />
      <Blog />
      <BottomNotification text="View Website Repo" link="https://github.com/matthi01/new-portfolio" />
    </Layout>
  )
}

export default IndexPage
