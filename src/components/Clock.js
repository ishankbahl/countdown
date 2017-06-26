import React,{Component} from "react";

class Clock extends Component{
  constructor(){
    super();
    this.state={
      days:0,
      hours:0,
      minutes:0,
      seconds:0
    };
    this.getTimes=this.getTimes.bind(this);
    this.checkForZero=this.checkForZero.bind(this);
  }

  componentWillMount(){
    this.getTimes(this.props.deadline);
  }

  componentDidMount(){
    setInterval((()=>this.getTimes(this.props.deadline)),1000);
  }

  getTimes(deadline){
    const time=Date.parse(deadline)-Date.parse(new Date());
    this.setState({
      seconds:Math.floor((time/1000)%60),
      minutes:Math.floor((time/(1000*60))%60),
      hours:Math.floor((time/(1000*60*60))%24),
      days:Math.floor((time/(1000*60*60*24)))
    });
  }

  checkForZero(num){
    return num<10?"0"+num:num;
  }

  render(){
    const state=this.state;
    return (
      <div>
        <div className="clock">{this.checkForZero(state.days)} days</div>
        <div className="clock">{this.checkForZero(state.hours)} hours</div>
        <div className="clock">{this.checkForZero(state.minutes)} minutes</div>
        <div className="clock">{this.checkForZero(state.seconds)} seconds</div>
      </div>
    );
  }
}

export default Clock;
