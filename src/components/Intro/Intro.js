import React from "react";
import "./Intro.css";

import Video from '../../assets/video/main_video.mp4'

const Intro = () => {
  return (
    <div className="intro_block">
      <div className="container">
        <p className="intro_text">
          Отправьтесь в трансформационное путешествие в сильнейшее Место Силы
          планеты! Здешняя атмосфера заповедной природы, вдали от городской
          суеты, на частном берегу чистейшего тихого залива Средиземноморья,
          поможет пробудить ваше Сознание и очистить энергетику тела под чутким
          руководством ваших Духовных Наставников.
        </p>
        <div className="iframe_wrapper">
          <video width="832" height="468" autoPlay loop muted>
            <source src={Video} type='video/mp4'/>
          </video>
        </div>
      </div>
      <div className="intro_small_text_wrapper">
        <p className="intro_small_text">
          ...Твоё видение станет ясным, только если ты сможешь заглянуть в свое
          сердце. Кто смотрит наружу — видит лишь сны, кто смотрит в себя —
          пробуждается.
          <br />
          <br />
          <span>Карл Густав Юнг</span>
        </p>
      </div>
    </div>
  );
};

export default Intro;
