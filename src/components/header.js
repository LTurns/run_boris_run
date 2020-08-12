import React from 'react';


function Header(){
  return(
    <div className="header">
      <center>
      <h1 class="title"> Run Boris, Run! </h1>
      <div className="link-group">
        <a href="/" className="button" >Home</a>
        <a href="/controls" className="button" >Controls</a>
        <a href="/play" className="button" >Play</a>
      </div>
      </center>
      <br/>
    </div>
  )
}

export default Header
