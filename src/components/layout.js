import React from "react"
import { Container, Navbar, Nav } from 'react-bootstrap'

import styles from "./layout.module.css";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
 
  return (
    <>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className={styles.globalHeader}>
          <Container>
            <Navbar collapseOnSelect fixed="top" expand="md" bg="dark" variant="dark">
              <Navbar.Brand href="/">{title}</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="#deets">More deets</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Container>
        </header>
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
