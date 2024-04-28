import React from "react";
import "./Skill.css";
import BackendDeveloper from "../assets/Backend Developer.png";
import frontendDeveloper from "../assets/frontend-development.png";

function Skill() {
  const skillsData = [
    {
      id: 1,
      title: "Frontend Developer",
      description:
        "A frontend developer is responsible for building the visible parts of websites and web applications that users interact with. They use languages like HTML, CSS, and JavaScript to create visually appealing and responsive interfaces that work seamlessly across different devices and browsers. ",
      image: frontendDeveloper,
      level: {
        skill1: "Advanced",
        skill2: "Advanced",
        skill3: "Advanced",
        skill4: "Intermediate",
        skill5: "Advanced",
        skill6: "Advanced",
      },

      skill1: " 1. HTML",
      skill2: " 2. CSS",
      skill3: " 3. Bootstrap",
      skill4: " 4. Git",
      skill5: " 5. JavaScript",
      skill6: " 6. React Js",
    },
    {
      id: 2,
      title: "Backend Developer",
      description:
        "Backend developers create and maintain the server-side logic and databases that power websites and applications. They handle data storage, processing, security, and performance optimization to ensure smooth operation and reliability",
      image: BackendDeveloper,
      level: {
        skill1: "Advanced",
        skill2: " Basic",
        skill3: "Advanced",
        skill4: "Basic",
        skill5: "Basic",
        skill6: "Intermediate",
      },
      
      skill1: " 1. Node JS",
      skill2: " 2. Python",
      skill3: " 3. MongoDB",
      skill4: " 4. MySQL",
      skill5: " 5. PHP",
      skill6: " 6. Firebase",
    },
  ];
  return (
    <section id="skills">
      <span className="SkillTitle">What I do...</span>

      <div className="skillBars">
        {skillsData.map((item) => (
          <div className="skillBar" key={item.id}>
            <img src={item.image} className="skillBarImg" alt="UI Design" />
            <div className="skillBarText">
              <h1 className="title">{item.title}</h1>
              <p>{item.description}</p>
              <div className="skill-item">
                <div>
                  <span>{item.skill1}</span> 
                  <span><h5 className="level">{item.level.skill1}</h5></span>
                  <span>{item.skill2}</span>
                  <span><h5 className="level">{item.level.skill2}</h5></span>
                  <span>{item.skill3}</span>
                  <span><h5 className="level">{item.level.skill3}</h5></span>
                </div>
                
               <div>
                  <span>{item.skill4}</span>
                  <span><h5 className="level">{item.level.skill4}</h5></span>
                  <span>{item.skill5}</span>
                  <span><h5 className="level">{item.level.skill5}</h5></span>
                  <span>{item.skill6}</span>
                  <span><h5 className="level">{item.level.skill6}</h5></span>
               </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
