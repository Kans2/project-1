import React from 'react';
import { FaJs, FaPython, FaGit, FaNode, FaReact } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';

export default function SkillSet() {
  const styles = {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  }
  return (
    <div className='container'>
    <div className='row'>
        <div className='col-lg-3 col-md-6 col-sm-6' > 
        <div style={styles}>
        <FaJs size={50} />
        </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-6' >
          <div style={styles}>
        <FaPython size={50} />
        </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-6'>
          <div style={styles}>
        <FaGit size={50} />
        </div>
       </div>

    </div>
    <div className='row'>
        <div className='col-lg-3 col-md-6 col-sm-6' >
          <div style={styles}>
        <FaNode size={50} />
        </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-6' >
          <div style={styles}>
        <FaReact size={50} />
        </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-6' >
          <div style={styles}>
        <SiFigma size={50} />
        </div>
       </div>

    </div>
  
    </div>
  )
}
