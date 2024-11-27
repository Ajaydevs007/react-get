import React, { useEffect, useState } from 'react'
import { handleheadlines } from '../SERVICES/allApi'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';





function Topheadlines() {

    useEffect(() => {

        getheadlines()

    }, [])


    const [topheadlines, settopheadlines] = useState([])

    const getheadlines = async () => {
        try {

            const result = await handleheadlines()
            settopheadlines(result.data.articles)
            console.log(topheadlines);


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
                            topheadlines.length > 0 ?

                                topheadlines.map((item,index) => (

                                    <Col md={4} sm={12} lg={3} className='mb-3' key={index}>

                                        <Card style={{height:"100%",color:'white'}} className='rounded bg-dark border border-black p-4'>
                                            <Card.Img variant="top" src={item?.urlToImage} />
                                            <Card.Body>
                                                <Card.Title>{item?.author}</Card.Title>
                                                <Card.Text>
                                                {item?.title}
                                                </Card.Text>
                                                <Link style={{textDecoration:"none"}}><p className='text-truncate'>{item?.url}</p></Link>
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

export default Topheadlines