import axios from 'axios';
import { useState, useEffect } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';


function Feed() {
const [posts, setPosts] = useState([]);

useEffect(() => {
  const fetchPosts = async () => {
    //its a really strong tool to make a request, res because after the request of get its going to give response. 
  const res = await axios.get("posts/timeline/641454c77c2a15dcb7fba1f3");
    setPosts(res.data);
  };
  fetchPosts();
}, []);
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        {posts.map(p => (
          <Post key={p.id} post={p} /> //and for each post im going to retuen something, what is that? just a post.and inside this post we will send this single post. we should indicate key because we are appling map. bacuse all the data has id.
        ))}        
      </div>
    </div>
  )
}

export default Feed
