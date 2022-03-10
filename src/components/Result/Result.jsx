import React from 'react'
import checked from '../../asset/check.png'
import '../../styles/result.css'

export default function Result() {
    return (
        <div id='Результат' className='container-fluid result py-5'>
            <div className="w-100 d-flex justify-content-center py-3 ">
                <div className="resultTitle text-center text-light ">
                    <h1 className='bg-dark'>Что даст вашему бизнесу </h1>
                    <h1 className='text-light'>внедрение Digital-инструментов</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                    <div className="card">
                        <p>Автоматизация бизнес-процессов</p>
                        <img src={checked} alt="check" />
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                    <div className="card">
                        <p>Привлечение новых клиентов</p>
                        <img src={checked} alt="check" />
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                    <div className="card">
                        <p>Увеличение прибыли</p>
                        <img src={checked} alt="check" />
                    </div>
                </div><div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                    <div className="card">
                        <p>Ускорение принятия решений</p>
                        <img src={checked} alt="check" />
                    </div>
                </div><div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                    <div className="card">
                        <p>Рост эффективности</p>
                        <img src={checked} alt="check" />
                    </div>
                </div><div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                    <div className="card">
                        <p>Повышение лояльности</p>
                        <img src={checked} alt="check" />
                    </div>
                </div>
            </div>
        </div>
    )
}
