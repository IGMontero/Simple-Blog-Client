import React from 'react';

import TopPostsItem from './top_posts_item';

export default function(){
  return(
    <div className="col-4 top-list-container">
      <h2>Weekly top rated posts:</h2>
      <ul className="top-posts-list">
        <TopPostsItem number={1} />
        <TopPostsItem number={2} />
        <TopPostsItem number={3} />
        <TopPostsItem number={4} />
      </ul>
    </div>
  )
}
