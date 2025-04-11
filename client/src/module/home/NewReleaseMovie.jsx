import MovieSection from "./MovieSection";

const newReleaseData = [
  {
    title: "John Wick 4",
    year: "2023",
    duration: "170 mins",
    rating: "4.5",
    image: "https://streamvid.jwsuperthemes.com/wp-content/uploads/2024/12/7I6VUdPj6tQECNHdviJkUHD2u89-scaled-630x400.jpg",
    height: "h-[350px]",
  },
  {
    title: "John Wick 4",
    year: "2023",
    duration: "170 mins",
    rating: "4.5",
    image: "https://streamvid.jwsuperthemes.com/wp-content/uploads/2024/12/7I6VUdPj6tQECNHdviJkUHD2u89-scaled-630x400.jpg",
    height: "h-[350px]",
  },
  {
    title: "John Wick 4",
    year: "2023",
    duration: "170 mins",
    rating: "4.5",
    image: "https://streamvid.jwsuperthemes.com/wp-content/uploads/2024/12/7I6VUdPj6tQECNHdviJkUHD2u89-scaled-630x400.jpg",
    height: "h-[350px]",
  },
  {
    title: "John Wick 4",
    year: "2023",
    duration: "170 mins",
    rating: "4.5",
    image: "https://streamvid.jwsuperthemes.com/wp-content/uploads/2024/12/7I6VUdPj6tQECNHdviJkUHD2u89-scaled-630x400.jpg",
    height: "h-[350px]",
  },
  {
    title: "John Wick 4",
    year: "2023",
    duration: "170 mins",
    rating: "4.5",
    image: "https://streamvid.jwsuperthemes.com/wp-content/uploads/2024/12/7I6VUdPj6tQECNHdviJkUHD2u89-scaled-630x400.jpg",
    height: "h-[350px]",
  },
  // ... add more movie data
];

const NewRelease = () => {
  return <MovieSection title="New Release" movies={newReleaseData} />;
};

export default NewRelease;
