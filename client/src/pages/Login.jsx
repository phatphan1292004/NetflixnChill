import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import InputField from "../components/input/InputField"; 
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  auth,
  db,
  facebookProvider,
  googleProvider,
} from "../firebase/config";
import { toast, ToastContainer } from "react-toastify";
import { collection, doc, getDocs, query, setDoc, Timestamp, where } from "firebase/firestore";
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const regexEmail =
        // eslint-disable-next-line no-control-regex
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

        const errorEmail = "Email invalid";
        const regexPassword = /^.{6,60}$/;
        const errorPassword = "Password should be between 6 and 60 characters";
        const handleSignInWithAccount = async () => {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    toast.success("Đăng nhập thành công!");
                    // ...
                })
                .catch((errorSignIn) => {
                    const errorSignInCode = errorSignIn.code;
                    const errorSignInMessage = errorSignIn.message;
                    toast.error(errorSignInCode + ": " + errorSignInMessage);
                });
        };
        const handleSignInWithGoogle = async () => {
          try {
              const result = await signInWithPopup(auth, googleProvider);
              const user = result.user;
              console.log(result);
              const q = query(collection(db, "users"), where("account", "==", user.email));
                    const querySnapshot = await getDocs(q);
                    if (querySnapshot.size > 0) {
                      toast.success("Đăng nhập thành công!");
                      setTimeout(()=>{
                        navigate("/");
                      },5000)
                    } else{ 
                         await setDoc(doc(db, "users", user.uid), {
                          account: user.email,
                          name: user.displayName,
                          type: "google",
                          image: "",
                          createAt: Timestamp.fromDate(new Date()),
                          updateAt: Timestamp.fromDate(new Date()),
                        })
                        toast.success("Đăng nhập thành công!");
                        setTimeout(()=>{
                           navigate("/");
                          },5000)                         
                    }
              
              
             
          } catch (error) {
              console.error("Error signing in with Google:", error.message);
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

        {/* Google login */}
        <button
          className="flex items-center justify-center w-full gap-3 py-2 mb-6 font-semibold text-black transition bg-white rounded-md shadow hover:shadow-lg"
          onClick={() => handleSignInWithGoogle()}
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
            <span className="px-2 bg-gray-800">or</span>
          </div>
        </div>

        {/* Form login */}
        <form className="space-y-8">
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

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-400">
              <input type="checkbox" className="mr-2 accent-blue-500" />
              Nhớ đăng nhập
            </label>
            <a href="#" className="text-sm text-primary hover:underline">
              Quên mật khẩu?
            </a>
          </div>

          <Button className="w-full h-[50px] mt-5" type="button" onClick={handleSignInWithAccount}>Sign In</Button>
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
