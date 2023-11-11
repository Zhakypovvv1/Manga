import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen, FaBookReader, FaCheckCircle, FaPlus, FaSearch, FaUser } from 'react-icons/fa';

const Header = () => {
    return (
        <div>
                    
            <header className='header'>
                <div className="header-block">
                <div className="header-logo">
                    <ul>
                        <img className='header__logo-img' src="https://com-x.life/templates/Default/images/logo.svg" alt="" />
                    </ul>
                    <Link to={'/'} className='logo-title'>
                        <a href='#'>Com-X</a> 
                        <span>.life</span>
                    </Link> 
                    </div>



                    <div className="header-menu">
                        <FaCheckCircle/>
                        <p>Прочитано</p>
                        <FaBookOpen/>
                        <p>Сейчас читают</p>
                        <FaBookReader/>
                        <p>Каталог</p>
                    </div>
                    
                
                <div className="header-search">
                    <FaSearch className='search'/>
                    <input type="text" placeholder='Что ищем?'/>
                </div>
                <FaPlus className='plus'/>

                
                <div className="header-login">
                    <Link to={"/login"} className='logo-text'>
                        <FaUser/>
                        <a href='#'>Войти</a>
                    </Link>
                </div>
                


                </div>
                
                
                    
            </header>
        </div>
    );
};

export default Header;