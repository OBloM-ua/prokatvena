import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../App.css';


class Button extends Component {
    static propTypes = {
        title: PropTypes.string,
        label: PropTypes.string,
        action: PropTypes.func,

    };
    static defaultProps = {
        title: "defaultName",
        label: "defaultName",
    };

    render() {

        return (
            <button>

                {/*onClick={this.props.action}*/}
                {/*label={this.label}*/}
                {this.props.title}
            </button>
        );
    }
}

export default Button;
