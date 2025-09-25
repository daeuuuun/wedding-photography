import React from 'react';
import PageHero from '../../components/PageHero/PageHero';
import ServicesProduct from '../../components/Services/ServicesProduct/ServicesProduct';
import ServicesCallout from '../../components/Services/ServicesCallout/ServicesCallout';
import ServicesProcess from '../../components/Services/ServicesProcess/ServicesProcess';
import ServicesFAQ from '../../components/Services/ServicesFAQ/ServicesFAQ';

function Services() {
  return (
    <>
      <PageHero />
      <ServicesProduct />
      <ServicesCallout />
      <ServicesProcess />
      <ServicesFAQ />
    </>
  );
}

export default Services;
