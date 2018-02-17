import React, {Component} from 'react';
import s from './styles.module.css'
export class Catalog extends Component {
    render() {
        return (
            <div className={s.container}>
                <div className={s.catalogWrapper}>
                    {console.log(this.props.data)}
                </div>
            </div>
        )
    }
}

export default Catalog;
