import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="mobile_menu">
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn">
        <span></span>
      </label>
      <label htmlFor="active" className="close"></label>
      <div className="wrapper">
        <ul>
          <li>
            <a className="mob_menu_link" href="#program">
              Программа
            </a>
          </li>
          <li>
            <a className="mob_menu_link" href="#timetable">
              Расписание
            </a>
          </li>
          <li>
            <a className="mob_menu_link" href="#place">
              Локация
            </a>
          </li>
          <li>
            <a className="mob_menu_link" href="#leaders">
              О мастерах
            </a>
          </li>
          <li>
            <a className="mob_menu_link" href="#accommodation">
              Проживание
            </a>
          </li>
          <li>
            <a className="mob_menu_link" href="#price">
              Стоимость
            </a>
          </li>
          <li>
            <a className="mob_menu_link" href="#faq">
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
