import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card glass hover-lift">
      <div className="card-img-wrapper">
        <img src={course.image} alt={course.title} className="card-img" />
      </div>
      <div className="card-body">
        <h3 className="card-title font-semibold text-lg mb-2">{course.title}</h3>
        <p className="card-desc text-secondary text-sm mb-4">{course.description}</p>
        <Link to={`/courses/${course.id}`} className="btn btn-outline w-full text-center">
          Enroll Now
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
