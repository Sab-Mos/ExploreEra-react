import React from "react";

import Showcase from "../components/Showcase";
import Services from "../components/Services";
import VideoComponent from "../components/VideoComponent";
import Blogs from "../components/Blogs";
import BookATrip from "../components/BookATrip";
import TourOffers from "../components/TourOffers";

const Home = () => {
  return (
    <>
      <Showcase />
      <Services />
      <VideoComponent />
      <TourOffers />
      <Blogs />
      <BookATrip />
    </>
  );
};

export default Home;
