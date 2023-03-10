import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'
import {registerAdmin} from "../store/actionCreator"
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

function RegisterAdmin() {
    const navigate = useNavigate();
    const [registerForm, setRegisterForm] = useState({
        username: '',
        email: '',
        password: '',
        address: '',
        phoneNumber: '',
        role: 'admin'

    })

    const dispatch = useDispatch();

    const submitRegister = (e) => {
        e.preventDefault();
        console.log(registerForm);
        dispatch(registerAdmin(registerForm))
        .then(() => {
            navigate('/');
            Swal.fire(
                'Success Register!',
                '',
                'success'
              )
        })
        
    }

    return (
        <>
        <h2>Registration Form</h2><br></br><br></br>
        <div className="row">
            <div className='col'>
        <Form style={{"width": "60%", "margin": "auto"}} onSubmit={submitRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username.." onChange={(e) => {
                // console.log(e.target.value);
                setRegisterForm({
                    ...registerForm,
                    username: e.target.value,
                })
            }} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" rows={3} 
            placeholder="Enter Email.." onChange={(e) => {
                // console.log(e.target.value);
                setRegisterForm({
                    ...registerForm,
                    email: e.target.value,
                })
            }}  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMainImg">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password.." 
            onChange={(e) => {
                // console.log(e.target.value);
                setRegisterForm({
                    ...registerForm,
                    password: e.target.value,
                })
            }}  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Address.." 
            onChange={(e) => {
                // console.log(e.target.value);
                setRegisterForm({
                    ...registerForm,
                    address: e.target.value,
                })
            }}  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicStock">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Enter Phone Number.." 
            onChange={(e) => {
                // console.log(e.target.value);
                setRegisterForm({
                    ...registerForm,
                    phoneNumber: e.target.value,    
                })
            }}  />
        </Form.Group>

        <Button variant="primary" type="submit">
            Register
        </Button>
        </Form>
            </div>
            <div className='col'>
                <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Pat_Metheny_Barcelona_2008.jpg"/>
            </div>
        </div>
        </>
    );
}

export default RegisterAdmin;