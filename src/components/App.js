import React,{ Component } from "react";
import { Form,FormControl,Button } from "react-bootstrap";
import Clock from "./Clock";
import "../App.css";

class App extends Component{
  constructor(){
    super();
    this.changeDeadline=this.changeDeadline.bind(this);
    this.state={
      deadline:"December 25, 2017",
      newDeadline:""
    };
  }

  changeDeadline(){
    this.setState({deadline:this.state.newDeadline});
  }

  render(){
    return(
      <div className="app">
        <div className="app-title">
          <h3>Countdown to {this.state.deadline}</h3>
        </div>
        <Clock deadline={this.state.deadline} />
        <Form inline>
          <FormControl placeholder="New Date" onChange={(event)=>this.setState({newDeadline:event.target.value})} >
          </FormControl>
          <Button onClick={()=>{this.changeDeadline()}} >Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
