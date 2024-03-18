import React from 'react';
import about1 from "../../Assets/about-1.svg";

export default function About1() {
  return (
     <div className='container'>
        <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
           <p>Some text</p>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div  className='image'>
                <img
                src={about1}
                alt="Front"
                width={250}
                height={200}
                style={{ cursor: "pointer" }}
              />
                </div>
             
            </div>
        </div>

     </div>
  )
}
