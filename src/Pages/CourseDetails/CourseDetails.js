import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from 'react-to-pdf';
import './CourseDetails.css';

const CourseDetails = () => {
    const data = useLoaderData();
    console.log(data);

    const ref = React.createRef();

    return (
        <div>
            <Card ref={ref}>
                <Card.Img className='card-image' src={data.img} alt="Card image" />
                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <h1>{data.title} Course</h1>
                        <Pdf targetRef={ref} filename={`code-filename.pdf`}>
                            {({ toPdf }) => <Button onClick={toPdf} variant="secondary">Download as pdf</Button>
                            }
                        </Pdf>
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