import React, { useState } from 'react'
import people from '../data'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Review() {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];
  console.log(people)

  function prevIndex() {
    if(index === 0) {
      setIndex(people.length - 1);
      return;
    }  
    setIndex(index-1)
  }

  function nextIndex() {
    if(index === people.length-1) {
      setIndex(0);
      return
    }  
    setIndex(index+1)
  }

  function randomIndex() {
    const r = Math.floor(Math.random()*(people.length));
    console.log(r);
    // 중복 채크
    if(r === index) {
      nextIndex();
    } else {
      setIndex(r);
    }
  }

  return (
    <article className='card'>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <h4 className="name">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button 
          className="prev-btn"
          onClick={prevIndex}
        >
          <FaChevronLeft />
        </button>
        <button 
          className="next-btn"
          onClick={nextIndex}
        >
          <FaChevronRight />
        </button>
        <button className="random-btn" onClick={randomIndex}>누가 나올까요?</button>
      </div>
    </article>
  )
}

