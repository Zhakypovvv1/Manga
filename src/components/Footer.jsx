import React from 'react';
import { FaTelegram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className="logo__block">
                        <ul>
                            <img className='footer__logo-img' src="https://com-x.life/templates/Default/images/logo.svg" alt="" />
                        </ul>
                        <div className="footer__logo">
                            Com-X
                            <span>.life</span>
                    <p className='footer__logo-text'>© 2015-2023</p>
                        </div>
                    </div>
                    
                    <div className="footer-title-block">
                        <h2 className="footer__title">Разделы</h2>
                        <p className="footer__text">Правила сайта</p>
                        <p className="footer__text">DMCA</p>
                        <p className="footer__text">Copyright</p>
                    </div>
                    <h2 className='info__title'>Инфо</h2>
                    <div className="contact">
                        <h2 className='contact__title'>Контакты</h2>
                        <FaTelegram className='telegram'/>
                        <p className='contact__text'>Обратная связь</p>
                    </div>





                </div>
            </div>
        </div>
    );
};

export default Footer;