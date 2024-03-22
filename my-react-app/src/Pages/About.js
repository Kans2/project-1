import React from "react";
import About1 from "../Components/About/About1";
import SkillSet from "../Components/About/SkillSet";
import back from "../Assets/home-bg.jpg";
export default function About() {
 
  return (
<div className="container-fluid"  style={{   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${back})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)",
    minHeight: "170vh",
    position: "relative",
    zIndex: 0,
}}>
 <About1/>
 <br></br>
 <br></br>
<SkillSet/>
</div>
  );
}
