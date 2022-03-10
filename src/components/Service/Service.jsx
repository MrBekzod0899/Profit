import React from 'react'
import '../../styles/service.css'

export default function Service() {
    return (
        <div id='Услуги' className='service container-fluid'>
            <div className="w-100 d-flex justify-content-center py-3 ">
                <h1 className='text-light'>Услуги</h1>
            </div>
            <div className="row">
                <div className="col-xl-4 xol-lg-4 col-md-4 col-sm-12">
                    <div className="card">
                        <div className="card-title">
                            <h4>Разработка сайтов</h4>
                        </div>
                        <div className="card-content">
                            <button className='btn '>Подробнее</button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 xol-lg-4 col-md-4 col-sm-12">
                    <div className="card">
                        <div className="card-title">
                            <h4>Мобильные приложения</h4>
                        </div>
                        <div className="card-content">
                            <button className='btn '>Подробнее</button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 xol-lg-4 col-md-4 col-sm-12">
                    <div className="card">
                        <div className="card-title">
                            <h4>Маркетинг продвижение</h4>
                        </div>
                        <div className="card-content">
                            <button className='btn '>Подробнее</button>
                        </div>
                    </div>
                </div>
                
                <div className="col-xl-4 xol-lg-4 col-md-4 col-sm-12">
                    <div className="card">
                        <div className="card-title">
                            <h4>SMM-продвижение</h4>
                        </div>
                        <div className="card-content">
                            <button className='btn '>Подробнее</button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 xol-lg-4 col-md-4 col-sm-12">
                    <div className="card">
                        <div className="card-title">
                            <h4>SEO-оптимизация</h4>
                        </div>
                        <div className="card-content">
                            <button className='btn '>Подробнее</button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 xol-lg-4 col-md-4 col-sm-12">
                    <div className="card">
                        <div className="card-title">
                            <h4>Брендинг и айдентика </h4>
                        </div>
                        <div className="card-content">
                            <button className='btn '>Подробнее</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
