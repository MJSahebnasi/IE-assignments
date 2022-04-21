import React, {Component} from 'react';
import './Timer.css';

export class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            time: 0
        };
    }

    increaseTime(){
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
        setInterval(() => {
            this.increaseTime();
          }, 1000);
    }

    render() {
        return <div className="container">
            <div className="timer">{this.state.time}</div>
            <button>Reset Timer</button>
        </div>;
    }
}
