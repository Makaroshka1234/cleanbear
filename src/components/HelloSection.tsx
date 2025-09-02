import React from 'react';

const HelloSection = () => {
  return (
    <section className="mb-25 section__hello">
      <div className="mx-auto px-4 container">
        <div className="flex justify-center items-center hello__inner">
          <div>
            <h1 className="mb-3 font-bold text-4xl">Хімчистка м'яких меблів, матраців, килимів</h1>
            <h2 className="mb-5 text-2xl">у Львові з виїздом додому</h2>
            <p className="mb-7">
              Почистимо ваш диван, матрац, ковролін, килим, крісло, стілець. Все це у Вас вдома.
            </p>
            <button className="inline bg-[#482b14] hover:bg-[#ee991e] px-4 py-2 rounded-sm text-white transition-colors duration-300">
              Телефонуйте зараз
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelloSection;
