<<<<<<< HEAD
import { useState } from 'react'


import './App.css'
import ProductDetail from './assets/components/ProductDetail'
/*import Card from './assets/components/Card'
import AddProperty from './assets/components/AddProperty'
import Login from './assets/components/Login'
import Error from './assets/components/Error'
*/

=======
import React from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Card from './assets/components/Card';
import Hero from './components/Hero';
import RegisterPage from './components/RegisterPage';
import RecommendedSection from './components/RecommendedSection';
import Services from './components/Services';
import LocationCarousel from './components/LocationCarousel';
import Testimonials from './components/Testimonials';
import BlogPosts from './components/BlogPosts';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
>>>>>>> eaa12cd9cf1850c89ce11b9e9be385b87ec70044

function App() {
  return (
    <>
<<<<<<< HEAD
     {/*<Card/>
      <AddProperty/>
      <Login/>
        <Error/>
        <AddProperty/>
    
      <Card/>*/}
      <ProductDetail/>
      
=======
      <Navbar />
      <Hero />
      <RegisterPage />
      <RecommendedSection />
      <Services />
      <LocationCarousel />
      <Testimonials />
      <BlogPosts />
      <Footer />
      <Card />
>>>>>>> eaa12cd9cf1850c89ce11b9e9be385b87ec70044
    </>
  );
}

export default App;
