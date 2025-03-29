import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/banner-trailer/banner";
import TrendingMovie from "../module/home/TrendingMovie";
import NewRelease from "../module/home/NewReleaseMovie";
import TVShow from "../module/home/TVShow";


const HomePage = () => {
  return (
    <>
      <Layout>
        <Banner></Banner>
        <TrendingMovie></TrendingMovie>
        <NewRelease></NewRelease>
        <TVShow></TVShow>
      </Layout>
    </>
  );
};

export default HomePage;
