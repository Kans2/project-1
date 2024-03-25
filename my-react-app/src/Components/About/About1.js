import React from 'react';
import about1 from "../../Assets/about-1.svg";


export default function About1() {
  return (
     <div className='container'>
        <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='about-content'>
              <p  style={{color:'white'}}P>ersonal Bio
Hello, I'm [Your Name], a passionate and results-driven [Your Profession/Field]. With [Number of Years] years of experience in [Specific Area or Industry], I have honed my skills in [Key Skills/Technologies] and developed a deep understanding of [Industry Trends/Challenges].


Skills
Technical Skills: [List of Technical Skills]
Soft Skills: [List of Soft Skills]
I excel in [Specific Skills or Technologies], and I am known for my strong [Soft Skills, such as Communication, Leadership, Collaboration, etc.].

Interests
Outside of work, I enjoy [Hobbies or Interests], which helps me stay creative and balanced in both my personal and professional life.

I am eager to bring my expertise and passion to a dynamic team where I can contribute to meaningful projects and continue to grow professionally.

</p>
              </div>
       
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
