import React, {Component} from 'react';
import './Timer.css';

var interval = null;

export class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            time: 0
        };
    }

    increaseTime() {
        if (this.state.time === 59){
            this.setState({
                time: 0
            });
        }
        else{
            this.setState({
                time: this.state.time+1
            });
        }
    }

    componentDidMount(){
        this.setState({
            time: 0
        });
        interval = setInterval(() => {
            this.increaseTime();
          }, 1000);
    }

    resetTimer = () => {
        clearInterval(interval);
        this.setState({
            time: 0
        });
        interval = setInterval(() => {
            this.increaseTime();
          }, 1000);
    }

    componentWillUnmount() {
        clearTimeout(interval);
    }

    render() {
        return <div className="container">
            <div className="timer">{this.state.time}</div>
            <button onClick={this.resetTimer}>Reset Timer</button>
        </div>;
    }
}
