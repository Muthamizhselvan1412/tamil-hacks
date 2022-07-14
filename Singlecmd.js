import React from 'react'

 const Singlecmd = (props) => {
  return (
    <div className="comment">
        <a href="/" className="avatar"><img src={props.profile} alt="profile picture" /> </a>
          <div className="content">
            <a href="/" className="author">{props.name}</a>
            <div className="metadata">{props.time}</div>
            <div className="text">{props.command}</div>
          </div>
    </div>
  )
}
export default Singlecmd;