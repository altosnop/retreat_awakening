import React from "react";
import "./RetreatCards.css";

import Salad from "../../assets/images/card_icons/salad.png";
import Amulet from "../../assets/images/card_icons/amulet.png";
import Feedback from "../../assets/images/card_icons/feedback.png";
import Lotus from "../../assets/images/card_icons/lotus-position.png";
import Wave from "../../assets/images/card_icons/wave.png";
import Heart from "../../assets/images/card_icons/heart.png";
import Yacht from "../../assets/images/yacht_example.jpeg";
import Communicate from "../../assets/images/communicate.JPG";
import Consult from "../../assets/images/consult.jpg";

const RetreatCards = () => {
  return (
    <>
      <div className="container">
        <h2 className="article">На ретрите мы будем:</h2>
        <div className="cards_wrapper">
          <div className="retreat_card">
            <img className="lazy" src={Salad} data-src={Salad} alt="salad" />
            <p>Питаться здоровой пищей из натуральных продуктов</p>
          </div>
          <div className="retreat_card">
            <img className="lazy" src={Wave} data-src={Wave} alt="wave" />
            <p>
              Плавать в чистейшем море, загорать, отдыхать и наполняться
              бодростью на год вперёд
            </p>
          </div>
          <div className="retreat_card">
            <img className="lazy" src={Heart} data-src={Heart} alt="yacht" />
            <p>
              Настраивать правильную работу всех наших органов и систем.
              Повышать адаптивность тела и свою стрессоустойчивость
            </p>
          </div>
          <div className="retreat_card">
            <img className="lazy" src={Lotus} data-src={Lotus} alt="salad" />
            <p>
              Заниматься энергетическими практиками и медитациями, а также
              получать инициации на привлечение изобилия во все аспекты нашей
              жизни
            </p>
          </div>
          <div className="retreat_card">
            <img className="lazy" src={Feedback} data-src={Feedback} alt="salad" />
            <p>
              Прорабатывать свои страхи, негативные эмоции, деструктивные модели
              поведения
            </p>
          </div>
          <div className="retreat_card">
            <img className="lazy" src={Amulet} data-src={Amulet} alt="salad" />
            <p>
              Заряжать амулеты на здоровье, успешность, уверенность в себе и
              свою самореализацию
            </p>
          </div>
        </div>
      </div>
      <h2 className="article">А также:</h2>
      <div className="cards_wrapper">
        <div className="second_card">
          <img className="lazy" src={Yacht} data-src={Yacht} alt="yacht" />
          <h3>Морская прогулка на корабле в соседние бухты</h3>
          <p>
            Нас ждет купание в затерянных лагунах, медитативные практики на
            соединение со стихиями Земли и вкусный обед на борту. Поездка
            включена в стоимость ретрита.
          </p>
        </div>
        <div className="second_card">
          <img className="lazy" src={Consult} data-src={Consult} alt="yacht" />
          <h3>Личные консультации и инициации в эзотерические практики</h3>
          <p>
            В свободное от занятий время вы сможете пройти индивидуальную сессию
            у Марго и Наталии. Варианты и стоимость услуг смотрите в разделе
            Дополнительные услуги (ниже).
          </p>
        </div>
        <div className="second_card">
          <img className="lazy" src={Communicate} data-src={Communicate} alt="yacht" />
          <h3>Общение с единомышленниками</h3>
          <p>
            Сложно соблюдать режим дня, правильно питаться и работать над собой
            в одиночку? В компании людей на одной волне с вами – это легко и
            приятно! Каждый участник сможет раскрыться и почувствует поддержку
            всей группы в доверительной атмосфере нашего ретрита!
          </p>
        </div>
      </div>
    </>
  );
};

export default RetreatCards;
