import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AllWorks from '../components/AllWorks';

const AllWorkPage = () => {
  return (

    <>
      <Navbar />
      <AllWorks />
      <Contact />
      <Footer />
    </>
  );
};

export default AllWorkPage;