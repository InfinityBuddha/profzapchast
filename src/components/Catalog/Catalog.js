import React, {Component} from 'react';
import s from './styles.module.scss'
import Card from './Card/Card'

const contentful = require('contentful')
const contentfulManage = require('contentful-management')

const clientDelivery = contentful.createClient({
    space: 'wqo8bre17nk0',
    accessToken: '351fbabffb9e5331a6c19c7918bf920ff4b82fd96483665feb013d071b6a4400'
})
const clientManage = contentfulManage.createClient({
    accessToken: 'CFPAT-1bd0093ea3c749bd9003d1b162ff98eadfc0b27f8482210b14c43c495c088107'
})

export class Catalog extends Component {
    constructor() {
        super()
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        clientDelivery.getEntries()
            .then(data => this.setState({
                    items: data.items
                })
            )
            .catch(console.error)
    }

    render() {
        const {items} = this.state
        return (
            <div className={s.container}>
                <h1>{this.props.title}</h1>
                <div className={s.catalogWrapper}>
                    {items && items.map((item, i) => {
                        return <Card key={i} item={item.fields}/>
                    })}
                </div>
            </div>
        )
    }
}

export default Catalog
