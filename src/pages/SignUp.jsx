import React from "react";
import { FcGoogle } from "react-icons/fc";
import Button from "../components/button/Button";
import { NavLink } from "react-router-dom";
import InputField from "../components/input/InputField"; // 👈 component tái sử dụng

const SignUp = () => {
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

        {/* Đăng ký bằng Google */}
        <button
          className="w-full flex items-center justify-center gap-3 bg-white text-black font-semibold py-2 rounded-md shadow hover:shadow-lg transition mb-6"
          onClick={() => alert("Đăng ký bằng Google")}
        >
          <FcGoogle className="text-2xl" />
          Đăng ký với Google
        </button>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600" />
          </div>
          <div className="relative flex justify-center text-sm text-gray-400">
            <span className="bg-gray-800 px-2">hoặc</span>
          </div>
        </div>

        {/* Form đăng ký */}
        <form className="space-y-8">
          <InputField
            label="Họ và tên"
            id="name"
            name="name"
            type="text"
            placeholder="Nguyễn Văn A"
          />
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
          <InputField
            label="Xác nhận mật khẩu"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Nhập lại mật khẩu"
          />

          <Button className="w-full h-[50px] mt-5">Đăng ký</Button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-400">
          Đã có tài khoản?{" "}
          <NavLink to="/login" className="text-primary hover:underline">
            Đăng nhập
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
