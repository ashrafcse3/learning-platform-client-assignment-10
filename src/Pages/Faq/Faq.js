import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Faq.css';

const Faq = () => {
    return (
        <>
            <h1>Some common questions about the english grammar</h1>
            <hr className='mb-5' />
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How do you punctuate items in a vertical list?</Accordion.Header>
                    <Accordion.Body>
                        Answers vary on this issue so check your current style manual. In general, full sentences should include normal end punctuation. If single words or short phrases make up your list, be consistent about punctuation. Either consistently include punctuation at the end of each item or don’t use it for any of them.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What is the past tense of lie?
                    </Accordion.Header>
                    <Accordion.Body>
                        When lie is used to talk about the position of a something, the past tense is lay.
                        Example- After the basketball game, the team banner lay on the gymnasium floor.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How does affect differ from effect?
                    </Accordion.Header>
                    <Accordion.Body>
                        Affect is a verb that means “to influence.” Though effect can be a verb in some formal contexts, it is usually used as a noun. As a noun, it means “a result.”
                        Example - The barking of the neighbor's dog affects my ability to concentrate. The barking of the neighbor's dog has a curious effect on my ability to concentrate.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

export default Faq;