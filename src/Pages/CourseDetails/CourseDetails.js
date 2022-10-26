import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css';

const CourseDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Card>
                <Card.Img className='card-image' src={data.img} alt="Card image" />
                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <h1>{data.title}</h1>
                        <Button variant="secondary">Download as pdf</Button>
                    </div>
                    <Card.Text>{data.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted text-center">
                    <Link to={`/checkout/${data.id}`}><Button variant="info">Get premium access</Button></Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CourseDetails;