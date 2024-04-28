import React, { useState } from "react";
import "./Portfolio.css";
import portfolio1 from "../assets/portfolio-1.png";
import portfolio2 from "../assets/portfolio-2.png";
import portfolio3 from "../assets/portfolio-3.png";
import portfolio4 from "../assets/portfolio-4.png";
import portfolio5 from "../assets/portfolio-5.png";
import portfolio6 from "../assets/portfolio-6.png";

function Portfolio() {
  const portfolioData = [
    { image: portfolio1, title: "Title 1" },
    { image: portfolio2, title: "Title 2" },
    { image: portfolio3, title: "Title 3" },
    { image: portfolio4, title: "Title 4" },
    { image: portfolio5, title: "Title 5" },
    { image: portfolio6, title: "Title 6" },
  ];
  const [showAllItems, setShowAllItems] = useState(false);

  const toggleItemsVisibility = () => {
    setShowAllItems(!showAllItems);
  };

  return (
    <section id="works">
      <h2 className="worksTitle"> My Portfolio</h2>
      <span className="worksDesc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, corrupti
        quos! Alias assumenda unde provident eos facilis doloribus deleniti fuga
        atque ,
      </span>
      <div className="worksImgs">
        {portfolioData.map((item, index) => (
          <div className="workItem" key={index}>
            <img
              src={item.image}
              alt={`portfolio${index + 1}`}
              className="worksImg"
            />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      {!showAllItems ? (
        <div className="workItem" onClick={toggleItemsVisibility}>
          <button className="workBtn">See More</button>
        </div>
      ) : (
        <div>
          <div className="workItem" onClick={toggleItemsVisibility}>
            <button className="workBtn">See Less</button>
          </div>
          <div className="worksImgs">
            {portfolioData.map((item, index) => (
              <div className="workItem" key={index}>
                <img
                  src={item.image}
                  alt={`portfolio${index + 1}`}
                  className="worksImg"
                />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
