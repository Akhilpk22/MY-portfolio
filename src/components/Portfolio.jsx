import React from "react";
import "./Portfolio.css";
import portfolio1 from "../assets/portfolio-1.png";
import portfolio2 from "../assets/portfolio-2.png";
import portfolio3 from "../assets/portfolio-3.png";
import portfolio4 from "../assets/portfolio-4.png";
import portfolio5 from "../assets/portfolio-5.png";
import portfolio6 from "../assets/portfolio-6.png";

function Portfolio() {
  return (
    <section id="works">
      <h2 className="worksTitle"> My Portfolio</h2>
      <span className="worksDesc">
        {" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, corrupti
        quos! Alias assumenda unde provident eos facilis doloribus deleniti fuga
        atque ,
      </span>
      <div className="worksImgs">
        <div className="workItem">
          <img src={portfolio1} alt="portfolio1" className="worksImg" />
          <p>Title 1</p>
        </div>
        <div className="workItem">
          <img src={portfolio2} alt="portfolio2" className="worksImg" />
          <p>Title 2</p>
        </div>
        <div className="workItem">
          <img src={portfolio3} alt="portfolio3" className="worksImg" />
          <p>Title 3</p>
        </div>
        <div className="workItem">
          <img src={portfolio4} alt="portfolio4" className="worksImg" />
          <p>Title 4</p>
        </div>
        <div className="workItem">
          <img src={portfolio5} alt="portfolio5" className="worksImg" />
          <p>Title 5</p>
        </div>
        <div className="workItem">
          <img src={portfolio6} alt="portfolio6" className="worksImg" />
          <p>Title 6</p>
        </div>
     
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
}

export default Portfolio;
