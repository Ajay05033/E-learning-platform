import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser, FaBookOpen, FaChartLine, FaHistory, FaCog, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar glass">
      <div className="profile-summary flex-col items-center mb-8">
        <div className="avatar mb-2">
          <img src="https://ui-avatars.com/api/?name=Student&background=random" alt="Profile" />
        </div>
        <h3 className="font-semibold text-lg">Cloud Student</h3>
        <p className="text-secondary text-sm">Free Tier</p>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/dashboard" end className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <FaUser /> Profile
        </NavLink>
        <NavLink to="/dashboard/enrolled" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <FaBookOpen /> Enrolled Courses
        </NavLink>
        <NavLink to="/dashboard/progress" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <FaChartLine /> Progress
        </NavLink>
        <NavLink to="/dashboard/activities" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <FaHistory /> Recent Activities
        </NavLink>
        <div className="nav-divider"></div>
        <NavLink to="/dashboard/settings" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <FaCog /> Settings
        </NavLink>
        <button className="nav-item text-danger">
          <FaSignOutAlt /> Logout
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
