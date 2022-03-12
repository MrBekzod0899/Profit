import Aos from 'aos';
import React, { useEffect, useState } from 'react'
import '../../styles/service.css'



export default function Service() {
    const size = useWindowSize();
    console.log(size)

    useEffect(()=>{
        Aos.init({
            duration:500,
            offset:300,
            easing:"ease-in-sine",
            once:true
        })
    })

    return (
        <div id='Услуги' className='service container-fluid'>
            <div className="w-100 d-flex justify-content-center py-3 ">
                <h1 className='text-light titleHeader'>Услуги</h1>
            </div>
            {size > 576 ?
                <div className="row">
                    <div  className="col-xl-4 xol-lg-4 col-md-4 col-sm-4 col-12">
                        <div data-aos="fade-up-right" className="card">
                            <div className="card-title">
                                <h4>Разработка сайтов</h4>
                            </div>
                            <div className="card-content">
                                <button className='btn '>Подробнее</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 xol-lg-4 col-md-4 col-sm-4 col-12">
                        <div data-aos="fade-up" className="card">
                            <div className="card-title">
                                <h4>Мобильные приложения</h4>
                            </div>
                            <div className="card-content">
                                <button className='btn '>Подробнее</button>
                            </div>
                        </div>
                    </div>
                    <div className=" col-xl-4 xol-lg-4 col-md-4 col-sm-4 col-12">
                        <div data-aos="fade-up-left" className="card">
                            <div className="card-title">
                                <h4>Маркетинг продвижение</h4>
                            </div>
                            <div className="card-content">
                                <button className='btn '>Подробнее</button>
                            </div>
                        </div>
                    </div>
                    <div className=" col-xl-4 xol-lg-4 col-md-4 col-sm-4 col-12">
                        <div data-aos="fade-down-right" className="card">
                            <div className="card-title">
                                <h4>SMM-продвижение</h4>
                            </div>
                            <div className="card-content">
                                <button className='btn '>Подробнее</button>
                            </div>
                        </div>
                    </div>
                    <div className=" col-xl-4 xol-lg-4 col-md-4 col-sm-4 col-12 ">
                        <div data-aos="fade-down" className="card">
                            <div className="card-title">
                                <h4>SEO-оптимизация</h4>
                            </div>
                            <div className="card-content">
                                <button className='btn '>Подробнее</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 xol-lg-4 col-md-4 col-sm-4 col-12">
                        <div data-aos="fade-down-left" className="card">
                            <div className="card-title">
                                <h4>Брендинг и айдентика </h4>
                            </div>
                            <div className="card-content">
                                <button className='btn '>Подробнее</button>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="row">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
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
                            </div>
                            <div className="carousel-item">
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
                            </div>
                            <div className="carousel-item">
                                <div className=" col-xl-4 xol-lg-4 col-md-4 col-sm-12">
                                    <div className="card">
                                        <div className="card-title">
                                            <h4>Маркетинг продвижение</h4>
                                        </div>
                                        <div className="card-content">
                                            <button className='btn '>Подробнее</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className=" col-xl-4 xol-lg-4 col-md-4 col-sm-12">
                                    <div className="card">
                                        <div className="card-title">
                                            <h4>SMM-продвижение</h4>
                                        </div>
                                        <div className="card-content">
                                            <button className='btn '>Подробнее</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className=" col-xl-4 xol-lg-4 col-md-4 col-sm-12">
                                    <div className="card">
                                        <div className="card-title">
                                            <h4>SEO-оптимизация</h4>
                                        </div>
                                        <div className="card-content">
                                            <button className='btn '>Подробнее</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
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
                        <button  className="carousel-icon carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <i className="fa-solid fa-angle-left"></i>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button  className="carousel-icon carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <i className="fa-solid fa-angle-right"></i>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            }

        </div>
    )
}


function useWindowSize() {
    const [width, setWindowSize] = useState(undefined);
    useEffect(() => {
        function handleResize() {
            setWindowSize(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return width;
}