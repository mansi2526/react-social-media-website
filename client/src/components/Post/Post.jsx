import React from 'react';
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/heart.png";
import Notlike from "../../img/dislike.png";

const Post = ({data}) => {
  return (
    <div className='post'>
        <img src={data.img} alt=""/>

        <div className='postReact'>
          <img src={data.liked ? Heart : Notlike} alt="" />
          <img src={Comment} alt="" />
          <img src={Share} alt="" />
          {/* <img src="" alt="" /> */}
        </div>

        <span style={{color: "var(--gray)", fontSize: "12px"}}>{data.likes} likes</span>
        <div className='detail'>
          <span><b>{data.name}</b></span>
          <span>{data.desc}</span>
        </div>
    </div>
  )
}

export default Post