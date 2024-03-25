import React from 'react';
import GithubCalender from "react-github-calendar";

export default function Github(){
  return (
    <div className='row' style={{justifyContent: "center", paddingBottom: "10px"}}>
        <h1 className='text-center'>Days I code</h1>
        <GithubCalender
        username='kannan'
        blockSize={20}
        blockMargin={3}
        color='white'
        fontSize={16}/>
    </div>
  );
}