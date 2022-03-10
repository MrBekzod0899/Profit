import React from 'react'
import '../../styles/order.css'
export default function Order() {
    return (
        <div id='Заказать' className='Order container-fluid'>
            <div className="row">
                <div className="col-xl-8 col-md-8 col-lg-8 col-sm-8 col-12">
                    <div className='orderTitle'>
                        <h3>Сколько стоят услуги</h3>
                    </div>
                    <div className="orderContent">
                        <p>
                            Цена рассчитывается индивидуально
                            в зависимости отсложности, объема
                            и сроков работы.
                        </p>
                        <p>
                            Разработчик оценивает временные затраты
                            по проекту, а аналитики устанавливают
                            стоимость продукта.
                        </p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4 col-lg-4 col-sm-4 col-12">
                    <div className="card">
                        <div className="card-title">
                            <h4>Получить
                                бесплатную
                                консультацию
                            </h4>
                        </div>
                        <div className="card-content">
                            В рамках консультации уточним необходимую информацию
                            для анализа вашего проекта
                        </div>
                        <div className="card-action">
                            <button className='btn w-100 btn-light'>Получить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
