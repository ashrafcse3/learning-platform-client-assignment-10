import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center'>
            <h1 className='text-warning mb-5'>404 - Not found the requested page</h1>
            <p>Go to the home page to browse our other features <Link to='/'>English gugu</Link></p>
        </div>
    );
};

export default NotFound;