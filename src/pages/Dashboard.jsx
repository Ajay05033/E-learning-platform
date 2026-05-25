import React from 'react';
import Sidebar from '../components/Sidebar';
import CourseCard from '../components/CourseCard';
import { coursesData } from '../data/courses';
import './Dashboard.css';

const Dashboard = () => {
  const enrolledCourses = coursesData.slice(0, 2);

  return (
    <div className="dashboard-page section-padding animate-fade-in container">
      <div className="dashboard-layout">
        <div className="dashboard-sidebar-wrapper">
          <Sidebar />
        </div>
        
        <div className="dashboard-content">
          <h1 className="text-3xl font-bold mb-6">Welcome back, Student!</h1>
          
          <div className="dashboard-stats flex gap-4 mb-8">
            <div className="stat-card glass flex-1">
              <h3 className="text-xl font-bold text-primary">2</h3>
              <p className="text-secondary">Enrolled Courses</p>
            </div>
            <div className="stat-card glass flex-1">
              <h3 className="text-xl font-bold text-primary">15</h3>
              <p className="text-secondary">Hours Learned</p>
            </div>
            <div className="stat-card glass flex-1">
              <h3 className="text-xl font-bold text-primary">1</h3>
              <p className="text-secondary">Certificates</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">In Progress</h2>
          <div className="progress-section mb-8 glass" style={{padding: '1.5rem'}}>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="font-semibold">{enrolledCourses[0].title}</span>
                <span className="text-primary font-bold">65%</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{width: '65%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold">{enrolledCourses[1].title}</span>
                <span className="text-primary font-bold">20%</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{width: '20%'}}></div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Your Courses</h2>
          <div className="courses-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem'}}>
            {enrolledCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
