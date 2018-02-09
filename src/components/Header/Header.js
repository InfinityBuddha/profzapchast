import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
    <header className='page-header'>
        <div className='page-header__container'>
            <div className='logo'>
                <Link to='/' className='logo__link'><span>Электро</span>запчасть</Link>
            </div>
            <nav className='main-nav'>
                <ul className='main-nav__list'>
                    <li className='main-nav__item'>
                        <a href='#'>Наши услуги</a>
                        <ul className='sub-menu'>
                            <li className='main-nav__category'><a href='#'>Ремонт</a></li>
                            <li className='main-nav__sub-item'><Link to='/gasoline-repair-page/'>Ремонт бензоинструмента</Link></li>
                            <li className='main-nav__sub-item'><Link to='/electro-repair-page/'>Ремонт электроинструмента</Link></li>
                            <li className='main-nav__category'><a href='#'>Продажа</a></li>
                            <li className='main-nav__sub-item'><a href='#'>Китайские запчасти</a></li>
                            <li className='main-nav__sub-item'><a href='#'>Оригинальные запчасти</a></li>
                            <li className='main-nav__sub-item'><a href='http://prof-zapchast.ru/category/sell-tools/'>Продажа инструмента</a></li>
                        </ul>
                    </li>
                    <li className='main-nav__item'>
                        <a href='#'>Контакты</a>
                    </li>
                </ul>
            </nav>
            <div className='logo__phone-numbers'>
                <div className='logo__phone-number'>8 (4842) 700-633</div>
                <div className='logo__phone-number'>8 (4842) 400-250</div>
            </div>
        </div>
    </header>
)

export default Header
