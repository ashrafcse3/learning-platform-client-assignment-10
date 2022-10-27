import React from 'react';
import BlogPost from '../BlogPost/BlogPost';

const Blog = () => {
    const blogs = [
        {
            id: 1,
            question: 'what is cors ?',
            answer: "Cors full form is Cross-origin Resource Sharing and its a mechanism which allows to share restricted resources with other domain as a form of request. It's also a browser security that restricts the HTTP requests which are generated from client site scripts running in the browser."
        },
        {
            id: 2,
            question: 'Why are you using firebase ? What other options do you have to implement authentication?',
            answer: "Firebase is made with secure authentication but easy to implement for developers and simple, rich experience for the end users. Other options to implement authentication are: Auth0, passport, okta, keycloak, amazon cognito and many more."
        },
        {
            id: 3,
            question: 'How does the private route work?',
            answer: "React private routes get filtered by the different conditions. Like if a user is logged in then he could get entered into this page."
        },
        {
            id: 4,
            question: 'What is Node? How does Node work?',
            answer: "Node is a backend javascript runtime environment that runs on a javascript engine and executes javascript code outside of a web browser. Node make javascript worKs in a  server side. Node js runs on chrome v8 engine which converts any javascript code into machine code."
        },
    ];
    return (
        <div>
            {
                blogs.map(blog => <BlogPost
                    key={blog.id}
                    blog={blog}
                ></BlogPost>)
            }
        </div>
    );
};

export default Blog;