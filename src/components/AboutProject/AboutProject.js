import React from "react";

import "./AboutProject.css";

function AboutProject() {
  return (
    <div className='content' id='project__block'>
      <article className='content__text'>
        <h2 className='content__title'>О проекте</h2>
        <div className='content__columns'>
          <div className='content__column'>
            <h3 className='content__subtitle'>
              Дипломный проект включал 5 этапов
            </h3>
            <p className='content__discription'>
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className='content__column'>
            <h3 className='content__subtitle'>
              На выполнение диплома ушло 5 недель
            </h3>
            <p className='content__discription'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
      </article>
      <div className='content__plan'>
        <div className='content__plan-column'>
          <h3 className='content__time dark-theme'>1 неделя</h3>
          <p className='content__work'>Back-end</p>
        </div>
        <div className='content__plan-column'>
          <h3 className='content__time'>4 недели</h3>
          <p className='content__work'>Front-end</p>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
