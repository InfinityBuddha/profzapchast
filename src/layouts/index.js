import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default ({children}) =>
    <div>
        <Helmet
            title="Ремонт электроинструмента"
            meta={[
                {name: 'description', content: 'Электрозапчасть - ремонт и продажа электроинструмента'},
                {name: 'keywords', content: 'sample, something'},
                {name: 'format-detection', content: 'telephone-no'},
                {name: 'viewport', content: 'width=device-width,initial-scale=1'},
            ]}
        />
        <Header/>
        {children()}
        <Footer />
    </div>