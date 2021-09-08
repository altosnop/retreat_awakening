import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <>
      <h2 className="article" id="price">
        Стоимость
      </h2>
      <div className="container">
        <div className="price_main">
          <div className="price_content">
            <h3>Стоимость программы + проживание</h3>
            <ul>
              <li>
                Ежедневные трансформационные практики по оздоровлению Души и
                тела
              </li>
              <li>Инициации и энергетические проработки</li>
              <li>
                Комфортное проживание в уединенном бутик-отеле на берегу моря (8
                ночей со 2 по 10 октября)
              </li>
              <li>3х-разовое питание</li>
              <li>Напитки и фрукты в течение дня</li>
              <li>
                Морская прогулка на лодке на целый день с купанием в нескольких
                красивейших бухтах (еда и напитки включены)
              </li>
              <li>Ежедневные практики и зарядка амулетов в Месте Силы</li>
              <li>Трансфер из аэропорта г. Даламан на ретрит и обратно</li>
            </ul>
          </div>
          <div className="price">
            <div className="price_text_wrapper">
              <span className="text">Полная стоимость</span>
              <span id="red_text" className="text_price">
                1875€
              </span>
            </div>
            <div className="ver_line"></div>
            <div className="price_text_wrapper">
              <span className="text">Со скидкой</span>
              <span className="text_price">1250€</span>
            </div>
          </div>
          <a className="price_btn" href="https://t.me/margo_khostikyan">
            Хочу
          </a>
        </div>
        <h2 className="article">Дополнительные услуги</h2>
        <h3 className='table_article'>Индивидуальное оздоровление души и тела</h3>
        <table className="add_services">
          <tbody>
            <tr>
              <th>Услуга</th>
              <th>Цена</th>
            </tr>
            <tr>
              <td>
                Индивидуальная сессия по вашему запросу у Наталии или Марго
              </td>
              <td>150€</td>
            </tr>
            <tr>
              <td>
                Регрессия / Ченнелинг / Благословение желания / Лечебная
                практика
              </td>
              <td>150€</td>
            </tr>
            <tr>
              <td>Расклад карт ТАРО по одному вашему запросу (45 минут)</td>
              <td>80€</td>
            </tr>
            <tr>
              <td>Общий оздоровительный массаж всего тела (1 час)</td>
              <td>30€</td>
            </tr>
            <tr>
              <td>Остеопатия: комплекс терапии "Юмейхо" (1,5 часа)</td>
              <td>50€</td>
            </tr>
          </tbody>
        </table>
        <h3 className='table_article'>Инициации в эзотерические дисциплины</h3>
        <table className="add_services">
          <tbody>
            <tr>
              <th>Услуга</th>
              <th>Цена</th>
            </tr>
            <tr>
              <td>Раскрытие чакр</td>
              <td>150€</td>
            </tr>
            <tr>
              <td>Рейки Фам-Рей 1 ступень</td>
              <td>100€</td>
            </tr>
            <tr>
              <td>Рейки Фам-Рей 2 ступень</td>
              <td>150€</td>
            </tr>
            <tr>
              <td>Рейки Фам-Рей 3 ступень</td>
              <td>200€</td>
            </tr>
            <tr>
              <td>Рейки Фам-Рей 1-3 ступени</td>
              <td>400€</td>
            </tr>
            <tr>
              <td>Рейки Фам-Рей 4-5 ступени</td>
              <td>200€</td>
            </tr>
            <tr>
              <td>Рейки Фам-Рей 6-7 ступени</td>
              <td>200€</td>
            </tr>
            <tr>
              <td>Рейки Фам-Рей 1-7 ступени</td>
              <td>750€</td>
            </tr>
            <tr>
              <td>Тибетские Жреческие Практики 1 ступень</td>
              <td>150€</td>
            </tr>
            <tr>
              <td>Тибетские Жреческие Практики 2 ступень</td>
              <td>150€</td>
            </tr>
            <tr>
              <td>Тибетские Жреческие Практики 3 ступень</td>
              <td>170€</td>
            </tr>
            <tr>
              <td>Тибетские Жреческие Практики 4 ступень</td>
              <td>170€</td>
            </tr>
            <tr>
              <td>Тибетские Жреческие Практики 5 ступень</td>
              <td>200€</td>
            </tr>
            <tr>
              <td>Тибетские Жреческие Практики 1-5 ступени</td>
              <td>650€</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Pricing;
