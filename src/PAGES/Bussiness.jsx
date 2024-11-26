import React, { useEffect, useState } from 'react'
import { handlebussiness } from '../SERVICES/allApi'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';





function Bussiness() {

  useEffect(() => {

    getBussiness()

  }, [])

  const [bussiness, setbussiness] = useState([])

  const getBussiness = async () => {
    try {
      const result = await handlebussiness()
      // console.log(result.data.articles);
      setbussiness(result.data.articles)
      console.log(bussiness);


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
              bussiness.length > 0 ?

                bussiness.map(item => (

                  <Col md={4} sm={12} lg={3} className='mb-3'>

                    <Card style={{ height: "100%", color: 'white' }} className='rounded bg-dark border border-black p-4'>
                      <Card.Img variant="top" src={item?.urlToImage} height={'100%'} />
                      <Card.Body>
                        <Card.Title>{item?.author}</Card.Title>
                        <Card.Text>
                          {item?.title}
                        </Card.Text>
                        <Link style={{ textDecoration: "none" }}><p className='text-truncate'>{item?.url}</p></Link>
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

export default Bussiness