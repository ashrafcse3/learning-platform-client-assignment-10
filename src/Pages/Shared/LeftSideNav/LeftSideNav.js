import React from 'react';
import { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/courses-title')
            .then(res => res.json())
            .then(data => setTitles(data))
    }, [])

    return (
        <div>
            <ListGroup>
                {
                    titles.map(title => <ListGroup.Item key={title.id}>
                        <Link to={`/course/${title.id}`}>{title.title}</Link>
                    </ListGroup.Item>)
                }
            </ListGroup>
        </div>
    );
};

export default LeftSideNav;