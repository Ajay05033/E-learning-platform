import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';
import { coursesData } from '../data/courses';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = coursesData.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="courses-page section-padding animate-fade-in">
      <div className="container">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">All Courses</h1>
          <p className="text-secondary mb-8">Explore our comprehensive library of cloud computing courses.</p>
          
          <div className="search-bar max-w-2xl mx-auto glass" style={{padding: '0.5rem', borderRadius: '12px'}}>
            <input 
              type="text" 
              placeholder="Search courses (e.g. AWS, DevOps...)" 
              className="input-field" 
              style={{border: 'none', background: 'transparent'}}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="courses-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem'}}>
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <div className="text-center w-full" style={{gridColumn: '1 / -1'}}>
              <p className="text-secondary text-xl">No courses found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
