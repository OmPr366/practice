import Head from "next/head";
import Image from "next/image";
import { Router } from "next/router";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { APP_NAME } from "../config";

// Router.onRouterChangeStart =  url => {
//   console.log("Hello");
// }


export default function Home() {


  const uploadData = async (e) => {
    e.preventDefault();
    const res = await fetch("/uploads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data:[{
        title: "title",
        htmlCode: "This is Code",
        reactCode: "This is React Code",
      }]}),
    });
    const data = await res.json();
    if(data.status===422 || data.status===421 || !data){
      console.log("Registration Failed");
    }else {
      alert("Uploaded Successfully");
    }
  };
  return (
    <>
    
    <div className="w-screen h-screen mt-96 flex justify-center items-center">
      
      <div className=" bg-yellow-100 p-4 py-6  ">
        <h1>{APP_NAME}</h1>
        <form method="POST" className="flex flex-col" onSubmit={uploadData}>
          <label for="w3review ">Title</label>

          <input type="text " className="my-4 bg-white p-3"></input>
          <label for="w3review">React</label>

          <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
          <label for="w3review">Html Code</label>

          <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
          <button
            className="bg-blue-500 p-2 px-4 rounded-2xl my-5 hover:bg-blue-400"
            onClick={uploadData}
          >
            Upload
          </button>
        </form>
      </div>
    </div>
    </>
  );
}
