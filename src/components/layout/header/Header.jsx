import React, { useEffect, useState } from "react";
import Input from "../../input/Input";
import Button from "../../button/Button";
import Category from "../../category/Category";

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const menuItems = ["Home", "Features", "Pages", "Blogs"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`py-5 fixed z-30 top-0 left-0 w-full transition-all duration-300 ${
        isScroll
          ? "bg-[#090B24] backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="px-20 flex justify-between items-center bg-transparent">
        <div className="flex gap-5 items-center">
          <img
            src="https://streamvid.jwsuperthemes.com/wp-content/uploads/2023/02/logo.svg"
            alt=""
            className="mr-10"
          />

          <div className="flex gap-10 items-center text-blue-500">
            {menuItems.map((item) =>
              item === "Features" ? (
                renderFeaturesMenu()
              ) : (
                // Các item khác
                <span
                  key={item}
                  className="text-white font-semibold cursor-pointer hover:text-primary transition"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
        <div className="flex gap-4">
          <Input inputClass="transparent" placeholder="Search..."></Input>
          <Button to="/login">Login</Button>
        </div>
      </div>
    </header>
  );
};

const renderFeaturesMenu = () => (
  <div className="relative group" key="Features">
    <span className="text-white font-semibold cursor-pointer hover:text-primary transition">
      Features
    </span>
    <div
      className="absolute top-full left-0 w-[1200px] mt-4 bg-white text-black p-6 rounded-lg shadow-lg
        opacity-0 group-hover:opacity-100 invisible group-hover:visible
        translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-50"
    >
      <div className="grid grid-cols-6 gap-6">
        <Category
          heading="POPULAR"
          items={[
            "Featured",
            "Most Popular",
            "New Releases",
            "Recommend",
            "Trending Now",
          ]}
        ></Category>

        <Category
          heading="GENRES"
          items={[
            "Featured",
            "Most Popular",
            "New Releases",
            "Recommend",
            "Trending Now",
          ]}
        ></Category>
        <Category
          heading="COLLECTION"
          items={[
            "Featured",
            "Most Popular",
            "New Releases",
            "Recommend",
            "Trending Now",
          ]}
        ></Category>
        {/* Cột 4: chiếm 3 cột */}
        <div className="col-span-3">
          <h4 className="font-bold text-lg mb-2 text-primary">
            MOVIES OF THE DAY
          </h4>
          <div className="flex space-x-2 overflow-x-auto">
            {[
              { title: "John Wick 4", img: "https://i.imgur.com/YOJ6Flt.jpg" },
              { title: "Spider Man", img: "https://i.imgur.com/nNxN9vF.jpg" },
              { title: "White House", img: "https://i.imgur.com/HsBGJqe.jpg" },
            ].map((movie) => (
              <div className="w-28" key={movie.title}>
                <img
                  src={movie.img}
                  alt={movie.title}
                  className="rounded mb-1"
                />
                <p className="text-xs text-center">{movie.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
