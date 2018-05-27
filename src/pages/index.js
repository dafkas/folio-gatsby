import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';

import Contact from '../components/Contact';
import Footer from '../components/Footer';

const IndexPage = () => (
  <div>
    <Header />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage
