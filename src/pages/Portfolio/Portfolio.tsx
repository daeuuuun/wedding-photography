import React from 'react';
import PageHero from '../../components/PageHero/PageHero';
import PortfolioHighlight from '../../components/Portfolio/PortfolioHighlight/PortfolioHighlight';
import PortfolioCallout from '../../components/Portfolio/PortfolioCallout/PortfolioCallout';
import PortfolioPerfect from '../../components/Portfolio/PortfolioPerfect/PortfolioPerfect';

function Portfolio() {
  return (
    <>
      <PageHero />
      <PortfolioHighlight />
      <PortfolioCallout />
      <PortfolioPerfect />
    </>
  );
}

export default Portfolio;
