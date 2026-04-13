
import { useEffect,useState } from "react";
import API from "./api";

export default function ProductTable(){
  const [data,setData]=useState([]);

  useEffect(()=>{
    API.get("/api/products")
      .then(res=>setData(res.data));
  },[]);

  return(
    <table border="1">
      <tbody>
        {data.map((d,i)=>(<tr key={i}><td>{d}</td></tr>))}
      </tbody>
    </table>
  );
}
