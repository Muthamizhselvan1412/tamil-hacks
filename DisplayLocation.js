import React from 'react';
import Bird from '../images/bird.jpeg';
import Nature from'../images/nature.jpg';
import '../css/Location.css';

const LocationConfig={
  North:{
    text:'Hi ,You are currently in North region',
    Picture:Bird
  },
  South:{
    text:'Hi ,You are currently in South region',
    Picture:Nature

  }
}

 const DisplayLocation = (props) => {
     var region=(props.Latitude>0) ? 'North':'South';
     const {text,Picture}=LocationConfig[region]
  return (
    
    <div className='ui teal bottom attached lable'>
    <img src={Picture} alt='region pic'/>
    <h1>{text}</h1>
    </div>
  
  )
}
export default DisplayLocation;