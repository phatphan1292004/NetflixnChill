import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/banner-trailer/banner";
import TrendingMovie from "../module/home/TrendingMovie";
import NewRelease from "../module/home/NewReleaseMovie";
import TVShow from "../module/home/TVShow";
import TopArtist from "../module/home/TopArtist";
import MovieSection from "../module/home/MovieSection";
import specialSearch from "../shared/SpecialSearch";
import createAxiosInstance from "../axios/axiosInterceptor";
import getEndpoint from "../shared/getEndpoint";
import { BASE_URL } from "../shared/CommonURL";

const HomePage = () => {
  const [key, setKey] = React.useState("danh-sach");
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  const [phimBo, setPhimBo] = React.useState([]);
  const [phimLe, setPhimLe] = React.useState([]);
  const [tvShow, setTvShow] = React.useState([]);
  const [hoatHinh, setHoatHinh] = React.useState([]);
  useEffect(()=>{
    specialSearch.map((item)=>{
     const getMovies = async () => {
      const phimapi = createAxiosInstance(BASE_URL);
      const endpoint = getEndpoint({
        key,
        type_list: item
    });
      const data = await phimapi.get(endpoint);
      const movies = data.data.items;;
      console.log(movies);
      if (item === "phim-bo") {
        setPhimBo(movies);
      } else if (item === "phim-le") {
        setPhimLe(movies);
      } else if (item === "tv-show") {
        setTvShow(movies);
      } else if (item === "hoat-hinh") {
        setHoatHinh(movies);
      }
     }
     getMovies();

    })


}, []);
  return (
    <>
     
        <Banner></Banner>
        <MovieSection title={"TOP 10 Phim bộ"} movies={phimBo}></MovieSection>
        <MovieSection title={"TOP 10 Phim lẻ"} movies={phimLe}></MovieSection>
        <MovieSection title={"TOP 10 TV SHOWS"} movies={tvShow}></MovieSection>
        <MovieSection title={"TOP 10 Hoạt hình"} movies={hoatHinh}></MovieSection>
      
        <TopArtist
          imgUrl="https://images.unsplash.com/photo-1741850821836-a0228e561406?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
          nameArtist="Alayla Ocheco"
        ></TopArtist>
      
    </>
  );
};

export default HomePage;
