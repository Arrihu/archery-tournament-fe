import React from 'react'

import ArrowForm from './ArrowForm'
import ArrowList from './ArrowList'


class Arrow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            modal: false
        }

        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        })
    }

    render() {
        return (
            <div>
                <ArrowForm
                    dataState={this.state}
                    dataToggle={this.toggle}                
                ></ArrowForm>

                <ArrowList
                    dataToggle={this.toggle}
                ></ArrowList>
            </div>
        )
    }
}

export default Arrow