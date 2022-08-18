import React from 'react';
import './Start.scss';


const StartProject = () => {
  return (
    <div className='start'>
      <div className="start-main">
           <div className="content">
            <h2>Would you like to start a project with us?</h2>
        </div>
        <div className="button">
          <a href="/app-form"> <button>Start Now</button></a>
        </div>
      </div>
     
  
    </div>
  )
}

export default StartProject;