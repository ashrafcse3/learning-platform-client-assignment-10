import React from 'react';
import { Card } from 'react-bootstrap';

const BlogPost = ({ blog }) => {
    return (
        <div>
            <Card className='mt-5'>
                <Card.Body>
                    <h1>{blog.question}</h1>
                    <Card.Text>{blog.answer}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default BlogPost;