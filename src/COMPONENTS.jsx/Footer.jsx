import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function Footer() {
  return (
    <>

<div className='bg-light container-fluid'>
        <Row className='p-5 justify-content-evenly'>
          <Col sm={12} md={3}>
          <h4>
            <Link to={'/'} style={{ textDecoration: "none" }}>
              <i className="fa-solid fa-upload me-2" style={{ color: "#74C0FC", }} />
              News
            </Link>
            </h4>
            <p style={{textAlign:"justify"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi dolorem mollitia atque,
              deserunt sequi consequatur, eveniet soluta deleniti nesciunt,
              asperiores autem adipisci ipsum! Odio omnis dolorum eum ipsam? Consequatur, tenetur!</p>
          </Col>



          <Col  sm={12} md={1} className=''>
          <div className=''>
          <h4>Links</h4>
          <div className='d-flex flex-column'>
          <Link to={'/'} style={{textDecoration:"none"}}>Top Headlines</Link>
          <Link to={'/home'} style={{textDecoration:"none"}}>Bussiness</Link>
          <Link to={'/history'} style={{textDecoration:"none"}}>Sports</Link>
          <Link to={'/history'} style={{textDecoration:"none"}}>Poltics</Link>
          <Link to={'/history'} style={{textDecoration:"none"}}>Other</Link>

          </div>
          </div>
          </Col>



          <Col className='d-flex flex-column' sm={12} md={2}>
          <h4>News Magazines</h4>
          <Link style={{textDecoration:"none"}} to={'https://time.com/'}>Time</Link>
          <Link style={{textDecoration:"none"}} to={'https://www.thenation.com/'}>The Nation</Link>
          <Link style={{textDecoration:"none"}} to={"https://www.newyorker.com/"}>The New Yorker</Link>
          </Col>
          <Col className='' sm={12} md={3}>
          <h4>Contact Us</h4>
          <div className='d-flex'>
          <input type="text" className='form-control' />
          <Button variant="primary" className='ms-2'>Submit</Button>
          </div>

          <div className='d-flex p-1'>
          <i className="fa-brands fa-twitter fs-5" />
          <i className="fa-brands fa-facebook fs-5 ms-3" />
          <i className="fa-brands fa-instagram fs-5 ms-3" />
          <i className="fa-brands fa-linkedin fs-5 ms-3" />
          <i className="fa-brands fa-github fs-5 ms-3" />
          <i className="fa-solid fa-phone fs-5 ms-3" />
          </div>

          </Col>
        </Row>
      </div>



    </>
  )
}

export default Footer