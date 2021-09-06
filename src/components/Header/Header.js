import React from "react";
import "./Header.css";

import Fade from 'react-reveal/Fade';

import Instagram from "../../assets/images/media_icons/instagram_2.png";
import Telegram from "../../assets/images/media_icons/telegram_2.png";
import Menu from "../Menu/Menu";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <span className="logo">Ретрит Пробуждение</span>
          <Menu/>
          <ul className="menu">
            <li className="menu-item">
              <a href="#program" className="menu-link">
                Программа
              </a>
            </li>
            <li className="menu-item">
              <a href="#timetable" className="menu-link">
                Расписание
              </a>
            </li>
            <li className="menu-item">
              <a href="#place" className="menu-link">
                Локация
              </a>
            </li>
            <li className="menu-item">
              <a href="#leaders" className="menu-link">
                О мастерах
              </a>
            </li>
            <li className="menu-item">
              <a href="#accommodation" className="menu-link">
                Проживание
              </a>
            </li>
            <li className="menu-item">
              <a href="#price" className="menu-link">
                Стоимость
              </a>
            </li>
            <li className="menu-item">
              <a href="#faq" className="menu-link">
                FAQ
              </a>
            </li>
          </ul>
          <div className="media_wrapper">
            <a
              target="_blank"
              rel="noreferrer"
              href="http://t.me/margo_khostikyan"
            >
              <img
                className="media_icon telegram"
                src={Telegram}
                alt="telegram"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/margo.khostikyan/?hl=ru"
            >
              <img
                className="media_icon instagram"
                src={Instagram}
                alt="instargam"
              />
            </a>
          </div>
        </nav>
        <div className="wrapper_centered-text">
          <h3 className='header_dates'>02–10 | ОКТЯБРЬ 2021 | ТУРЦИЯ – ЧИФТЛИК</h3>
          <h2 className="header_first-text">ТРАНСФОРМАЦИОННЫЙ РЕТРИТ</h2>
          <Fade top>
          <h1 className="header_main-text">"ПРОБУЖДЕНИЕ ДУШИ И ТЕЛА"</h1>
          </Fade>
          <h3 className="header_second-text">
            Зарядись энергией и здоровьем
            <br />в <span>мощнейшем Месте Силы</span> на планете
          </h3>
          <a
            target="_blank"
            rel="noreferrer"
            href="http://t.me/margo_khostikyan"
            className="header_button"
          >
            Хочу на ретрит
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
