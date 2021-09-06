import React from "react";
import "./Program.css";

import Solar from '../../assets/images/program_icons/solar_symbol.png'
import Moon from '../../assets/images/program_icons/moon_symbol.png'
import Mars from '../../assets/images/program_icons/mars_symbol.png'
import Mercury from '../../assets/images/program_icons/mercury_symbol.png'
import Jupiter from '../../assets/images/program_icons/jupiter_symbol.png'
import Venus from '../../assets/images/program_icons/venus_symbol.png'
import Saturn from '../../assets/images/program_icons/saturn_symbol.png'

const Program = () => {
  return (
    <div className="container">
      <h2 className="article" id="program">
        Программа ретрита
      </h2>
      <div className="program_content">
      <div className='program_block_wrapper'>
          <img className='program_block_img' src={Solar} alt='Planet'/>
          <div className='program_block_text'>
            <h3>День 1 - Солнце (воскресенье)</h3>
            <ul>
              <li>Гармонизация тела и сознания, синхронизация трёх тел человека.</li>
              <li>Гармонизация сердечного, дыхательного и других ритмов организма с ритмами Земли.</li>
              <li>Гармонизация работы сердечно-сосудистой системы.</li>
              <li>Эффективные способы наполнения энергией. Пробуждение жизненной силы.</li>
              <li>Раскрытие личности, осознание и проявление себя. Повышение личностных вибраций.</li>
            </ul>
          </div>
        </div>
        <div className='program_block_wrapper'>
          <img className='program_block_img' src={Moon} alt='Planet'/>
          <div className='program_block_text'>
            <h3>День 2 - Луна (понедельник)</h3>
            <ul>
              <li>Гармонизация обмена жидкостей, процессов питания и выделения в организме.</li>
              <li>Гармонизация работы лимфатической и нервной системы.</li>
              <li>Развитие интуиции и усиление связи с Истинным Я.</li>
              <li>Позитивное отношение к миру. Доверие и благодарность происходящим событиям.</li>
              <li>Выход из позиции Жертвы и обвинителя окружающего мира.</li>
            </ul>
          </div>
        </div>
        <div className='program_block_wrapper'>
          <img className='program_block_img' src={Mars} alt='Planet'/>
          <div className='program_block_text'>
            <h3>День 3 - Марс (вторник)</h3>
            <ul>
              <li>Укрепление иммунной системы.</li>
              <li>Защита от магического воздействия.</li>
              <li>Пробуждение силы воли и проявление реализационной власти в физическом мире.</li>
              <li>Свободное самовыражение, ораторское искусство, лидерство.</li>
              <li>Стремление к победе, мужество, избавление от страхов</li>
              <li>Благословение на новые проекты и начинания</li>
            </ul>
          </div>
        </div>
        <div className='program_block_wrapper'>
          <img className='program_block_img' src={Mercury} alt='Planet'/>
          <div className='program_block_text'>
            <h3>День 4 - Меркурий (среда)</h3>
            <ul>
              <li>Гармонизация биохимических процессов в клетке.</li>
              <li>Гармонизация пищеварительной и дыхательной системы, а также обмена веществ.</li>
              <li>Развитие адаптивности тела и гибкости мышления.</li>
              <li>Баланс между интуицией и логическим разумом, избавление от иллюзий и стереотипов.</li>
              <li>Здоровая коммуникация и гармоничный энергообмен с людьми.</li>
            </ul>
          </div>
        </div>
        <div className='program_block_wrapper'>
          <img className='program_block_img' src={Jupiter} alt='Planet'/>
          <div className='program_block_text'>
            <h3>День 5 - Юпитер (четверг)</h3>
            <ul>
              <li>Исцеление центральной нервной системы.</li>
              <li>Гармонизация работы органов чувств.</li>
              <li>Формирование здоровой красивой фигуры.</li>
              <li>Расширение границ восприятия и развитие способности познавать истинную суть вещей.</li>
              <li>Проработка уверенности в себе, харизмы, уважения и восхищения со стороны окружающих.</li>
            </ul>
          </div>
        </div>
        <div className='program_block_wrapper'>
          <img className='program_block_img' src={Venus} alt='Planet'/>
          <div className='program_block_text'>
            <h3>День 6 - Венера (пятница)</h3>
            <ul>
              <li>Гармонизация работы репродуктивной (половой) системы.</li>
              <li>Гармонизация работы эндокринной (гормональной) системы.</li>
              <li>Безусловная любовь к себе, своему телу и своей индивидуальности.</li>
              <li>Баланс между своим активным и пассивным началом.</li>
              <li>Развитие сексуальности и притягательности.</li>
            </ul>
          </div>
        </div>
        <div className='program_block_wrapper'>
          <img className='program_block_img' src={Saturn} alt='Planet'/>
          <div className='program_block_text'>
            <h3>День 7 - Сатурн (суббота)</h3>
            <ul>
              <li>Омоложение кожи, регенерация организма</li>
              <li>Восстановление опорно-двигательного аппарата</li>
              <li>Отпускание старых обид, стыда, чувства вины и долга.</li>
              <li>Принятие опыта прошлого и наполнение его Безусловной Любовью.</li>
              <li>Доверие миру и самому себе.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
