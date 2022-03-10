import React from 'react'
import '../../styles/footer.css'

export default function Footer() {
  return (
    <footer>
        <ul className='navigations-item'>
          <li><a href="#Услуги">Услуги</a></li>
          <li><a href="#работаем">Как мы работаем</a></li>
          <li><a href="#Результат">Результат</a></li>
          <li><a href="#Заказать">Заказать</a></li>
          <li className='d-none callPhone'><i className="fa-solid fa-phone"></i><span>Позвонить</span></li>
        </ul>
    </footer>
  )
}
