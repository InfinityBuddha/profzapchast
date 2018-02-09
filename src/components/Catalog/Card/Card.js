import React, {Component} from 'react';
import s from './styles.module.css'
import img from '../../../img/redverg-rd-gb226.jpeg'

export class Card extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        const {item} = this.props
        console.log(item);
        return (
            <article className={s.productCard}>
                <a className={s.name}>RedVerg RT-2003</a>
                <div className={s.productCard__photoContainer}>
                    <img src={img} alt=''/>
                </div>
                <span className={s.productCard__price}>{item.price}</span>
            </article>
        )
    }
}

export default Card;
