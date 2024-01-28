import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from "./layout/layout"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './login/Login';
import Home from './shopping/home/home';

 function ProfileWrapper(){
  const onRender = (id, phase, actualDuration, baseDuration, startTime, commitTime)=>{
    console.log("id, phase, actualDuration, baseDuration, startTime, commitTime")
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime)
  }
  return <Profiler id="abc" onRender={onRender}>
     <Login></Login>
  </Profiler>
}



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/login",
    element: <ProfileWrapper></ProfileWrapper>
  },
]);



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
