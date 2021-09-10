import React from "react";
import "./Accommodation.css";

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
      <div className="location accomm_back" id="accommodation">
        <h2>
          Проживание
        </h2>
        <p>Аларга: наш семейный ретрит-отель.</p>
      </div>
      <div className="container">
        <p className="location_text">
          Сюда художники приезжают писать картины, остеопаты проводят
          оздоровительные йога-ретриты, врачи - терапевтические поездки, а
          эзотерики собираются на регулярные мистические практики и медитации.
          "Аларга Бутик-Отель и Яхт-Клуб" - единственный отель в заливе с
          собственным частным пляжем (и по вечерам море красиво подсвечивается).
          Он буквально создан для ретритов.
        </p>
        <p className="location_text">
          Уникальная локация, два гектара территории прилегающей прямо к горам,
          где открываются потрясающие панорамы, а до заброшенных пляжей, морских
          пещер и античных руин на байдарке или водном мотоцикле - рукой подать.
          И в воде, и под водой, и на суше, здесь можно много чего
          поисследовать, особенно пешком, или арендовав велосипед.
        </p>
        <p className="location_text">
          Тут 25 комфортных бутиковых номеров с ортопедическими матрасами и
          отдельным входом, крытыми террасами с видом на горы или на море.
          Диванчики, гамаки и шезлонги во множестве неожиданных и приватных
          местечек способствуют спокойному общению, расслаблению, или уединению.{" "}
        </p>
        <p className="location_text">
          И всё это на фоне оплетающих гранитные фасады виноградов и пёстрых
          бугенвилий, пальм, необычно цветущих деревьев и разноцветных
          олеандров, а зимой и весной - просто ковров из зелени и полевых
          цветов. Прозрачное море, природная тишина и красота, и уникальная
          энергетика тут волшебным образом вдохновляют, омолаживают и исцеляют.
        </p>
        <p className="location_text">
          В «кают-кампании», кроме семинаров и презентаций, также приятно
          помузицировать на гитаре, пианино, выступить на сцене под караоке,
          поиграть в настольные игры, написать картину, почерпнуть знаний в
          библиотеке, погрузиться в исцеляющий звон поющих чаш, или просто
          помедитировать.
        </p>
        <p className="location_text">
          Приветливая, располагающая к полноценному отдыху атмосфера, дарит
          необычное для поездок на море ощущение Дома. Никаких толп общественных
          пляжей и суетливых «танцевальных» ол-инклюзивов. Всё располагает
          комфортному семейному отдыху, и малышей, и людей с ограниченными
          возможностями. И в открытый бассейн, и в чистое, спокойное море, можно
          зайти как по ступенькам, так и по пологому входу. Всюду пандусы, есть
          детская площадка, бассейн-лягушатник, и любимая детьми тихая заводь с
          мелким песком.{" "}
        </p>
        <p className="location_text">
          Питание также способствует оздоровлению - тут всегда полезные свежие
          продукты от местных фермеров, рыбаков и пчеловодов, или прямо со
          своего огорода или удочки! Фруктовые салаты, детокс-коктейли и
          морепродукты на гриле весьма органично сочетаются с трансформационными
          практиками наших ретритов.
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

export default Accommodation;
