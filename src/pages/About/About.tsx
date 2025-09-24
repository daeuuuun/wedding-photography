import React from 'react';
import PageHero from '../../components/PageHero/PageHero';
import AboutStory from '../../components/About/AboutStory/AboutStory';
import AboutFacts from '../../components/About/AboutFacts/AboutFacts';
import AboutLens from '../../components/About/AboutLens/AboutLens';

function About() {
  return (
    <>
      <PageHero />
      <AboutStory />
      <AboutFacts />
      <AboutLens />
    </>
  );
}

export default About;
