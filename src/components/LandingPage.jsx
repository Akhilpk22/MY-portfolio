import React from "react";
import "./LandingPage.css";
import bg from "../assets/image.png";
import { Link } from "react-scroll";
import btnImg from "../assets/hireme.png";
import cv from "../assets/Akhil.pdf";

const LandingPage = () => {
  return (
    <section id="landing" className="">
      <div className="introContent">
        <span className="hello ">Hello,</span>
        <span className="introtext">
          {" "}
          I'm <span className="introName">Akhil pk</span>
          <br />
          Mern stack Developer
        </span>
        <p className="intropara">
          To work in a firm with a professional work driven environment where i{" "}
          <br />
          can utilize and apply my knowledge, skills which would enable me as a
          <br />
          fresh graduate to grow while fulfilling organizational goals.
        </p>{" "}
        
        <button className="btn">
          <img src={btnImg} className="btnImg" alt="" />
          <a href={cv} target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </button>
      </div>
      <img src={bg} className="bg" alt="" />
    </section>
  );
};

export default LandingPage;
