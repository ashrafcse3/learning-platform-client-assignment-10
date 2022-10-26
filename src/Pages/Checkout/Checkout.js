import React from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div>
            <h1>{course.title} Course</h1>
            <Button variant='success'>Buy this course</Button>
            <p>Buying option will coming soon...</p>
        </div>
    );
};

export default Checkout;