import React, { Component } from 'react';
import MinuteScale from './MinuteScale';
import HourScale from './HourScale';
import MinuteHand from './MinuteHand';
import HourHand from './HourHand';
import SecondHand from './SecondHand';
import './Clock.css';

class Clock extends Component {
    state = {
        timer: setInterval(this.setHandAngles.bind(this), 1000),
        hourHandAngle:   0, 
        minuteHandAngle: 0,
        secondHandAngle: 0
    }

    componentWillMount(){
        this.setHandAngles(); //this will do hands are set on correct position before the page is loaded
    }

    setHandAngles(){
        const d = new Date();
        const sec = d.getSeconds();
        const min = d.getMinutes();
        const hour = d.getHours();
        //console.log(`${hour}:${min}:${sec}`);

        this.setState({
        	secondHandAngle:  (sec*360)/60-90, //-90 because CSS set hands horizontaly when angle is 0deg,
        	minuteHandAngle: (min*360)/60-90,
       	    hourHandAngle: (hour*360)/12+(min*30)/60-90
        });
    }

    render() { 
        return (
            <div className="container">
                <div className="outer-circle">
                    <div className="inner-circle">
                        <MinuteScale/>
                        <HourScale/>
                        <MinuteHand minuteHandAngle={this.state.minuteHandAngle}/>
                        <HourHand hourHandAngle={this.state.hourHandAngle}/>
                        <SecondHand secondHandAngle={this.state.secondHandAngle}/>
                        <div className="center-dot"></div>
                    </div>
                </div>
          </div>
        );
    }
}
 
export default Clock;