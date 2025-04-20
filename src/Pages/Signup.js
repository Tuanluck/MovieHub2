import React, { useState } from 'react';
import './Styles/Signup.css'
import { useNavigate, useLocation } from 'react-router-dom';
import Masterhead from '../Components/Masterhead'
import Globalfooter from '../Components/Globalfooter'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Signup() {

    const [borderColor, setBorderColor] = useState('');
    const [confirmBorderColor, setConfirmBorderColor] = useState('');
    const [emailBorderColor, setEmailBorderColor] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const { email } = location.state || {};
    const [showPassword, setShowPassword] = useState(true);
    const [hidePassword, setHidePassword] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    function visiblePassword() {
        setHidePassword(true);
        setPasswordVisible(true);
        setShowPassword(false);
    }
    function nonVisiblePassword() {
        setShowPassword(true);
        setPasswordVisible(false);
        setHidePassword(false);
    }

    function userRegister() {
        const emailInput = document.getElementById('userEmailInput').value;
        const password = document.getElementById('userPasswordInput').value;
        const confirmPassword = document.getElementById('userConfirmPasswordInput').value;

        let isValid = true;

        if (!emailInput || !emailInput.endsWith('@gmail.com')) {
            setEmailBorderColor('red');
            setErrorMessage("Please check your email and password again");
            isValid = false;
        } else {
            setEmailBorderColor('rgb(151, 151, 151)');
        }

        if (password === '') {
            setBorderColor('red');
            isValid = false;
        } else {
            setBorderColor('rgb(151, 151, 151)');
        }

        if (confirmPassword === '' || password !== confirmPassword) {
            setConfirmBorderColor('red');
            setErrorMessage("Please check your email and password again");
            isValid = false;
        } else {
            setConfirmBorderColor('rgb(151, 151, 151)');
        }

        if (!isValid) return;

        setErrorMessage('');
        addUser(emailInput, password);
        createProfile(emailInput);
        navigate('/signup/plan', { state: { email: emailInput } });
    }

    function addUser(email, password) {
        fetch(`http://localhost:8080/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
    }

    function createProfile(email) {
        fetch(`http://localhost:8080/api/profile/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                profilePicture: "icon i1"
            })
        })
    }

    return (
        <div>
            <a href='/signup/logout' className="signout-btn">
                <h5 className='signout'>Sign Out</h5>
            </a>
            <Masterhead />
            <div className="register-body">
                <div className="inner-body regform-inner-body">
                    <span>STEP <span className='bold'>1</span> OF <span className='bold'>2</span></span>
                    <h2>Create a password to start your membership</h2>
                    <h6>Just a few more steps and you're done!<br />
                        We hate paperwork, too.</h6><br />
                    <Form className='addPassword'>
                        <Form.Control id='userEmailInput' className='password-input add-password' type="email" defaultValue={email} style={{ borderColor: emailBorderColor }} />
                        {showPassword && <img onClick={visiblePassword} className='passwordToggle passwordToggle2' src='./Assets/show.png' alt='show' />}
                        {hidePassword && <img onClick={nonVisiblePassword} className='passwordToggle passwordToggle2' src='./Assets/hide.png' alt='hide' />}
                        <Form.Control id='userPasswordInput' className='password-input add-password' type={passwordVisible ? 'text' : 'password'} placeholder="Add a password" style={{ borderColor: borderColor }} />
                        <Form.Control id='userConfirmPasswordInput' className='password-input add-password' type={passwordVisible ? 'text' : 'password'} placeholder="Confirm your password" style={{ borderColor: confirmBorderColor }} /><br />
                        {errorMessage && <p style={{ color: 'red', fontSize: '16px', fontWeight: 'bold', marginTop: '-30px' }}>{errorMessage}</p>}
                    </Form>
                    <div className="check-box-add-password">
                        <Form.Check className='ch-box' aria-label="option 1" />&nbsp; Please do not email me Movihub special offers.
                    </div><br />
                    <Button onClick={userRegister} variant="danger" className='btn-4 register-next'>Next</Button>
                </div>
            </div>
            <Globalfooter />
        </div>
    )
}