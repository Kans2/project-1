import React from "react";
import home2 from "../../Assets/home-2.svg";

export default function Home2() {
  return (
    <div className="home-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img
              src={home2}
              alt="second for home"
              width={300}
              height={250}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
          <h1>Let Me Introduce for MySelf</h1>
          <br></br>
          <p style={{color:'white'}}>Introduction:
I'm kannan, a developer with a passion for Space.

With a B.E in Cse, I bring 1 years of experience in fronted. My expertise lies in javascript.

I started my career at my github, where I finished lot of certificates. Over the years, I've had the opportunity to work on projects such as weather App.

Passion and Motivation:
What drives me is [Your Motivation or Passion]. I believe in [Your Values or Beliefs].

Client or Project Examples:
Some of my notable clients include [Client Name] and [Client Name], with whom I collaborated on [Project Description].

Personal Touch:
Outside of work, I enjoy [Your Interests or Hobbies]. I believe in [Personal Philosophy or Statement].

Call to Action:
Let's collaborate! Whether you're looking for [Services You Offer], feel free to [Contact Information or Call to Action Button].</p>
          </div>
        </div>
      </div>
    </div>
  );
}
