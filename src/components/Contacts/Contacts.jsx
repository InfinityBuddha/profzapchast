import React from 'react';
import GoogleMap from '../../components/GoogleMap'
import './styles.scss'


export class Carousel extends React.Component {
    render() {
        return (
            <section className="contacts">
                <div className="contacts__container">
                    <div className="row">
                        <div className="column">
                            <div className="contacts__text-group">
                                <h2 className="section-title contacts__title" id="contacts-title">Контакты</h2>
                                <table className="contacts__table">
                                    <tr>
                                        <td className="contacts__item">e-mail:</td>
                                        <td className="contacts__item-value contacts__item-value--email">
                                            <a className="contacts__item-value-link"
                                               href="mailto:400250@bk.ru">400250@bk.ru</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="contacts__item">адрес:</td>
                                        <td className="contacts__item-value">
                                            <p className="contacts__item-value-text">
                                                г. Калуга,
                                                ул. Дальняя,
                                                д. 3.
                                            </p>
                                            <p className="contacts__item-value-text">8 (4842) 700-633</p>
                                            <p className="contacts__item-value-text">9:00 до 18:00 по будням</p>
                                        </td>
                                    </tr>
                                </table>
                                <a className="btn btn__contacts" id="btn-contacts" href="#">Обратная связь</a>
                            </div>
                        </div>
                        <div className="column">
                            <GoogleMap/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Carousel;
