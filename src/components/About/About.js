import React from "react";
import "./About.css";

import Fade from 'react-reveal/Fade';

import Margo from "../../assets/images/masters/Margo.jpeg";
import Natasha from '../../assets/images/masters/Natasha.jpg'
import Consult from "../../assets/images/about_3_photos/consult.jpg"
import Group from "../../assets/images/about_3_photos/group.jpg"
import Lil_group from "../../assets/images/about_3_photos/lil_group.jpg"

const About = () => {
  return (
    <>
      <div className="about" id="leaders">
        <h2>О МАСТЕРАХ</h2>
      </div>
      <div className="about_block_wrapper">
      <Fade bottom>
      <div className="about_block">
          <img src={Margo} alt="master img" />
          <h4><span className='about_symbol'>✦</span> Марго Хостикян <span className='about_symbol'>✦</span></h4>
          <p>
          Профессиональный коуч, энерготерапевт с практическим опытом более 10 лет, проводит ретриты и семинары по всему миру, организатор ретрит-центра в мощнейшем месте силы на планете. Регрессолог, духовный наставник, сертифицированный учитель и мастер практик Высшей Эзотерики:<br/><br/>
          ✦ Тибетские жреческие практики<br/>
          ✦ Кельтская магия и Таро<br/>
          ✦ Рейки Фам-Рей<br/>
          ✦ Спиритуальные искусства<br/>
          ✦ Высшая Алхимия и многие другие.<br/><br/>
          ✔ Более 3000 часов индивидуальных консультаций и групповых практик<br/> 
          ✔ Более 1000 человек трансформировали свое сознание и перешли на НОВЫЙ УРОВЕНЬ своей жизни<br/><br/> 
          ✦ Разблокировала память прошлых жизней к 30 годам<br/> 
          ✦ Прошла более 1000 км пешком по паломническому пути Camino de Santiago<br/> 
          ✦ Достигла сатори в 30-дневной медитации полного молчания и изоляции в месте силы.<br/> 
          ✦ Магистр международной экономики, три высших образования, полиглот.<br/> 
          ✦ Рискнула последовать зову сердца, оставив комфортную жизнь в Москве переехала на берег Эгейского моря, посвятив себя терапевтической профессии.
          </p>
        </div>
        <div className='about_line'></div>
        <div className="about_block">
          <img src={Natasha} alt="master img" />
          <h4><span className='about_symbol'>✦</span> Наталия Ларченко <span className='about_symbol'>✦</span></h4>
          <p>
          Врач, гомеопат, диагност, энерготерапевт с практическим опытом 20 лет.
          Автор уникальной методики работы с телом и проекта "Эзотерическая Медицина".<br/><br/>
          ✦ В 2001 году окончила медицинский университет в Киеве.<br/>
          ✦ В 2007 году прошла специализацию врач народной и нетрадиционной медицины, врач гомеопат.<br/>
          ✦ С 2008 по 2012 год работала в клинике семейной медицины, проводила функциональную диагностику организма и лечение методом классической гомеопатии.<br/>
          ✦ Открыв частную практику с 2012 года проводит индивидуальные консультации, диагностику и лечение методом гомеопатии и эзотерической медицины.<br/><br/>
          ✦ Прошла обучение Высшей Эзотерики в международной эзотерической Академии. Сертифицированный Учитель энергетических дисциплин.<br/><br/>
          ✦ Основатель проекта "Эзотерическая медицина", который объединяет знания медицины и эзотерики. Моя цель: дать истинные знания медицины и эзотерики, убрать все иллюзии, мифы, предрассудки, мистику, фантазии и страхи относительно этих направлений. Все знания, которые я накопила, лишены мистики и фантазии, они просты, практичны, ими может овладеть любой человек, если у него есть желание.
          </p>
        </div>
        </Fade>
      </div>
      <div className='about_photos'>
        <img src={Consult} alt='Consult'/>
        <img src={Group} alt='Group'/>
        <img src={Lil_group} alt='Lil group'/>
      </div>    
    </>
  );
};

export default About;
