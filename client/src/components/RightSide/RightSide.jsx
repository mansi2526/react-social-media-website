import React, {useState} from 'react';
import "./RightSide.css";
import Home from "../../img/home.png";
import Bell from "../../img/bell.png";
import Comment from "../../img/comment1.png";
import {UilSetting} from "@iconscout/react-unicons";
import TrendCard from '../TrendCard/TrendCard';
import ShareModal from '../ShareModal/ShareModal';

const RightSide = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className='rightSide'>
        <div className="navIcons">
            <img src={Home} alt="" />
            <UilSetting/>
            <img src={Bell} alt="" />
            <img src={Comment} alt="" />
        </div>

        <TrendCard/>

        <button className='button r-button' onClick={()=>setModalOpen(true)}>
            share
        </button>
          <ShareModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          />
    </div>
  )
}

export default RightSide