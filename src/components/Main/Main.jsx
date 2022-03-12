
import React, { useEffect } from 'react'
import '../../styles/main.css'
import  Aos  from 'aos'

export default function Main() {
  useEffect(()=>{
    Aos.init({
      offset: 400,
      duration: 1500,
      easing: 'ease-in-sine',
      delay: 500,
      once:true 
    })  
  })
 
  return (
    <div className='main container-fluid'>
      <div className="row w-100">
      <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 ">
          <div className="title">
            <h1 data-aos="fade-right">
              Разаработка сайтов
              и мобильных приложений
            </h1>
            <p >
              Помогаем бизнесу увеличить прибыль
              с помощью digital-инструментов
            </p>
          </div>
          <div className="projectOrder">
            <button className='btn btn-light'>Обсудить проект</button>  
          </div>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-5 col-12 col-sm-5 col-12">
            <div data-aos="flip-down" className="bgImage">
                <div  className="Image1">   
                  </div>
              </div>
            <div data-aos="flip-left"  className='bgImage'>
              <div  className="Image2">
              </div>  
            </div>
        </div>  
    </div>
    </div >
  )
}
