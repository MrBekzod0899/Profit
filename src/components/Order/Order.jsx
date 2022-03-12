import React, {useRef, useState } from 'react'
import '../../styles/order.css'
import { ToastContainer, toast } from 'react-toastify';

export default function Order() {
    const [recieve, setRecieve] = useState(true);
    const [send, setSend] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [interest, setInterest] = useState('');
    const ServiceRef = useRef()

  

    const handleRecieve = () => {
        setSend(true)
        setRecieve(false)
    }
    const PhoneRefElem = (e) => {
        console.log(e.target.value)
        setPhone(e.target.value)
        if (e.target.value.length === 13) {
            ServiceRef.current.focus()
        }
    }
    const handleSend = () => {
        if (name === '' && phone === '' && interest === '') {
            document.getElementById('name').classList.add('is-invalid');
            document.getElementById('phone').classList.add('is-invalid');
            document.getElementById('service').classList.add('is-invalid');
        }
        else {
            if (name !== '') {
                document.getElementById('name').classList.remove('is-invalid');
            }
            if (phone !== '' && phone.length === 13) {
                document.getElementById('phone').classList.remove('is-invalid');
            }
            if (interest !== '') {
                document.getElementById('service').classList.remove('is-invalid');
            }
        }

        if (name && phone && interest) {
            setSend(false)
            setRecieve(false)
            toast.success("🌟🤩🌟🥳🌟 Oтправлено !!! ");
            setPhone('');
            setInterest('');
            setName('');
        }
    }
    return (
        <div id='Заказать' className='Order container-fluid'>
            <ToastContainer
                autoClose={1500}
            />
            <div className="row">
                <div className="col-xl-8 col-md-8 col-lg-8 col-sm-7 col-12">
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
                <div className="col-xl-4 col-md-4 col-lg-4 col-sm-5 col-12">
                    {
                        recieve &&
                        <div className="card" style={{ transition: 'all linear 0.5s' }}>
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
                                <button className='btn w-100 btn-light' onClick={handleRecieve}>Получить</button>
                            </div>
                        </div>
                    }
                    {
                        send &&
                        <div className="card send" style={{ transition: 'all linear 0.5s' }}>
                            <div className=" d-none card-minimum">
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
                            </div>
                            <div className="card-action">
                                <input
                                    id='name'
                                    type='text'
                                    className='form-control'
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder='Ваше имя'
                                />
                                <div className="invalid-feedback p-0 m-0">
                                    Please enter your name.
                                </div>
                            </div>
                            <div className="card-action">
                                <input
                                    id='phone'
                                    type='tel'
                                    onChange={(e) => PhoneRefElem(e)}
                                    className='form-control'
                                    placeholder='номер телефона'
                                />
                                <div className="invalid-feedback p-0 m-0">
                                    Please enter 13 numbers
                                </div>
                            </div>
                            <div className="card-action ">
                                <input
                                    id='service'
                                    type='text'
                                    ref={ServiceRef}
                                    onChange={(e) => setInterest(e.target.value)}
                                    className='form-control' aria-required='true'
                                    placeholder='какая из услуг вас заинтересовала ?'
                                />
                                <div className="invalid-feedback p-0 m-0">
                                    Please enter your interests.
                                </div>
                            </div>
                            <div className="card-action">
                                <button type='submit' className='btn w-100 btn-light' onClick={handleSend}>Отправить</button>
                            </div>
                        </div>
                    }
                    {!recieve && !send &&
                        <div className="card iconCard" style={{ transition: 'all linear 0.5s' }}>
                            <div className="cardHeader text-center">
                                <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="37.5" cy="37.5" r="37.5" fill="#2ECC71" />
                                    <path d="M20.1221 38.4146L31.0977 49.3902L53.0489 27.439" stroke="white" strokeWidth="2" />
                                </svg>
                            </div>
                            <div className="card-title">
                                <h4>Cпасибо за вашу заявку!</h4>
                                <p>
                                    Наш менеджер свяжется с вами
                                    в течении 3-ех часов
                                </p>
                            </div>
                            <div className="card-action">
                                <button className='btn w-100 btn-light' onClick={() => setRecieve(true)}>Получить</button>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}
