import React from 'react';
import { Outlet } from 'react-router-dom';


const Profile = () => {
    console.log("Profile Rendered")
  return (
    <>
        <Outlet/>
    </>
  )
}

export default Profile
