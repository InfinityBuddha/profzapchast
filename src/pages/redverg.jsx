import React from 'react'
import Catalog from '../components/Catalog/Catalog'

export default () =>
    <div className='catalog__container'>
        <h1 className='section-title section-title--left'>Каталог RedVerg</h1>
        <div className='catalog__row'>
            <Catalog/>
        </div>
    </div>