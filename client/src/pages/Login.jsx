import React from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import Button from "../components/button/Button";
import InputField from "../components/input/InputField"; 

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://streamvid.jwsuperthemes.com/wp-content/uploads/2023/02/logo.svg"
            alt="Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Google login */}
        <button
          className="w-full flex items-center justify-center gap-3 bg-white text-black font-semibold py-2 rounded-md shadow hover:shadow-lg transition mb-6"
          onClick={() => alert("Đăng nhập bằng Google")}
        >
          <FcGoogle className="text-2xl" />
          Đăng nhập với Google
        </button>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600" />
          </div>
          <div className="relative flex justify-center text-sm text-gray-400">
            <span className="bg-gray-800 px-2">or</span>
          </div>
        </div>

        {/* Form login */}
        <form className="space-y-8">
          <InputField
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
          />

          <InputField
            label="Mật khẩu"
            id="password"
            name="password"
            type="password"
            placeholder="Nhập mật khẩu"
          />

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-400">
              <input type="checkbox" className="mr-2 accent-blue-500" />
              Nhớ đăng nhập
            </label>
            <a href="#" className="text-sm text-primary hover:underline">
              Quên mật khẩu?
            </a>
          </div>

          <Button className="w-full h-[50px] mt-5">Sign In</Button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-400">
          Bạn chưa có tài khoản?{" "}
          <NavLink to="/sign-up" className="text-primary hover:underline">
            Đăng ký
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
