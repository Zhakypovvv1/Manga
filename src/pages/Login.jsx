import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='Login'>
            <div className="login-card">
                <h2>Login</h2>
                <h3>Введите ваши данные</h3>

                <form className='login-form'>
                    <input type="text" placeholder='Ваш Логин'/>
                    <input type="password" placeholder='Пароль'/>
                    <a href="#">Забыли пароль?</a>
                    <button type='submit'>
                        Войти
                    </button>
                    <Link to={"/register"}>
                        <p>Регистрация</p>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;