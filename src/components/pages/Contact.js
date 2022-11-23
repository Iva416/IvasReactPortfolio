import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function Contact() {
  return (
    <div className="contacttext">
      <h1>Contact</h1>

      <Form>
        <Form.Group className="mb-3" controlId='="exampleForm.ControlInput1'>
          <Form.Label>Name:</Form.Label>
          <Form.Control type="name" placeholder="name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId='="exampleForm.ControlInput1'>
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="email@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId='="exampleForm.ControlInput1'>
          <Form.Label>Message:</Form.Label>
          <Form.Control as="textarea" rows={6} />
        </Form.Group>
        <Button variant="outline-light">Submit</Button>
      </Form>
    </div>
  );
}
