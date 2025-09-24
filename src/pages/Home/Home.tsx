import React from 'react';
import HomeBanner from '../../components/Home/HomeBanner/HomeBanner';
import HomeAward from '../../components/Home/HomeAward/HomeAward';
import HomeAbout from '../../components/Home/HomeAbout/HomeAbout';
import HomeService from '../../components/Home/HomeService/HomeService';
import HomeInvitation from '../../components/Home/HomeInvitation/HomeInvitation';
import HomePortpolio from '../../components/Home/HomePortpolio/HomePortpolio';
import HomeTestimonials from '../../components/Home/HomeTestimonials/HomeTestimonials';
import HomeStatistics from '../../components/Home/HomeStatistics/HomeStatistics';
import HomeContact from '../../components/Home/HomeContact/HomeContact';

function Home() {
  return (
    <>
      <HomeBanner />
      <HomeAward />
      <HomeAbout />
      <HomeService />
      <HomeInvitation />
      <HomePortpolio />
      <HomeTestimonials />
      <HomeStatistics />
      <HomeContact />
    </>
  );
}

export default Home;
