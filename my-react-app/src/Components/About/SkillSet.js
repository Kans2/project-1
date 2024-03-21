import React from 'react';
import { FaJs, FaPython, FaGit,FaReact } from 'react-icons/fa';
//import { SiFigma } from 'react-icons/si';

export default function SkillSet() {
  return (
    <div className='container'>
    <div className='row'>
        <div className='col-lg-3 col-md-6 col-sm-6' > 
      
        <FaJs className='Skill' size={20} />
       
        </div>
        <div className='col-lg-3 col-md-6 col-sm-6' >
       
        <FaPython  className='Skill' size={20} />
      
        </div>
        <div className='col-lg-3 col-md-6 col-sm-6'>
      
        <FaGit  className='Skill' size={20} />
      
        <div className='col-lg-3 col-md-6 col-sm-6'>
        <FaReact  className='Skill' size={20} />
   
       </div>

    </div>

    </div>
  
    </div>
  )
}
