import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2021 — Все права защищены.</p>
      <div className="footer_contacts">
        <div className='footer_contact_wrapper'>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://t.me/margo_khostikyan"
          >
            Telegram Марго
          </a>
          <a href='tel:+79037779278'>+79037779278</a>
        </div>
        <span className="footer_line">│</span>
        <div className='footer_contact_wrapper'>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://t.me/natalia_larchenko"
          >
            Telegram Наталия
          </a>
          <a href='tel:+380986478787'>+380986478787</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
