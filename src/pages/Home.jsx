import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { coursesData } from '../data/courses';
import './Home.css';

const Home = () => {
  const featuredCourses = coursesData.slice(0, 3);

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section flex items-center justify-center">
        <div className="hero-bg-overlay"></div>
        <div className="container text-center relative z-10 glass hero-glass">
          <h1 className="text-4xl font-bold mb-4">Learn Cloud Computing with AWS</h1>
          <p className="text-xl text-secondary mb-8">
            Master the cloud, DevOps, and serverless architectures. Build your scalable future today.
          </p>
          <div className="flex justify-center gap-2">
            <Link to="/courses" className="btn btn-primary">Get Started</Link>
            <Link to="/about" className="btn btn-outline">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Featured AWS Courses</h2>
            <p className="text-secondary">Start your journey with our top-rated programs.</p>
          </div>
          <div className="courses-grid">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/courses" className="btn btn-outline">View All Courses</Link>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding glass mb-8 mx-4" style={{borderRadius: '24px'}}>
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">Why AWS & DevOps?</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto mb-8">
            Cloud platforms like AWS, combined with Serverless Architecture and DevOps CI/CD pipelines, are the backbone of modern web applications. Learning these skills prepares you for top-tier software engineering roles.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Student Testimonials</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card glass">
              <p className="mb-4 text-secondary">"The AWS Lambda Serverless course completely changed how I build applications. Highly recommended!"</p>
              <h4 className="font-bold">- Sarah J., Software Engineer</h4>
            </div>
            <div className="testimonial-card glass">
              <p className="mb-4 text-secondary">"Great platform! The DevOps CI/CD pipeline tutorial was exactly what I needed for my resume project."</p>
              <h4 className="font-bold">- Mike T., Student</h4>
            </div>
            <div className="testimonial-card glass">
              <p className="mb-4 text-secondary">"Clear, concise, and incredibly practical. Best cloud computing courses I've taken."</p>
              <h4 className="font-bold">- Emily R., Cloud Architect</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
