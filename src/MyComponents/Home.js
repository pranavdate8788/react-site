 import React from 'react'
 
 export default function Home() {
   return (
    <div className="flex justify-between items-center gap-9 p-3  text-lg">
          <i
            className="fa-regular fa-moon"
             ></i>

          <i className="fa-solid fa-circle-plus"></i>
          <i className="fa-solid fa-bell"></i>
          <div className=" flex justify-between items-center gap-2">
          <i className="fa-solid fa-user profile"></i>
          <span>TutorName</span></div>
        </div>
   )
 }
 