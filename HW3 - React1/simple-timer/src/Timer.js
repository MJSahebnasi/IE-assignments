import React, {Component} from 'react';
import './Timer.css';

export class Timer extends Component {
    render() {
        return <div className="container">
            <div className="timer">
            </div>
            <button>Reset Timer</button>
        </div>;
    }
}
