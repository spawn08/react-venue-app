import React, { Component } from "react";
import { Zoom } from "react-reveal";

export default class TimeUtil extends Component {
  state = {
    deadline: "Aug, 26, 2020",
    days: "0",
    hrs: "0",
    mins: "0",
    secs: "0"
  };

  getTime(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    console.log(time);
    if (time < 0) {
      console.log("Date Passed");
    } else {
      const secs = Math.floor((time / 1000) % 60);
      const mins = Math.floor((time / 1000 / 60) % 60);
      const hrs = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      console.log(secs);
      this.setState({
        days,
        hrs,
        mins,
        secs
      });
    }
  }

  componentDidMount() {
    setInterval(() => this.getTime(this.state.deadline), 1000);
  }

  render() {
    return (
      <div className="countdown_wrapper">
        <Zoom>
          <div className="countdown_top">Event Starts In</div>

          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">{this.state.days}</div>
              <div className="countdown_tag">Days</div>
            </div>

            <div className="countdown_item">
              <div className="countdown_time">{this.state.hrs}</div>
              <div className="countdown_tag">Hrs</div>
            </div>

            <div className="countdown_item">
              <div className="countdown_time">{this.state.mins}</div>
              <div className="countdown_tag">Mins</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.secs}</div>
              <div className="countdown_tag">Sec</div>
            </div>
          </div>
        </Zoom>
      </div>
    );
  }
}
