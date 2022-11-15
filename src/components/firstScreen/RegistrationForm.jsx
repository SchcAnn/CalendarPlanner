import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { HeaderFirstScreen } from '../headerFooter/HeaderFirstScreen';
import './formInputStyle.css';

export const RegistrationForm = () => {
    const [formInputEmail, setformInputEmail] = useState({
        email: '',
        messageEmail: 'Email не может быть пустым',
        dirtyEmail: false
    })

    const [formInputPassword, setformInputPassword] = useState({
        password: '',
        messagePassw: 'Пароль не может быть пустым',
        dirtyPassword: false
    })
    const [valid, setValid] = useState(false);

    useEffect(() => {
        if (formInputEmail.messageEmail || formInputPassword.messagePassw) {
            setValid(false);
        } else {
            setValid(true);
        }
    }, [formInputEmail.messageEmail, formInputPassword.messagePassw]);

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const handleEmail = (e) => {
        if (!re.test(String(e.target.value).toLowerCase())) {
            setformInputEmail({ messageEmail: 'Неккоректный Email', email: e.target.value });
        } else {
            setformInputEmail({ messageEmail: '', email: e.target.value, classErrEmail: '' });
        }
    }

    const includElement = (str) => {
        const passwordSign = str.split('');
        if (passwordSign.includes(' ') || passwordSign.includes('/') || passwordSign.includes('|') || passwordSign.includes('""')) {
            return true;
        } else {
            return false;
        }
    }

    const handlePassword = (e) => {
        if (e.target.value.length < 3 || e.target.value.length > 10) {
            setformInputPassword({ messagePassw: 'Email должен быть больше 3 и меньше 10 символов', password: e.target.value });
        } else if (!e.target.value) {
            setformInputPassword({ messagePassw: 'Пароль не может быть пустым', password: e.target.value });
        } else if (includElement(e.target.value) === true) {
            setformInputPassword({ messagePassw: 'Пароль не может содержать пробел и символы: " , / , | ', password: e.target.value });
        } else {
            setformInputPassword({ password: e.target.value });
        }
    }

    const blurInput = (e) => {
        switch (e.target.name) {
            case 'email':
                setformInputEmail({ ...formInputEmail, dirtyEmail: true });
                break;
            case 'password':
                setformInputPassword({ ...formInputPassword, dirtyPassword: true })
                break;
        }
    }
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('emailCalendar', formInputEmail.email);
        localStorage.setItem('passwordCalendar', formInputPassword.password);
        navigate('/Calendar');
    }

    return (
        <div>
            <HeaderFirstScreen />
            <div className='firstScreen'>
                <div className='formRegister'>
                    <h3>Создать аккаунт</h3>
                    <form onSubmit={handleSubmit}>

                        <label> Email </label>
                        <input name='email' type='text' placeholder='Введите свой Email' className={formInputEmail.classErrEmail} value={formInputEmail.email} onBlur={(e) => blurInput(e)} onChange={e => handleEmail(e)} />

                        {(formInputEmail.dirtyEmail && formInputEmail.messageEmail) && <div className='nameInput' >{formInputEmail.messageEmail}</div>}

                        <label> Пароль </label>
                        <input name='password' type='password' placeholder='Создайте Пароль' className={formInputPassword.classErrPassw} value={formInputPassword.password} onChange={e => handlePassword(e)} onBlur={(e) => blurInput(e)} />

                        {(formInputPassword.dirtyPassword && formInputPassword.messagePassw) && <div className='nameInput' >{formInputPassword.messagePassw}</div>}


                        <div><input className='btnFormInp' type='submit' value='Зарегистрироваться' disabled={!valid} /></div>
                    </form>
                    <p>У вас уже есть <Link to="/SignIn" className='linkForm'>аккаунт?</Link></p>
                </div>

            </div>
        </div>


    )
}