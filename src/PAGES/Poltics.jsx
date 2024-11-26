import React, { useEffect, useState } from 'react'
import { handlepol } from '../SERVICES/allApi'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Poltics() {

  useEffect(() => {

    getpol()

  }, [])

  const [pol, setpol] = useState([])

  const getpol = async () => {
    try {
      const result = await handlepol()
      setpol(result.data.results)
    }
    catch (err) {
      console.log(err);

    }
  }


  return (
    <>

      <div className='container-fluid bg-dark p-5'>

        <div className='container'>
          <Row className=''>
            {
              pol.length > 0 ?

                pol.map(item => (

                  <Col md={4} sm={12} lg={3} className='mb-3' key={item?.article_id}>

                    <Card style={{ height: "100%", color: 'white' }} className='rounded bg-dark border border-black p-4'>
                      <Card.Img variant="top" src={item?.image_url} />
                      <Card.Body>
                        <Card.Title>{item?.source_name}</Card.Title>
                        <Card.Text>
                          {item?.title}
                        </Card.Text>
                        <Link style={{ textDecoration: "none" }}><p className='text-truncate'>{item?.link}</p></Link>
                      </Card.Body>
                    </Card>

                  </Col>

                ))

                :


                <div className='text-danger fw-bolder'>No News Avialable</div>
            }

          </Row>

        </div>
      </div>

    </>
  )
}

export default Poltics