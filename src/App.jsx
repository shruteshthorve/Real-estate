
import React from 'react';

import Hero from './components/Hero';
import RegisterPage from './components/RegisterPage';
import RecommendedSection from './components/RecommendedSection';
import Services from './components/Services';
import LocationCarousel from './components/LocationCarousel';
import Testimonials from './components/Testimonials';
import BlogPosts from './components/BlogPosts';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

//import Register from './components/Register'


function App() {
  

  return (
   <>
   <Navbar/>
   <Hero/>
   <RegisterPage/>
   <RecommendedSection/>
   <Services/>
   <LocationCarousel/>
   <Testimonials/>
   <BlogPosts/>
   <Footer/>
   </>

  )
}

export default App
