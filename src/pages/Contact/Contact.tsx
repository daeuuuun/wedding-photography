import React from 'react';
import PageHero from '../../components/PageHero/PageHero';
import ContactSubmit from '../../components/Contact/ContactSubmit/ContactSubmit';
import ContactEnquire from '../../components/Contact/ContactEnquire/ContactEnquire';

function Contact() {
  return (
    <>
      <PageHero />
      <ContactSubmit />
      <ContactEnquire />
    </>
  );
}

export default Contact;
