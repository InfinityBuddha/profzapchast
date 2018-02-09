import React, {Component} from 'react';
import s from './styles.module.css'
import Card from './Card/Card'
export class Catalog extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className={s.container}>
                <div className={s.catalogWrapper}>
                </div>
            </div>
        )
    }
}

export default Catalog;
