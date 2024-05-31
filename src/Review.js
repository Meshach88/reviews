import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, text, job } = people[index];

  const checkNum = (number) => {
    if (number > people.length-1) {
      return 0
    }
    if (number < 0) {
      return people.length-1
    }
    else{
      return number
    }
  }

  const nextReview = () => {
    setIndex((index)=> {
      let newIndex = index + 1
      return checkNum(newIndex)
    })
  }
  const prevReview = () => {
    setIndex((index)=> {
      let newIndex = index - 1
      return checkNum(newIndex)
    })
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"/>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={prevReview} className="prev-btn"><FaChevronLeft/></button>
        <button onClick={nextReview} className="next-btn"><FaChevronRight/></button>
      </div>
        <button className="random-btn">Surprise me</button>
    </article>
  );
};

export default Review;
