import BackgroundWithOverlay from "../module/details/BackgroundWithOverlay";
import Button from "../components/button/Button";
import Layout from "../components/layout/Layout";
import React from "react";
import PosterMovie from "../module/details/PosterMovie";
import MovieInfo from "../module/details/MovieInfo";
import RecommendList from "../module/details/RecommendList";
import ReviewForm from "../module/details/ReviewForm";

const MovieDetail = () => {
  return (
    <Layout>
      <div className="relative w-full mt-[90px]">
        <BackgroundWithOverlay
          height="600px"
          imageUrl="https://images.unsplash.com/photo-1743062545929-0135b193c968?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
        />
  
        <PosterMovie
          leftOffset="400px"
          posterUrl="https://plus.unsplash.com/premium_photo-1742945845688-7c11c2f6d33d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
        />
      </div>

      <div className="mt-[250px] text-white container">
        <div className="ml-[70px]">
          <MovieInfo></MovieInfo>
          <div className="mt-20">
            <RecommendList
              items={[
                {
                  imageUrl:
                    "https://images.unsplash.com/photo-1743024282286-5bfecf55a834?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                  title: "Wide Girl",
                },
              ]}
            />

            <div className="mb-4 mt-20">
              <ReviewForm></ReviewForm>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MovieDetail;
