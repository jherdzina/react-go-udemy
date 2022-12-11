import React, { Component, Fragment } from 'react';
import './AppClass.css';

export default class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTrue: false,
        }
    }

    toggleTrue = () => {
        if (this.state.isTrue) {
            this.setState({
                isTrue: false,
            });
            return 
        }
        this.setState({
            isTrue: true,
        })

    }

    render() {
        return (
           <>
           <hr />
            <h1 className='h1-green'>{this.props.msg}</h1>
            <hr />
            {this.state.isTrue &&
                <Fragment>
                    <p>The current value of isTrue is true</p>
                    <hr />
                </Fragment>
            }
            <hr />
            {this.state.isTrue
            ? <p>Is true</p>
            : <p>Is false</p>
            }
            <hr />
            <a href="#!" className="btn btn-outline-secondary"onClick={this.toggleTrue}>Toggle isTrue</a>
           </>
        );
    }
}