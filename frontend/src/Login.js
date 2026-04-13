
import { useState } from "react";
import API from "./api";

export default function Login() {
  const [form, setForm] = useState({ username:"", password:"" });
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/login", form);
      localStorage.setItem("token", res.data);
      setMsg("Success");
    } catch {
      setMsg("Error");
    }
  };

  return (
    <form onSubmit={submit}>
      <input onChange={e=>setForm({...form,username:e.target.value})}/>
      <input type="password" onChange={e=>setForm({...form,password:e.target.value})}/>
      <button>Login</button>
      <p>{msg}</p>
    </form>
  );
}
