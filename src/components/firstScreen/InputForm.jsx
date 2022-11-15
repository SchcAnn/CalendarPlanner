import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import './formInputStyle.css';
import { HeaderFirstScreen } from '../headerFooter/HeaderFirstScreen';


export const InputForm = () => {
    const [formInput, setformInput] = useState({
        email: '',
        password: ''
    })
 
    const [formErrMessage, setErrMessage] = useState('');
    const handleEmail = (e) => {
        setformInput({ ...formInput, email: e.target.value });
    }

    const handlePassword = (e) => {
        setformInput({ ...formInput, password: e.target.value });
    }

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const userEmail = localStorage.getItem('emailCalendar')
        const psw = localStorage.getItem('passwordCalendar');
        if (formInput.email === userEmail && formInput.password === psw) {
            navigate('/Calendar');
        } else {
            setErrMessage('Не верный Email или Пароль');
        }
    }

    return (
        <div>
            <HeaderFirstScreen />
            <div className='firstScreen'>

                <div className='formInput'>
                    <h3>Добро пожаловать!</h3>

                    <form onSubmit={handleSubmit}>
                        <label> Email </label>
                        <input name='email' type='text' placeholder='Введите свой Email' value={formInput.email} onChange={e => handleEmail(e)} />
                        <label> Пароль </label>
                        <input name='password' type='password' placeholder='Введите свой Пароль' value={formInput.password} onChange={e => handlePassword(e)} />

                        <div className='nameInput' >{formErrMessage}</div>
                        <div><input className='btnFormInp' type='submit' value='Войти' /></div>
                    </form>
                    <p>У вас нет аккаунта? <Link to="/signUp" className='linkForm'>Зарегистрироваться</Link></p>
                </div>

            </div>
        </div>



    )
}