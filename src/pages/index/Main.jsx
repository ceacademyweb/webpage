import React from 'react';

function Main() {
  return (
    <section className="section Main">
      <div className="Main__container col-2">
        <div className="Main__text">
          <h1 data-ce="fade-right">
            Crece tus Habilidades, <span>define tu futuro</span>
          </h1>
          <p data-ce="fade-right" data-ce-delay="100">
            Presentamos CEACADEMY, la escuela del futuro. Te enseñamos las
            habilidades adecuadas para estar preparado para el mañana.
          </p>
          <div
            className="Main__buttons"
            data-ce="fade-right"
            data-ce-duration="3000"
          >
            <a href="/trading" className="btn">
              Estudios en trading
            </a>
          </div>
        </div>
        <div className="Main__image" data-ce="fade-left">
          <img src={`/img/home1.jpeg`} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Main;
