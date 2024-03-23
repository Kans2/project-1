import React from 'react';
import GithubCalender from "react-github-calendar";

export default function Github(){
  return (
    <div className='row'>
        <h1 className='text-center'>Days I code</h1>
        <GithubCalender
        username='kannan'
        blockSize={15}
        blockMargin={5}
        color='white'
        fontSize='3rem'/>
    </div>
  );
}