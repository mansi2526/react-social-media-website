import React from 'react';
import "./ProfileLeft.css";
import FollowersCard from "../FollowersCard/FollowersCard";
import LogoSearch from "../LogoSearch/LogoSearch";
import InfoCard from "../InfoCard/InfoCard";

const ProfileLeft = () => {
  return (
    <div className='profileLeft postSide'>
        <LogoSearch/>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileLeft