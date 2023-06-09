import React, {Component} from 'react'

export default class ClassComponent extends Component {
    Clickhandler() {
        console.log('Clicked the button');
    }
    
    
    render() {
        return (
            <div>

                <button type="button" onClick={this.ClickHandler}></button>
            </div>
        )
    }
}