
import React, { Component } from 'react';
import DisplayLocation from './DisplayLocation';

class Location extends Component {
    constructor(props){
        super(props)
        this.state={
            latitude:null,
            errorMessage:''
        }
    }
   componentDidMount(){

  
    window.navigator.geolocation.getCurrentPosition(
      (position) => { this.setState({ latitude: position.coords.latitude }) },
      (error) => { this.setState({ errorMessage: error.message }) }
    // (position) =>console.log(position),
    // (error) =>console.log(error)


    );

  }
  render() {
   
          if(this.state.errorMessage && !this.state.latitude)
          {
           return <div> Error:{this.state.errorMessage}</div>
          }
          if(!this.state.errorMessage && this.state.latitude)
          {
           return <div><DisplayLocation Latitude={this.state.latitude} /></div>

          }
          else{
              return <div>Waiting for user Permission</div>
          }

  }
}
export default Location;