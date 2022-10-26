import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CourseCard from '../CourseCard/CourseCard';
import { Row } from 'react-bootstrap';


const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://b610-lerning-platform-server-side-ashrafcse3-ashrafcse3.vercel.app/courses-details')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                {
                    courses.map(course => <CourseCard
                        key={course.id}
                        course={course}
                    ></CourseCard>)
                }
            </Row>
        </div >
    );
};

export default Courses;