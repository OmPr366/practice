import React, { useEffect, useState } from "react";
import { APP_NAME } from "../config";
import { signinFunc, authenticate, SignOut, isAuth } from "../actions/auth";
import cookie from "js-cookie";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";


const signup = () => {
  const [inputVal, setInputVal] = useState({
    email: "omi@gmai.com",
    password: "ffffff",
    error: "",
    loading: false,
  });

  const login = async (e) => {
    e.preventDefault();
    setInputVal({ ...inputVal, loading: true, error: false });

    const user = { email: inputVal.email, password: inputVal.password };
    console.log("here ");
    console.log(user);

    signinFunc(user).then((data) => {
      if (data.error) {
        console.log(data.error);
        setInputVal({ ...inputVal, error: data.error });
      } else {
        //  If Signup SuccessFully
        // Save User token to cookie
        // Save user info to localstorage
        //  Authenticate .user

        authenticate(data, (mydata) => {
          console.log(mydata);
        });
        console.log("Okay Updated");
      }
    });
  };

  const logout = () => {
    SignOut(() => {
      console.log("okay done");
    });
    
  };

  const [isLogin, setIsLogin] = useState(1);

  useEffect(() => {

    if (isAuth()) {
      setIsLogin(1);
    } else {
      setIsLogin(0);
    }
    // setIsLogin(isAuth())

    cookie.set("check", "This is ceheckinbg");
  });

  


  
  // const cookieDelete = ()=>{
  //   cookie.re,ove(key, value, {
  //     expires: 1,
  //   });
  // }

  return (
    <>
    <div className=" bg-yellow-100 p-4 py-6  ">
      <h1>{APP_NAME}</h1>
      <form method="POST" className="flex flex-col" onSubmit={login}>
        <label for="Name ">Title</label>

        <label for="w3review">Email</label>
        <input
          type="email "
          className="my-4 bg-white p-3"
          value={inputVal.email}
        ></input>

        <label for="w3review">Password</label>
        <input
          type="password"
          className="my-4 bg-white p-3"
          value={inputVal.password}
        ></input>

        <button
          className="bg-blue-500 p-2 px-4 rounded-2xl my-5 hover:bg-blue-400"
          onClick={login}
        >
          {isLogin ? "Logged in  " : "Upload"} 
        </button>
        

      </form>
      <button className=" mt-3 px-3 py-2 bg-blue-100" onClick={logout}>
          LOG OUT 
        </button>
        
    </div>
    </>
  );
};

export default signup;
