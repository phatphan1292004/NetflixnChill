import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/banner-trailer/banner";
import TrendingMovie from "../module/home/TrendingMovie";
import NewRelease from "../module/home/NewReleaseMovie";
import TVShow from "../module/home/TVShow";
import TopArtist from "../module/home/TopArtist";

const HomePage = () => {
  return (
    <>
     
        <Banner></Banner>
        <TrendingMovie></TrendingMovie>
        <NewRelease></NewRelease>
        <NewRelease></NewRelease>
        <TVShow></TVShow>
        <TopArtist
          imgUrl="https://images.unsplash.com/photo-1741850821836-a0228e561406?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
          nameArtist="Alayla Ocheco"
        ></TopArtist>
      
    </>
  );
};

export default HomePage;
