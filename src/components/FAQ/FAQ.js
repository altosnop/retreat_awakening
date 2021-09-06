import React from "react";
import Accordion from "./Accordion/Accordion";
import { accordionData } from './accord-data';

const FAQ = () => {
  return (
    <div className="container">
      <h2 className="article" id='faq'>Вопросы и ответы</h2>
      {accordionData.map(({ title, content, id }) => (
        <Accordion key={id} title={title} content={content} />
      ))}
    </div>
  );
};

export default FAQ;
