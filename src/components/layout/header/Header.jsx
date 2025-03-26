import React from "react";
import { Input } from "../../input";
import Button from "../../button/Button";

const Header = () => {
  const menuItems = ["Home", "Features", "Pages", "Blogs"];

  return (
    <header className="py-5 fixed z-20 top-0 left-0 w-full">
      <div className="px-20 flex justify-between items-center bg-transparent">
        <div className="flex gap-5 items-center">
          <img
            src="https://streamvid.jwsuperthemes.com/wp-content/uploads/2023/02/logo.svg"
            alt=""
            className="mr-10"
          />

          <div className="flex gap-10 items-center text-blue-500">
            {menuItems.map((item) => (
              <span
                key={item}
                className="text-white font-semibold cursor-pointer hover:text-primary transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <Input inputClass="transparent" placeholder="Search..."></Input>
          <Button>Login</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
