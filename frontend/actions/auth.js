import fetch from "isomorphic-fetch";
import { API } from "../config";
import cookie from "js-cookie";
import next from "next";

export const signupFunc = (user) => {
  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
export const signinFunc = (user) => {
  return fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// SignOut
export const SignOut = next => {
  console.log("cookies Deleted process");
  removeCookie("token");
  removeCookie("check");

  removeLocalStorage("user");

  fetch(`${API}/signout`,{
      method:'GET'
  })
  .then(response=>{
      console.log('Signout Success');
  })
  .catch(err=> console.log("Signout done"))
  next()

};

// Set cookies
export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
    });
  }
};

// Remove cookies
export const removeCookie = (key, value) => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

// Get cookies
export const getCookie = (key, value) => {
  if (process.browser) {
    return cookie.get(key);
  }
};

// Localstorage Set
export const setLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// Localstorage Remove
export const removeLocalStorage = (key) => {
  if (process.browser) localStorage.removeItem(key);
};

// Authenticate by pass
export const authenticate = (data, next) => {
  setCookie("token", data.token);
  setLocalStorage("user", data.user);
  next();
};

export const isAuth = () => {

  if (process.browser) {
  

    const cookieChecked = getCookie("token");
    if (cookieChecked) {
  
    
      
      if (localStorage.getItem("user")) {
        // console.log(JSON.parse(localStorage.getItem("user")));
        // return JSON.parse(localStorage.getItem("user"));
        return true;
      } else {
        console.log("loacal False");
        return false;
      }
    }else{
      console.log("token   False");
        return false;
    }
  }else{
    console.log("loacal False");

  }
};
