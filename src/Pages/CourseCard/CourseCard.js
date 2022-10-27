import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const imageStyle = {
        width: '100%',
        height: '230px',
        objectFit: 'cover'
    };

    return (
        <div>
            <Col>
                <Link to={`/course/${course.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <Card>
                        <Card.Img style={imageStyle} variant="top" src={course.img} />
                        <Card.Body>
                            <Card.Title>{course.title} Course</Card.Title>
                            <Card.Text>{course.description.length > 200 ? `${course.description.slice(0, 200)}...` : course.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        </div>
    );
};

export default CourseCard;