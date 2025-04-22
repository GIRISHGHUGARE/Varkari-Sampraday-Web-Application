import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const AddPosts = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [name, setName] = useState("");
  const [thoughts, setThoughts] = useState("");
  const [image, setImage] = useState(null);
  const [imageBase64, setImageBase64] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  // Use useEffect to set the name from local storage
  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  const convertToBase64 = (imageFile) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(imageFile);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    convertToBase64(imageFile).then((base64String) => {
      setImageBase64(base64String);
      setImage(imageFile);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    Axios.post('http://localhost:5001/api/v1/post/addPost', {
      name: name,
      thoughts: thoughts,
      image: imageBase64,
    })
      .then((response) => {
        setResponseMessage(response.data.message);
        setThoughts("");
        setImage(null);
        setImageBase64("");
      })
      .catch((error) => {
        setResponseMessage(error.message);
      });
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-lg-6 border p-3 shadow bg-white rounded-3 mb-5">
            <form onSubmit={handleSubmit} noValidate>
              <div className="row-md-4">
                <label className="fs-5">Share your thoughts</label>
              </div>
              <div className="row-md-4 mt-2">
                <label htmlFor="thoughts" className="form-label">Caption</label>
                <input
                  className="form-control"
                  type="text"
                  name="thoughts"
                  value={thoughts}
                  onChange={(e) => setThoughts(e.target.value)}
                />
              </div>
              <div className="row-md-4 mt-2">
                <label htmlFor="image" className="form-label">Add Image</label>
                <input
                  className='form-control'
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                />
              </div>
              <div className="col-12 mt-3">
                <button className="btn btn-custom-white" type="submit">Post</button>
              </div>
              {responseMessage && (
                <div className="alert alert-success mt-3">
                  {responseMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPosts;
