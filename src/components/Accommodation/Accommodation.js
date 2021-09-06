import React from "react";
import "./Accommodation.css";

import Zoom from 'react-reveal/Zoom';

import Loc_img_1 from "../../assets/images/accomm_images/accomm_img_1.PNG";
import Loc_img_2 from "../../assets/images/accomm_images/accomm_img_2.JPG";
import Loc_img_3 from "../../assets/images/accomm_images/accomm_img_3.JPG";
import Loc_img_4 from "../../assets/images/accomm_images/accomm_img_4.JPG";
import Loc_img_5 from "../../assets/images/accomm_images/accomm_img_5.JPG";
import Loc_img_6 from "../../assets/images/accomm_images/accomm_img_6.JPG";
import Loc_img_7 from "../../assets/images/accomm_images/accomm_img_7.JPG";
import Loc_img_8 from "../../assets/images/accomm_images/accomm_img_8.JPG";
import Loc_img_9 from "../../assets/images/accomm_images/accomm_img_9.JPG";
import Loc_img_10 from "../../assets/images/accomm_images/accomm_img_10.JPG";
import Loc_img_11 from "../../assets/images/accomm_images/accomm_img_11.JPG";
import Loc_img_12 from "../../assets/images/accomm_images/accomm_img_12.JPG";

const Accommodation = () => {
  return (
    <>
      <div className="accommod_block">
        <h2 id="accommodation" className="article">
          Проживание
        </h2>
        <Zoom>
        <p className="accommod_text">
          Отель Nerissa один из лучших отелей в Чирали, сюда регулярно приезжают
          йога-группы . Пляж находится всего в 500 м от отеля. На территории
          открытый бассейн и большой сад с гранатовыми и апельсиновыми деревьями
          и пальмами.
        </p>
        </Zoom>
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

export default Accommodation;
