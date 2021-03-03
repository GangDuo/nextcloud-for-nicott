import React from "react"
import { Container, Navbar, Nav, Jumbotron, Button } from 'react-bootstrap'
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import styles from "./layout.module.css";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      logo: file(absolutePath: { regex: "/logo.jpg/" }) {
        childImageSharp {
          fixed(width: 48, height: 48, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const logo = data?.logo?.childImageSharp?.fixed

  return (
    <>
      <header className={isRootPath ? `` : styles.globalHeader}>
        <Container>
          <Navbar collapseOnSelect fixed="top" expand="md" bg="dark" variant="dark">
            <Navbar.Brand href="/">
              <Image
                fixed={logo}
                alt={title || ``}
                className="d-inline-block align-top"
                imgStyle={{
                  borderRadius: `50%`,
                }}
              />
            </Navbar.Brand>
            <Button href="request-documents/"
              variant="outline-info"
              style={{
                color: "#fff",
                borderColor: "#fff"
              }}>
              資料請求
            </Button>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/company/overview/">会社概要</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>

      {isRootPath &&
        <Jumbotron fluid className="text-white" style={{
            marginTop: 74,
            background: "#34495e"
          }}>
          <Container fluid>
            <h1 className={`text-white ${styles.title}`}>
              あなたのアイデアをビジネスに<br/>
              最初の一歩をふみだそう
            </h1>
            <p className={styles.subTitle}>
              商品企画・製作・輸入・卸・OEM...<br/>
              あらゆるニーズをすばやく、強力にサポート
            </p>
            <p>
              <Button className={styles.basis} variant="primary" href="catalog">カタログを見る</Button>
            </p>
          </Container>
        </Jumbotron>
      }

      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
      </div>
      <footer className="text-center bg-dark text-white">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  )
}

export default Layout
