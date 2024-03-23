import React from 'react';
import { VscTerminalLinux } from "react-icons/vsc";
import { TbBrandVscode } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
export default function Tools() {
  return (

 <div className='container'>
  <h1 className='text-center'>Tools I use</h1>
    <div className='row'>
    <div className='col-lg-3 col-md-6 col-sm-12'> 
    <div className='skill-box'> 
    <VscTerminalLinux className='skill-icon' />
    </div>
    </div>
    <div className='col-lg-3 col-md-6 col-sm-12'> 
    <div className='skill-box'>
    <TbBrandVscode className='skill-icon' />
    </div>
    </div>
    <div className='col-lg-3 col-md-6 col-sm-12'> 
    <div className='skill-box'>
    <SiPostman className='skill-icon' />
    </div>
</div>
<div className='col-lg-3 col-md-6 col-sm-12'> 
<div className='skill-box'>
  <FaGithub className='skill-icon' />
</div>
</div>

  </div>
  </div>
  );
}
