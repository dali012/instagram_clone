import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';

function Post({username, caption, imageUrl}) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar 
          className="post__avatar"
          alt="Agrebi Imen"
          src="https://scontent-mrs2-2.cdninstagram.com/v/t51.2885-19/s150x150/119048734_177531593835881_924485992188240456_n.jpg?_nc_ht=scontent-mrs2-2.cdninstagram.com&_nc_ohc=cc1jY1RTbHUAX_ZCoPq&oh=11b6d7b5108c0856eeaceb874c280503&oe=5F86D3A0"
        />
        <h3>{username}</h3>
      </div>

      <img className="post__image" src={imageUrl}
           alt=""  
      />

      <h4 className="post__text"><strong>{username}</strong> {caption}</h4>
      
    </div>
  );
}

export default Post;
