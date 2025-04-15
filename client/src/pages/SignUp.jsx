import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Button from "../components/button/Button";
import { NavLink, useNavigate } from "react-router-dom";
import InputField from "../components/input/InputField"; // 👈 component tái sử dụng
import { toast, ToastContainer } from "react-toastify";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, doc, getDocs, query, setDoc, Timestamp, where } from "firebase/firestore";
import { auth, db } from "../firebase/config";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const regexEmail =
      // eslint-disable-next-line no-control-regex
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  const errorEmail = "Email invalid";
  const regexPassword = /^.{6,60}$/;
  const errorPassword = "Password should be between 6 and 60 characters";

  const handleCreateAndSignIn = async () => {
    if (!regexEmail.test(email)) {
        toast(errorEmail);
        return;
    }
    if (!regexPassword.test(password)) {
        toast(errorPassword);
        return;
    }
    if (password !== confirmPassword) {
        toast("Mật khẩu không khớp!");
        return;
    }
    try {
        console.log("Tài khoản chưa tồn tại, tiến hành tạo tài khoản mới");

        const q = query(collection(db, "users"), where("account", "==", email));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.size > 0) {
            toast.error("Tài khoản đã tồn tại");
        } else {
            console.log("Tài khoản chưa tồn tại aaaaaaaaaaa");

            // Tạo tài khoản mới
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            user.displayName = email;
            const id = user.uid;

            // Thêm thông tin người dùng vào Firestore
            await setDoc(doc(db, "users", id), {
                account: email,
                password: password,
                name: name,
                type: "account",
                image: "",
                createAt: Timestamp.fromDate(new Date()),
                updateAt: Timestamp.fromDate(new Date()),
            });

            // Đăng nhập ngay sau khi tạo tài khoản
            const signInCredential = await signInWithEmailAndPassword(auth, email, password);
            const signedInUser = signInCredential.user;
            toast.success("Đăng kí thành công!");

            setTimeout(() => {
                navigate("/");
            }, 5000);
        }
    } catch (error) {
        console.error("Error: ", error.message);
        toast.error(error.message); // Thông báo lỗi cho người dùng
    }
};

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-900">
    <ToastContainer></ToastContainer>
      <div className="w-full max-w-md p-8 bg-gray-800 shadow-lg rounded-xl">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://streamvid.jwsuperthemes.com/wp-content/uploads/2023/02/logo.svg"
            alt="Logo"
            className="w-auto h-12"
          />
        </div>

        {/* Đăng ký bằng Google */}
        {/* <button
          className="flex items-center justify-center w-full gap-3 py-2 mb-6 font-semibold text-black transition bg-white rounded-md shadow hover:shadow-lg"
          onClick={() => alert("Đăng ký bằng Google")}
        >
          <FcGoogle className="text-2xl" />
          Đăng ký với Google
        </button> */}

        {/* Divider */}
        {/* <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600" />
          </div>
          <div className="relative flex justify-center text-sm text-gray-400">
            <span className="px-2 bg-gray-800">hoặc</span>
          </div>
        </div> */}

        {/* Form đăng ký */}
        <form className="space-y-8">
          <InputField
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Họ và tên"
            id="name"
            name="name"
            type="text"
            placeholder="Nguyễn Văn A"
          />
          <InputField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
          />
          <InputField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Mật khẩu"
            id="password"
            name="password"
            type="password"
            placeholder="Nhập mật khẩu"
          />
          <InputField
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            label="Xác nhận mật khẩu"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Nhập lại mật khẩu"
          />

          <Button type="button" className="w-full h-[50px] mt-5" onClick={handleCreateAndSignIn}>Đăng ký</Button>
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
