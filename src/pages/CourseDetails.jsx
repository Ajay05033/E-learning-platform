import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/courses';

const CourseDetails = () => {
  const { id } = useParams();
  const course = coursesData.find(c => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="section-padding text-center animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
        <Link to="/courses" className="btn btn-primary">Back to Courses</Link>
      </div>
    );
  }

  return (
    <div className="course-details-page section-padding animate-fade-in">
      <div className="container">
        <div className="flex flex-col gap-4" style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <div className="course-img-wrapper" style={{flex: '1 1 400px'}}>
            <img 
              src={course.image} 
              alt={course.title} 
              style={{width: '100%', borderRadius: '16px', boxShadow: 'var(--glass-shadow)'}} 
            />
          </div>
          
          <div className="course-info glass" style={{flex: '1 1 400px', padding: '2rem'}}>
            <span className="text-primary font-bold mb-2 inline-block px-3 py-1 glass" style={{borderRadius: '20px', padding: '4px 12px', display: 'inline-block'}}>{course.level}</span>
            <h1 className="text-4xl font-bold mb-4 mt-2">{course.title}</h1>
            <p className="text-lg text-secondary mb-6">{course.description}</p>
            
            <div className="course-meta flex gap-4 mb-8">
              <div className="meta-item">
                <span className="font-bold block">Duration:</span>
                <span className="text-secondary">{course.duration}</span>
              </div>
              <div className="meta-item">
                <span className="font-bold block">Format:</span>
                <span className="text-secondary">100% Online</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="btn btn-primary w-full text-center">Enroll Now - Free</button>
            </div>
          </div>
        </div>

        <div className="course-syllabus mt-8 glass" style={{padding: '2rem'}}>
          <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
          <ul className="text-secondary" style={{listStylePosition: 'inside', lineHeight: '1.8'}}>
            <li>Understand the core concepts of {course.title.split(' ')[0]}.</li>
            <li>Hands-on experience with modern cloud architectures.</li>
            <li>Best practices for security and cost optimization.</li>
            <li>Real-world project implementation.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
