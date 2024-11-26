import React, { useEffect, useState } from 'react'
import { handlesports } from '../SERVICES/allApi'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function Sports() {
  useEffect(() => {
    getSports()
  }, [])

  const [sport, setsport] = useState([])

  const getSports = async () => {
    try {

      const result = await handlesports()
      console.log(result.data.results);
      setsport(result.data.results)
      // console.log(result);



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
            sport.length > 0 ?

                sport.map(item => (

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

export default Sports