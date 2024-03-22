import React from 'react';
import { FaJs, FaPython, FaGit,FaReact } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';

export default function SkillSet() {
  return (
  <div className='container'>
  <div className='row'>
    <div className='col-lg-3 col-md-6 col-sm-12'> 
    <div className='skill-box'> 
         <FaJs className='skill-icon'/>
    </div>
    </div>
    <div className='col-lg-3 col-md-6 col-sm-12'> 
    <div className='skill-box'>
    <FaPython className='skill-icon'/>
    </div>
    </div>
    <div className='col-lg-3 col-md-6 col-sm-12'> 
    <div className='skill-box'>
    <FaGit className='skill-icon'/>
    </div>
</div>
<div className='col-lg-3 col-md-6 col-sm-12'> 
<div className='skill-box'>
  <FaReact className='skill-icon'/>
</div>
</div>

  </div>
  <br></br>
  <br></br>
  <div className='row'>
   <div className='col-lg-3 col-md-6 col-sm-12'>
<div className='skill-box'>
<SiFigma classaName='skill-icon'/>
</div>
   </div>
   <div className='col-lg-3 col-md-6 col-sm-12'>
  

</div>
<div className='col-lg-3 col-md-6 col-sm-12'>

</div>
<div className='col-lg-3 col-md-6 col-sm-12'>

</div>
  </div>
  </div>
  
  )
}
