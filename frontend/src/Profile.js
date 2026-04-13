
import { useEffect,useState } from "react";
import API from "./api";

export default function Profile(){
  const [data,setData]=useState("");

  useEffect(()=>{
    API.get("/api/profile")
      .then(res=>setData(res.data))
      .catch(()=>window.location="/login");
  },[]);

  return <h2>{data}</h2>;
}
