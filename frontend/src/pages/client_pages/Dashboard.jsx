import React, { useEffect, useState } from 'react';
import AddPost from '../../components/client_components/AddPost';
import Post from '../../components/client_components/Post';
import Axios from 'axios';

const Dashboard = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:5001/api/v1/post/getPost')
      .then(response => {
        console.log(response.data)
        setPost(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <AddPost />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            {post.flat().map(post => (
              <div key={post._id} className='border p-3 shadow bg-white rounded-3 mb-5'>
                <Post
                  src={post.image}
                  name={post.name}
                  thoughts={post.thoughts}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard