
import API from "./api";
import { useState } from "react";

export default function Register() {
  const [msg,setMsg]=useState("");

  const submit=async(e)=>{
    e.preventDefault();
    const data={
      username:e.target.username.value,
      password:e.target.password.value,
      role:"USER"
    };
    try{
      await API.post("/register",data);
      setMsg("Registered");
    }catch{
      setMsg("Error");
    }
  };

  return(
    <form onSubmit={submit}>
      <input name="username"/>
      <input name="password" type="password"/>
      <button>Register</button>
      <p>{msg}</p>
    </form>
  );
}
