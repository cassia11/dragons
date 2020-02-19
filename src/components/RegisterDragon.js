import './css/Base.scss'
import React from 'react'
import axios from '../configs/api'
import { Form, Button } from 'react-bootstrap';

const data = {
    name: '',
    type: ''
};

const handlePost = () => {
    fillField()
    try {
        axios.post('', data)
            .then(res => {
                console.log(res)
            })
    } catch (err) {
        console.log(`😱 Axios request failed: ${err}`)
    }
}

const fillField = () => {
    const name = document.getElementById("name-dragon").value;
    const type = document.getElementById("type-dragon").value;
    data.name = name
    data.type = type
}

const RegisterDragon = () => (
    <Form>
        <Form.Group controlId="name-dragon">
            <Form.Label>Nome:</Form.Label>
            <Form.Control type="text" name="name" required />
        </Form.Group>
        <Form.Group controlId="type-dragon">
            <Form.Label>Tipo:</Form.Label>
            <Form.Control type="text" name="type" required />
        </Form.Group>
        <Button className="button-pink" type="button" href="/dragons" onClick={() => handlePost()} >Salvar</Button>
    </Form>
);
export default RegisterDragon
