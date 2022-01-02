import React, { useState } from 'react'
import { APP_NAME } from '../config';
import fetch from "isomorphic-fetch"
import { API } from '../config';
import { signupFunc } from '../actions/auth';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';

const signup = () => {
    const [inputVal, setInputVal] = useState({
        name:"Om Prakash",
        email:"ompfdgp@gmail.com",
        password:"1233455",
        error:"",
        loading:false,
    })
    
    const uploadData = async (e) => {
        e.preventDefault();
        setInputVal({...inputVal,loading:true,error:false})

        const user = {name:inputVal.name, email:inputVal.email , password : inputVal.password}
        console.log("here ");
        console.log(user);


        signupFunc(user).then((data)=>{
            if(data.error){
        console.log(data.error);
                setInputVal({...inputVal,error:data.error})
            }else{

                //  If Signup SuccessFully 
                // Save User token to cookie 
                // Save user info to localstorage
                //  Authenticate .user
                console.log("Okay Updated");
            }
        })
          

      };
    return (
      <>
        <div className=" bg-yellow-100 p-4 py-6  ">
        <h1>{APP_NAME}</h1>
        <form method="POST" className="flex flex-col" onSubmit={uploadData}>
          <label for="Name ">Title</label>
          <input type="text " className="my-4 bg-white p-3" value={inputVal.name}/>
          
          <label for="w3review">Email</label>
          <input type="email " className="my-4 bg-white p-3" value={inputVal.email}></input>

          <label for="w3review">Password</label>
          <input type="password" className="my-4 bg-white p-3" value={inputVal.password}></input>
          

          
          <button
            className="bg-blue-500 p-2 px-4 rounded-2xl my-5 hover:bg-blue-400"
            onClick={uploadData}
          >
            Upload
          </button>
        </form>
      </div>  
      </>
    )
}

export default signup
