import React from 'react';
import logo from '../../asset/logo.png'
import '../../styles/header.css'

const Header = () => {
    return (
        <header className="header">
             <input type="checkbox" id="check"/>
            <nav>
                    <label htmlFor="check" className="checkbtn">
                            <i className="fas fa-bars"></i>
                    </label>
                    <label className="logo">
                      <img src={logo} alt="logo"/>
                    </label>
                    <ul className='navigations-item'> 
                        <li><a href="#Услуги">Услуги</a></li>
                        <li><a href="#работаем">Как мы работаем</a></li>
                        <li><a href="#Результат">Результат</a></li>
                        <li><a href="#Заказать">Заказать</a></li>
                        <li className='d-none callPhone'><i className="fa-solid fa-phone"></i><span>Позвонить</span></li>
                    </ul>
            </nav>
        </header>
    );
}

export default Header;
