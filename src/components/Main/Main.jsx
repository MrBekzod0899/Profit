import React from 'react'
import '../../styles/main.css'

export default function Main() {
  return (
    <div className='main container-fluid'>
      <div className="row w-100">
        <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12">
          <div className="title">
            <h1>
              Разаработка сайтов
              и мобильных приложений
            </h1>
            <p>
              Помогаем бизнесу увеличить прибыль
              с помощью digital-инструментов
            </p>
          </div>
          <div className="projectOrder">
            <button className='btn btn-light'>Обсудить проект</button>  
          </div>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-4 col-sm-12">
            <div className="bgImage">
                <div className="Image1">
                  </div>  
            </div>
            <div className="bgImage">
              <div className="Image2">
                </div>  
            </div>
        </div>  
      </div>
    </div>
  )
}
