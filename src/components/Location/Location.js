import React from "react";
import "./Location.css";

import Loc_img_1 from "../../assets/images/location_images/loc_img_1.jpg";
import Loc_img_2 from "../../assets/images/location_images/loc_img_2.jpg";
import Loc_img_3 from "../../assets/images/location_images/loc_img_3.jpg";
import Loc_img_4 from "../../assets/images/location_images/loc_img_4.jpg";
import Loc_img_5 from "../../assets/images/location_images/loc_img_5.jpg";
import Loc_img_6 from "../../assets/images/location_images/loc_img_6.jpg";
import Loc_img_7 from "../../assets/images/location_images/loc_img_7.jpg";
import Loc_img_8 from "../../assets/images/location_images/loc_img_8.jpg";
import Loc_img_9 from "../../assets/images/location_images/loc_img_9.jpg";
import Loc_img_10 from "../../assets/images/location_images/loc_img_10.jpg";
import Loc_img_11 from "../../assets/images/location_images/loc_img_11.jpg";
import Loc_img_12 from "../../assets/images/location_images/loc_img_12.jpg";

const Location = () => {
  return (
    <>
      <div className="location loc_back" id="place">
        <h2>ЧИФТЛИК</h2>
        <p>Погрузитесь во вдохновляющую атмосферу волшебного залива Чифтлик</p>
      </div>
      <div className="container">
        <p className="location_text">
          Мармарис неспроста зовут "жемчужиной Средиземноморья" и столицей
          турецкого яхтинга. Потрясающие морские красоты этого региона
          сочетаются с заповедной природой гор, лесов и долин, необычных скал, и
          постройками времён древних цивилизаций.
        </p>
        <p className="location_text">
          Древнегреческие города, храмы богов, реликвии Византии и гробницы
          Ликийских королей в отвесных скалах - много чудес хранит этот регион,
          ибо именно здесь находится один из четырёх эпицентров энергий планеты,
          сильнейший на сегодня.
        </p>
        <p className="location_text">
          В нашем заливе Чифтлик, где встречаются Эгейское и Средиземное моря,
          открываются потрясающие панорамы, особенно со смотровых площадок и с
          вершины горы.
        </p>
        <p className="location_text">
          Представьте: рассвет прямо над открытым морем, закат - между горами
          нашей долины, а удалённость от света городов дарит невероятно звёздное
          ночное небо!
        </p>
        <p className="location_text">
          Неудивительно, что именно в Чифтлике выбирают отдохнуть звёзды и
          политики, уставшие от шума, любопытных глаз и суеты городов.
        </p>
      </div>
      <div className="location_image_block">
        <img src={Loc_img_1} alt="location" />
        <img src={Loc_img_2} alt="location" />
        <img src={Loc_img_3} alt="location" />
        <img src={Loc_img_4} alt="location" />
        <img src={Loc_img_5} alt="location" />
        <img src={Loc_img_6} alt="location" />
        <img src={Loc_img_7} alt="location" />
        <img src={Loc_img_8} alt="location" />
        <img src={Loc_img_9} alt="location" />
        <img src={Loc_img_10} alt="location" />
        <img src={Loc_img_11} alt="location" />
        <img src={Loc_img_12} alt="location" />
      </div>
    </>
  );
};

export default Location;
