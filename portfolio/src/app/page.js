import React from 'react';
import './page.css';
// Importing all the sections 
import Welcome from './components/Welcome';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
// Importing Nav and Footer
import NavBar from './builders/NavBar';
import Footer from './builders/Footer';

export default function Home() {
  // This handles the scroll of the page when user clicks on nav
  const handleNavigationClick = (event, targetId) => {
    event.preventDefault();
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <main>
      <div>
        <NavBar />
        <section id='weclome'>
          <Welcome />
        </section>
        <section id='about'>
          <AboutMe />
        </section>
        <section id='resume'>
          <Resume />
        </section>
        <section id='projects'>
          <Projects />
        </section>
        <section id='contact'>
          <Contact />
        </section>
        <Footer />
      </div>
    </main>
  )
}
