import React from "react"
import "./projects.scss"
import Project from "./project/project"
import SectionGradientHeader from "../../ui/section-gradient-header/section-gradient-header"
import { useStaticQuery, graphql } from "gatsby"

const projects = () => {

    const data = useStaticQuery(graphql`
        fragment fluidImage on File {
            childImageSharp {
                fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        query {
            blockstream: file(relativePath: { eq: "blockstream.png" }) {
                ...fluidImage
            }
            explorer: file(relativePath: { eq: "block-explorer.png" }) {
                ...fluidImage
            }
            store: file(relativePath: { eq: "blockstream-store.png" }) {
                ...fluidImage
            }
            volkfi: file(relativePath: { eq: "volkfi.png" }) {
                ...fluidImage
            }
            green: file(relativePath: { eq: "green.png" }) {
                ...fluidImage
            }
            satellite: file(relativePath: { eq: "satellite.png" }) {
                ...fluidImage
            }
            etax: file(relativePath: { eq: "etax.png" }) {
                ...fluidImage
            }
            gentax: file(relativePath: { eq: "gentax.png" }) {
                ...fluidImage
            }
            amazon: file(relativePath: { eq: "amazon.png" }) {
                ...fluidImage
            }
        }
        `)

        const arrProjects = [
            {
                title: "blockstream.com",
                image: data.blockstream.childImageSharp.fluid,
                description: "Main Blockstream landing page. Built with Jekyll from the ground up as part of Blockstreams rebranding effort.",
                link: "https://www.blockstream.com",
                alt: "blockstream.com",
                id: "blockstream"
            },
            {
                title: "blockstream.info",
                image: data.explorer.childImageSharp.fluid,
                description: "Blockstream's block explorer, built using react.",
                link: "https://www.blockstream.info",
                alt: "blockstream.info",
                id: "explorer"
            },
            {
                title: "store.blockstream.com",
                image: data.store.childImageSharp.fluid,
                description: "Blockstream store is a wordpress store that showcases lightning payment technology.",
                link: "https://store.blockstream.com",
                alt: "store.blockstream.com",
                id: "store"
            },
            {
                title: "volkfi.com",
                image: data.volkfi.childImageSharp.fluid,
                description: "Volkfi landing page. I was involved as a contractor in the early efforts of building the site.",
                link: "https://www.volkfi.com",
                alt: "volkfi.com",
                id: "volkfi"
            },
            {
                title: "Blockstream Green (iOS)",
                image: data.green.childImageSharp.fluid,
                description: "Blockstream Green iOS wallet app.",
                link: "https://www.blockstream.com/green",
                alt: "Blockstream Green (iOS)",
                id: "green"
            }, 
            {
                title: "Blockstream Satellite Transmissions App",
                image: data.satellite.childImageSharp.fluid,
                description: "Blockstream Satellite transmissions app. This web app is available on blockstream.com and allows you to submit files and text messages via the blockstream satellite network. Payments are handled through the lightning network.",
                link: "https://www.blockstream.com/satellite/",
                alt: "Blockstream Satellite Transmissions App",
                id: "satellite"
            },
            {
                title: "eTaxBC",
                image: data.etax.childImageSharp.fluid,
                description: "British Columbia's online tax portal. I spent several years as team lead for eTaxBC development.",
                link: "https://www.etax.gov.bc.ca/btp/eservices/_/",
                alt: "eTaxBC",
                id: "etax"
            },
            {
                title: "Gentax",
                image: data.gentax.childImageSharp.fluid,
                description: "Back end system for British Columbia's tax administration software. I've worked in most areas of the software, including the online tax portal eTaxBC, Audit, Discovery, Interfaces, etc.",
                link: "https://fastenterprises.com",
                alt: "Gentax",
                id: "gentax"
            },
            {
                title: "In a Nutshell: Bitcoin and the Blockchain",
                image: data.amazon.childImageSharp.fluid,
                description: "Introductory book on bitcoin and the blockchain, available as ebook and print on amazon. I published this book under my mother's maiden name Schulz (M. Schulz).",
                link: "https://www.amazon.com/Nutshell-Bitcoin-Blockchain-M-Schulz/dp/1976722276/ref=sr_1_2?keywords=bitcoin+in+a+nutshell&qid=1562007175&s=books&sr=1-2",
                alt: "In a Nutshell: Bitcoin and the Blockchain",
                id: "amazon"
            }
        ]

    const projectElements = arrProjects.map((project, index) => {
        return (
            <Project    
                title={ project.title } 
                image={ project.image } 
                description={ project.description }
                link={ project.link }
                key={ index } />
        )
    })

    return (
        <div className="projects" id="projects">
            <SectionGradientHeader />
            <h1>Projects, Previous Work</h1>
            <div className="projects_container">
                { projectElements } 
            </div>
        </div>
    )
}

export default projects