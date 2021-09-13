import React from "react";
import "./Timetable.css";

const Timetable = () => {
  return (
    <>
      <h2 className="article" id="timetable">
        Расписание
      </h2>
      <div className="container">
        <table className="timetable">
          <tbody>
            <tr>
              <td className='table_time'>6:15</td>
              <td className='table_text'>Медитация на восходе солнца</td>
            </tr>
            <tr>
              <td className='table_time'>7:00</td>
              <td className='table_text'>Утренняя зарядка / Нейро-йога</td>
            </tr>
            <tr>
              <td className='table_time'>8:00</td>
              <td className='table_text'>Купаемся в море / загораем / отдыхаем</td>
            </tr>
            <tr>
              <td className='table_time'>10:00</td>
              <td className='table_text'>Завтрак</td>
            </tr>
            <tr>
              <td className='table_time'>11:30</td>
              <td className='table_text'>Энергетические практики на улучшение здоровья</td>
            </tr>
            <tr>
              <td className='table_time'>14:30</td>
              <td className='table_text'>Купаемся в море / загораем / отдыхаем</td>
            </tr>
            <tr>
              <td className='table_time'>16:00</td>
              <td className='table_text'>Обед</td>
            </tr>
            <tr>
              <td className='table_time'>17:30</td>
              <td className='table_text'>Энергетические практики на трансформацию сознания</td>
            </tr>
            <tr>
              <td className='table_time'>20:00</td>
              <td className='table_text'>Легкий ужин</td>
            </tr>
            <tr>
              <td className='table_time'>20:30</td>
              <td className='table_text'>Отдыхаем / Гуляем / Общаемся друг с другом</td>
            </tr>
            <tr>
              <td className='table_time'>22:30</td>
              <td className='table_text'>Сон</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Timetable;
