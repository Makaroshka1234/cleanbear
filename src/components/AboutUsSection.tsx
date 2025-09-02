import React from 'react';

const AboutUsSection = () => {
  return (
    <section>
      <div className="mx-auto px-4 container">
        <div className="flex flex-col justify-center text-center aboutUs__inner items center">
          <h1>Про нас</h1>
          <div>
            <p className="block">
              Ми професійна виїзна хімчистка ecoclean, яка допоможе почистити улюблені м'які меблі,
              матраци та килими. У нашій команді працюють досвідчені клінери, які впораються з
              будь-якими забрудненнями у найкоротші терміни. Ми пропонуємо широкий спектр послуг
              хімчистки:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
