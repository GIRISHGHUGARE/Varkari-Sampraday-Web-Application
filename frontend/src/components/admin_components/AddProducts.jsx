import React, { useState } from 'react';
import Axios from 'axios';

const AddProduts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imageBase64, setImageBase64] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:5001/api/v1/admin/addProduct', {
      p_name: name,
      p_price: price,
      p_description: description,
      p_image: imageBase64,
    })
    .then((response) => {
      setResponseMessage(response.data.message);
      setName("");
      setPrice(0);
      setDescription("");
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
          <div className="col-md-4 border p-3 shadow bg-white mb-5">
            <form onSubmit={handleSubmit} noValidate>
              <div className="row-md-4">
                <label className="fs-5">Add new product</label>
              </div>
              <div className="row-md-4 mt-2">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="row-md-4 mt-2">
                <label htmlFor="name" className="form-label">Price</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="row-md-4 mt-2">
                <label htmlFor="name" className="form-label">Description</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="row-md-4 mt-2">
                <label htmlFor="image" className="form-label">Image</label>
                <input
                  className='form-control'
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                />
              </div>
              <div className="col-12 mt-3">
                <button className="btn btn-custom-white" type="submit">Add</button>
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

export default AddProduts;