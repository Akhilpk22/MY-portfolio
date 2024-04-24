import React from "react";
import "./Skill.css";
import UIDesign from "../assets/ui-design.png";
import webDesign from "../assets/website-design.png";
import AppDesign from "../assets/app-design.png";

function Skill() {
  const skillsData = [
    {
      id: 1,
      title: "UI Design",
      description: "Description of UI Design skills goes here",
      image: UIDesign,
    },
    {
      id: 2,
      title: "UI Design",
      description: "Description of UI Design skills goes here",
      image: webDesign,
    },
    {
      id: 3,
      title: "UI Design",
      description: "Description of UI Design skills goes here",
      image: AppDesign,
    },
  ];
  return (
    <section id="skills">
      <span className="SkillTitle">What I do...</span>
      <span className="SkillDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque possimus
        obcaecati sint assumenda dolores rerum alias fugit provident dolore
        nihil omnis repellendus perferendis distinctio officiis quae nam, quis
        at quas!
      </span>
      <div className="skillBars">
        {skillsData.map
           (item => (
              <div className="skillBar" key={item.id}>
                <img src={item.image} className="skillBarImg" alt="UI Design" />
                <div className="skillBarText">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            ))
          }
          
       
      </div>
    </section>
  );
}

export default Skill;
