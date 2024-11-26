import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <>

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                  <Link to={'/'}>  <Navbar.Brand href="/">
                    <img src="https://cdn-icons-png.flaticon.com/512/2964/2964063.png" alt="" height={'50px'}/>
                    </Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Link to={'/'} style={{ textDecoration: "none"}} className='fw-bold'><Nav.Link href='/'>Top Headlines</Nav.Link></Link>
                            <Link to={'/poltics'} style={{ textDecoration: "none" }} className='fw-bold'><Nav.Link href='/poltics'>Poltics</Nav.Link></Link>
                            <Link to={'/bussiness'} style={{ textDecoration: "none" }} className='fw-bold'><Nav.Link href='/bussiness'>Bussiness</Nav.Link></Link>
                            <Link to={'/sports'} style={{ textDecoration: "none" }} className='fw-bold'><Nav.Link href='/sports'>Sports</Nav.Link></Link>
                            <Link to={'/other'} style={{ textDecoration: "none" }} className='fw-bold'><Nav.Link href='/other'>Others</Nav.Link></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header