import React from 'react';
import { useEffect, useState } from 'react';

const LeftSideNav = () => {
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/courses-title')
            .then(res => res.json())
            .then(data => setTitles(data))
    }, [])

    return (
        <div>
            from leftsidenav.js
            <br></br>
            {titles.length}
        </div>
    );
};

export default LeftSideNav;