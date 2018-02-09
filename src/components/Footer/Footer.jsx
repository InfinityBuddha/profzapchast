import React from 'react'

const Footer = () => (
    <footer className='page-footer'>
        <div className='page-footer__container'>
            <div className='logo logo__page-footer'>
                <a className='logo__link logo__link--small'
                   href='<?php echo home_url(); ?>'><span>Электро</span>запчасть</a>
            </div>
            <nav className='page-footer__navigation'>
                <div className='page-footer__nav-title'>
                    <svg className='repair-icon' width='15px' height='15px' viewBox='0 0 15 15' version='1.1'>
                        <path
                            d='M14.1479283,3.77804064 C14.0827695,4.06383864 13.895584,4.30661326 13.6358943,4.44213544 C13.4224078,4.57923156 12.7365824,4.93258963 12.5349878,5.058684 C12.5023644,5.47885388 12.7293939,5.74601769 12.898115,6.09072795 C13.17458,6.11061122 13.4466585,6.1339169 13.719204,6.14902552 C14.3396491,6.18346649 15.0911383,6.28443548 14.9909497,6.88757827 C14.87515,7.58466161 14.6861977,8.5311123 14.5424613,9.22293685 C14.4555323,9.64138719 14.2261677,9.7738589 13.7889874,9.71115395 C13.5985508,9.68384157 13.4080308,9.6565292 13.2169103,9.63505993 C13.1742846,9.63715533 13.1322581,9.64598451 13.0923877,9.66122038 C12.6460175,10.2102059 12.6326745,10.5703753 13.0578296,11.0737511 C13.2096051,11.2534853 13.3966226,11.4033862 13.5494823,11.5823691 C13.8483133,11.9322713 13.7731594,12.3996035 13.3443351,12.5201719 C12.6362187,12.7151446 12.0149299,13.14439 11.5816872,13.7379768 C11.5380996,13.7854591 11.4871209,13.8255663 11.4307289,13.8567422 C11.3905063,13.8794221 11.3487012,13.8991675 11.3056392,13.9158244 C10.8868721,13.9592304 10.6519703,13.7375093 10.4718577,13.3699108 C10.1822666,12.7789217 9.82566079,12.3671492 9.21292121,12.5288531 C8.88732068,12.5908078 8.63194339,12.844494 8.5675749,13.1699261 C8.50114676,13.4440812 8.47079598,13.7257501 8.47729347,14.0077783 C8.5137384,14.2935728 8.40432151,14.5785789 8.1860512,14.766398 C8.06705946,14.8045976 7.94274501,14.8235669 7.817787,14.8225921 C7.016367,14.6956684 6.20022765,14.6926786 5.39790097,14.8137272 C5.0981601,14.8758827 4.78737153,14.7817775 4.57230869,14.5637422 C4.32324668,14.3077304 4.28450222,14.1562101 4.43799567,13.8160074 C4.63043849,13.444866 4.76339996,13.0457516 4.83201167,12.6332779 C4.08132312,12.0660786 3.71836274,12.0659117 3.09378133,12.6045632 C2.99632808,12.6886038 2.90721415,12.7825277 2.8078095,12.8640308 C2.37781769,13.2165708 1.99522655,13.1813619 1.74818266,12.702427 C1.54931754,12.3236762 1.3036723,11.971452 1.01702479,11.654039 C0.804689127,11.4139538 0.609932741,11.1582092 0.395478892,10.920144 C0.191799438,10.6938987 -0.00537534853,10.4704748 0.000111921381,10.1463156 C0.0934288671,9.85903479 0.328831079,9.7648772 0.578526877,9.67866625 C0.881811121,9.5739688 1.18219884,9.46096856 1.47969004,9.33966554 C1.84103879,9.21895389 2.06823198,8.86106638 2.02393048,8.48234736 C2.01058757,8.25389834 1.98416862,8.02621729 1.95878374,7.74417858 C1.91351794,7.53137242 1.81688194,7.4261797 1.33500291,7.42607953 C1.01111761,7.4491202 0.691183965,7.34365087 0.444363962,7.13247146 C0.0322182879,6.75938037 0.0300167085,6.29440216 0.209011787,5.83119358 C0.346827322,5.47458006 0.736857131,4.27757669 1.30286318,3.4190398 C1.43136577,3.25034018 1.57472587,3.09351716 1.73122049,2.95045555 C2.25262788,2.76374306 2.6378876,2.97740065 3.02838441,3.14865394 C3.79998796,3.48703694 4.02691743,3.50060965 4.71042444,3.06055649 C4.79727929,2.97921733 4.85591214,2.87223885 4.87777784,2.75521212 C4.86156621,2.66400948 4.8435366,2.56766489 4.8197362,2.47278944 C4.77845658,2.30824739 4.30693498,1.5137844 4.29072335,1.34810711 C4.26474893,1.2187333 4.29235241,1.08434726 4.36721228,0.97572496 C4.44207215,0.867102658 4.5577755,0.793549285 4.6878249,0.771909422 C4.87616372,0.733530369 5.06786673,0.714112404 5.26006876,0.713945745 C5.79410187,0.684496457 7.13259545,0.0976309138 7.66265905,0.0357273086 C8.2372546,-0.0313683195 8.61754408,-0.0180126334 9.05644228,0.198683374 C9.17469378,0.304593965 9.19467479,0.931125895 9.20830123,1.11259628 C9.22412925,1.32326553 9.15532989,1.53936054 9.16205138,1.7518662 C9.18088156,2.34741294 9.5082831,2.56736439 10.057327,2.35821435 C10.4012109,2.23580292 10.7097614,2.03065656 10.9558216,1.7608312 C11.3733711,1.29476784 11.9108734,1.31575296 12.2414606,1.84108218 C12.5673944,2.35904908 13.5003971,3.07801905 13.9384446,3.48883996 C14.0179405,3.57783904 14.0881336,3.67474353 14.1479283,3.77804064 L14.1479283,3.77804064 Z M7.58647106,4.2784949 C7.10309743,4.26186806 6.63138129,4.42917562 6.2663073,4.74672856 C5.87010658,5.07171939 5.4967029,5.42359813 5.14873889,5.79987449 C4.66715849,6.30350874 4.41131422,6.98177203 4.44018057,7.67831836 C4.48476255,8.28832263 4.67930212,8.88867741 4.82654108,9.4886983 C4.87152755,9.60937837 4.94849523,9.71551879 5.04918414,9.79572883 C5.98962548,10.6669536 7.13371291,10.8010781 8.33760993,10.6695413 C8.54769761,10.6255577 8.74714674,10.5408184 8.92469777,10.4201072 C9.19370073,10.2875765 9.44539268,10.1224227 9.67410206,9.92836749 C10.4021911,9.22667644 10.9437629,8.42887453 10.8135862,7.34083686 C10.7876474,7.19327101 10.7824099,7.04280372 10.798025,6.89378866 C10.8308931,6.61440716 10.7614498,6.33257213 10.6025681,6.10052768 C10.4519414,5.81669871 10.2676688,5.55208764 10.0537411,5.31242534 C9.80454564,5.0561965 9.52404441,4.77734647 9.20177988,4.65756266 C8.68736084,4.4664261 8.12725902,4.39851243 7.58647106,4.2784949 L7.58647106,4.2784949 Z'
                            id='Shape'>
                        </path>
                    </svg>
                    Ремонт
                </div>
                <ul className='page-footer__repair-list'>
                    <li className='page-footer__item'><a className='page-footer__item-link'
                                                         href='http://prof-zapchast.ru/repair-gasoline/'>Бензоинструмент</a>
                    </li>
                    <li className='page-footer__item'><a className='page-footer__item-link'
                                                         href='http://prof-zapchast.ru/repair-electro/'>Электроинструмент</a>
                    </li>
                </ul>
                <div className='page-footer__nav-title'>
                    <svg className='cart-icon' width='15px' height='14px' viewBox='0 0 15 14' version='1.1'>
                        <path
                            d='M14.9951211,2.30694171 L14.0573399,7.9336288 C14.0198287,8.12118504 13.8697837,8.25247441 13.6822275,8.25247441 L4.60450561,8.25247441 L4.79206184,9.19025559 L13.1195587,9.19025559 C13.607205,9.19025559 13.607205,9.94048053 13.1195587,9.94048053 L4.49197186,9.94048053 C4.30441563,9.94048053 4.15437064,9.80919117 4.11685939,9.64039056 C2.89774385,3.65734661 2.44760889,1.44418302 2.2975639,0.750224946 L0.365734661,0.750224946 C-0.121911554,0.750224946 -0.121911554,0 0.365734661,0 L2.6164095,0 C2.80396574,0 2.95401072,0.131289366 2.99152197,0.300089978 L3.31036757,1.87556236 C15.5202786,1.87556236 14.751298,1.81929549 14.9200986,2.00685173 C14.9763655,2.10062985 15.0138767,2.19440797 14.9951211,2.30694171 M5.42975305,11.065818 C4.86708434,11.065818 4.39819375,11.5347085 4.39819375,12.0973773 C4.39819375,12.660046 4.86708434,13.1289366 5.42975305,13.1289366 C5.99242176,13.1289366 6.46131235,12.660046 6.46131235,12.0973773 C6.46131235,11.5347085 5.99242176,11.065818 5.42975305,11.065818 M12.55689,11.065818 C11.9942213,11.065818 11.5253307,11.5347085 11.5253307,12.0973773 C11.5253307,12.660046 11.9942213,13.1289366 12.55689,13.1289366 C13.1195587,13.1289366 13.5884493,12.660046 13.5884493,12.0973773 C13.5884493,11.5347085 13.1195587,11.065818 12.55689,11.065818'
                            id='Shape'>
                        </path>
                    </svg>
                    Продажа
                </div>
                <ul className='page-footer__sale-list'>
                    <li className='page-footer__item'><a className='page-footer__item-link'
                                                         href='http://prof-zapchast.ru/category/sell-tools/'>Инструмент</a>
                    </li>
                    <li className='page-footer__item'><a className='page-footer__item-link'
                                                         href='http://prof-zapchast.ru/category/original-spare/'>Оригинальные
                        запчасти</a></li>
                    <li className='page-footer__item'><a className='page-footer__item-link'
                                                         href='http://prof-zapchast.ru/category/china-spare/'>Китайские
                        запчасти</a></li>
                </ul>
            </nav>
            <div className='page-footer__contacts'>
                <p className='page-footer__phone-number'>8 (4842) 700-633</p>
                <p className='page-footer__phone-number'>8 (4842) 700-635</p>
                <a className='page-footer__mail' href='mailto:400250@bk.ru'>400250@bk.ru</a>
            </div>
            <div className='page-footer__author'>
                <p>Разработано: <a className='page-footer__author-link' href='https://github.com/InfinityBuddha'>Korolev
                    Ruslan</a></p>
            </div>

        </div>
    </footer>
)

export default Footer