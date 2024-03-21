import React from "react";
import Type from "../Components/Home/Type";
import Home2 from "../Components/Home/Home2";
import home1 from "../Assets/home-1.svg";
import back from "../Assets/home-bg.jpg";
import Connect from "../Components/Home/Connect";
export default function Home() {
  return (
    <div className="container-fluid" style={{   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${back})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)",
    minHeight: "170vh",
    position: "relative",
    zIndex: 0,
}}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row m-0 p-0">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="content">
              <h1>Hello buddy! I am kans 👋️</h1>
              <h4>welcome to my site</h4>
              <Type />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="image">
              <img
                src={home1}
                alt="Front"
                width={250}
                height={200}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Home2 />
      <br></br>
      <br></br>
      <Connect/>
    </div>
  );
}

