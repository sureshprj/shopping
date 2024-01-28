import React, { useEffect } from 'react';
import { Outlet, useNavigate } from "react-router-dom";
function Layout() {
    const navigate = useNavigate();
    useEffect(()=>{
        const isLogin:boolean = sessionStorage.getItem("isLogin")?true:false;
        if(!isLogin){
            navigate("/login");
        }
    },[])
  return (
    <div className="App">
      <header className="App-header">
        I am the header
      </header>
      <section>
        <Outlet/>
      </section>
    </div>
  );
}

export default Layout;