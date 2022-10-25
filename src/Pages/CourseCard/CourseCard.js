import React from 'react';
import { Col, Card } from 'react-bootstrap';

const CourseCard = ({ course }) => {
    const imageStyle = {
        width: '100%',
        height: '230px',
        objectFit: 'cover'
    };

    return (
        <div>
            <Col>
                <Card>
                    <Card.Img style={imageStyle} variant="top" src={course.img} />
                    <Card.Body>
                        <Card.Title>{course.title}</Card.Title>
                        <Card.Text>{course.description}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default CourseCard;