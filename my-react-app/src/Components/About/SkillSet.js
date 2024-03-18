import React from 'react';
import { FaJs, FaPython, FaGit, FaNode, FaReact } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';

export default function SkillSet() {
  return (
    <div className='container'>
    <div className='row'>
        <div className='col-lg-3 col-md-6 col-sm-6'>
        <FaJs size={50} />
        </div>
        <div className='col-lg-3 col-md-6 col-sm-6'>
        <FaPython size={50} />
        </div>
        <div className='col-lg-3 col-md-6 col-sm-6'>
        <FaGit size={50} />
       </div>

    </div>
    <div className='row'>
        <div className='col-lg-3 col-md-6 col-sm-6'>
        <FaNode size={50} />
        </div>
        <div className='col-lg-3 col-md-6 col-sm-6'>
        <FaReact size={50} />
        </div>
        <div className='col-lg-3 col-md-6 col-sm-6'>
        <SiFigma size={50} />
       </div>

    </div>
  
    </div>
  )
}
