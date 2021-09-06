import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <p>© 2021 — Все права защищены.</p>
            <div className='footer_contacts'>
                <a target="_blank" rel="noreferrer" href='https://t.me/margo_khostikyan'>Марго</a>
                <span className="footer_line">│</span>
                <a target="_blank" rel="noreferrer" href='https://t.me/natalia_larchenko'>Наталия</a>
            </div>
        </footer>
    );
};

export default Footer;