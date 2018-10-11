import React, { Component } from 'react';
import Icon from './icon';

class Action extends Component {

    constructor(props) {
        super(props)

        this.status = false;
    }

    handleAction = function() {
        this.props.onClick()
        if(!status) {
            document.getElementById(this.id).className.add('action-remove')
        } else {
            document.getElementById(this.id).className.remove('action-remove')
        }
        
        this.status = !this.status
        
    }.bind(this);
    render() {
        this.id = `action ${this.props.id}`
        return (
            <a
                id={this.id}
                onClick={() => this.handleAction()}
                className={`${this.props.className} action`}>
            </a>
        )
    }    
}    
//         return (
//             <button onClick={() => this.props.onClick()} className={`${this.props.className} action`}>
//                 { Icon('fas fa-plus-circle')}
//             </button>
//         )
//     }
// }

export default Action;