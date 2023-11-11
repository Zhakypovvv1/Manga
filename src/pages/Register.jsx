import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='register'>
            <div className="reg-card">
                <h2>Регистрация</h2>
                <h3>пожалуйста, заполните эту форму, чтобы зарегистрироваться</h3>

                <form className='reg-form'>
                    <a href="#">Имя или ваш никнейм</a>
                    <input type="text" placeholder='Ваш никнейм'/>
                    <a href="#">Email</a>
                    <input type="email" placeholder='Ваш email'/>
                    <a href="#">Пароль</a>
                    <input type="password" placeholder='Пароль'/>
                    <a href="#">Подтвердите Пароль</a>
                    <input type="password" placeholder='Пароль'/>
                    <button type='submit'>
                        Регистрация
                    </button>
                    <Link to={"/login"}>
                        <p>Войти</p>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Register;