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
            <a href="#program">Программа</a>
          </li>
          <li>
            <a href="#timetable">Расписание</a>
          </li>
          <li>
            <a href="#place">Локация</a>
          </li>
          <li>
            <a href="#leaders">О мастерах</a>
          </li>
          <li>
            <a href="#accommodation">Проживание</a>
          </li>
          <li>
            <a href="#price">Стоимость</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
