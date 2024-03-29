
import React from 'react';
import '../assets/scss/HomePage/_homePage.scss';
import BlogList from '../components/BlogList/BlogList';

const HomePage = () => {
  return (
    <div className="hompage_wrapper">
      <BlogList />
    </div>
  )
}

export default HomePage;