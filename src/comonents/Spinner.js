import React, { Component } from 'react'
import lodaing from './loader.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <img src={lodaing} alt="lodaing"/>
            </div>
        )
    }
}

export default Spinner
