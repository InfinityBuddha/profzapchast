import React, {Component} from 'react';
import s from './styles.module.scss'
import img from '../../../img/redverg-rd-gb226.jpeg'
import {connect} from "react-redux"
import {increment} from '../../../ducks/store'

const Card = ({item, increment}) => {
    return (
        <article className={s.productCard}>
            <a className={s.name}>RedVerg RT-2003</a>
            <div className={s.productCard__photoContainer}>
                <img src={img} alt=''/>
            </div>
            <span className={s.productCard__price}>{item.price}</span>
            <button onClick={increment}>Положить в корзину</button>
        </article>
    )
}

const mapDispatchToProps = {
    increment
}

export default connect(null, mapDispatchToProps)(Card)

