import React from 'react';
import { render } from 'react-dom';

const ProfilePic = () => {
  return (
    <img src={'http://y.gtimg.cn/music/photo_new/T002R300x300M000001xpUdt2jEjWu.jpg?max_age=2592000'} />
  );
}

const ProfileLink = (props) => {
  return (
    <a href={'http://www.facebook.com/' + props.username}>
      {props.username}
    </a>
  );
}

const Avatar = (props) => {
  return (
    <div>
      <ProfilePic username={props.username} />
      <ProfileLink username={props.username} />
    </div>
  );
}

export default Avatar;