import React from "react";
import "./Location.css"

import Zoom from 'react-reveal/Zoom';

import Loc_img_1 from '../../assets/images/location_images/loc_img_1.jpg'
import Loc_img_2 from '../../assets/images/location_images/loc_img_2.jpg'
import Loc_img_3 from '../../assets/images/location_images/loc_img_3.jpg'
import Loc_img_4 from '../../assets/images/location_images/loc_img_4.jpg'
import Loc_img_5 from '../../assets/images/location_images/loc_img_5.jpg'
import Loc_img_6 from '../../assets/images/location_images/loc_img_6.jpg'
import Loc_img_7 from '../../assets/images/location_images/loc_img_7.jpg'
import Loc_img_8 from '../../assets/images/location_images/loc_img_8.jpg'
import Loc_img_9 from '../../assets/images/location_images/loc_img_9.jpg'
import Loc_img_10 from '../../assets/images/location_images/loc_img_10.jpg'
import Loc_img_11 from '../../assets/images/location_images/loc_img_11.jpg'
import Loc_img_12 from '../../assets/images/location_images/loc_img_12.jpg'

const Location = () => {
    return (
        <>
        <div className='location' id='place'>
            <h2>ЧИФТЛИК</h2>
            <p>Живописное место на берегу Средиземного моря, вдали от городской суеты</p>
        </div>
        <div className='container'>
            <Zoom>
            <p className='location_text'>Чиралы – уникальное место в Турции. Скрытый от цивилизации кусочек рая на побережье Средиземного моря. Утопающий в фруктовых садах и зелени уголок с сохраненной природной красотой, просторным чистым пляжем, протяженностью 3200 метров и прозрачной морской водой.</p>
            <p className='location_text'>Деревушка Чиралы расположена в небольшой долине и с трех сторон закрыта от мира скалами, а с востока омывается морем, поэтому здесь можно каждое утро встречать рассвет на берегу, наблюдая как диск солнца поднимается на горизонте.</p>
            <p className='location_text'>Благодаря этому, строительство зданий выше 3-х этажей здесь запрещено, да и в целом получить разрешение на строительство даже мини-отеля очень сложно. Это обеспечивает низкую плотность застройки, чистый воздух и природу и небольшое количество туристов.</p>
            <p className='location_text'>Деревушка Чиралы расположена в небольшой долине и с трех сторон закрыта от мира скалами, а с востока омывается морем, поэтому здесь можно каждое утро встречать рассвет на берегу, наблюдая как диск солнца поднимается на горизонте.</p>
            </Zoom>
        </div>
        <div className='location_image_block'>
            <img src={Loc_img_1} alt='location'/>
            <img src={Loc_img_2} alt='location'/>
            <img src={Loc_img_3} alt='location'/>
            <img src={Loc_img_4} alt='location'/>
            <img src={Loc_img_5} alt='location'/>
            <img src={Loc_img_6} alt='location'/>
            <img src={Loc_img_7} alt='location'/>
            <img src={Loc_img_8} alt='location'/>
            <img src={Loc_img_9} alt='location'/>
            <img src={Loc_img_10} alt='location'/>
            <img src={Loc_img_11} alt='location'/>
            <img src={Loc_img_12} alt='location'/>
        </div>
        </>
    );
};

export default Location;