import React from 'react'
import Contacts from '../components/Contacts'

export default () =>
    <div>
        <div className="catalog__container">
            <h1 className="section-title">Ремонт электроинструмента</h1>
            <div className="catalog__brands">
                <div className="catalog__row catalog__row--text">
                    <p>
                        ООО "Электрозапчасть" – это квалифицированные специалисты с большим опытом ремонта техники от различных производителей всех видов и моделей,
                        сертифицированные услуги, наличие оригинальных запчастей к любой модели и самое современное фирменное оборудование. Заказать у нас ремонт электро
                        и бензоинструмента вы можете, приехав к нам в сервисный центр по адресу г. Калуга, ул. Дальняя, д. 3.
                    </p>
                </div>
            </div>
        </div>
        <Contacts/>
    </div>