import React from 'react';

const Header = () => {
  return (
    <header className="mb-20">
      <div className="mx-auto px-4 container">
        <div className="flex justify-around items-center">
          <img src="/cleanbear-logo.png" alt="logo" className="max-h-25" />
          <ul className="flex justify-center items-center gap-10">
            <li>Головна</li>
            <li>Ціни</li>

            <li>
              <a href="tel:++380936476317" className="font-bold">
                +380 (93) 647 63 17
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
