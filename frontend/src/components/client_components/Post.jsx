import React, { useState } from 'react';

const Post = ({ src, name, thoughts }) => {
    const [comment, setComment] = useState(false)
    return (
        <>
            <img src={src} className="shadow rounded-3 w-100" alt="..." />
            <div className="text-center">
                <p className="fs-2 mt-2">{name}</p>
                <p className="lead">{thoughts}</p>
            </div>
            <div className='row text-center mt-2' style={{ height: "45px" }}>
                <div className='col-lg-4'>
                    <button className="border-0 btn-custom-white h-100 w-100 rounded-3">
                        <i className="bi bi-hand-thumbs-up" style={{ marginRight: '5px' }}></i>Like
                    </button>
                </div>
                <div className='col-lg-4'>
                    <button className="border-0 btn-custom-white h-100 w-100 rounded-3" onClick={() => setComment(true)}>
                        <i className="bi bi-chat-right-dots" style={{ marginRight: '5px' }}></i>Comment
                    </button>
                </div>
                <div className='col-lg-4'>
                    <button className="border-0 btn-custom-white h-100 w-100 rounded-3">
                        <i className="bi bi-send" style={{ marginRight: '5px' }}></i>Share
                    </button>
                </div>
            </div>
            {/* <div className='row mt-3 ' style={{ height: "45px" }}>
                <div className='col-lg-6 text-end fw-bold'>
                    {name} :
                </div>
                <div className='col-lg-6'>
                    Amazing Picture!!!!
                </div>
            </div> */}
            {comment ? <div className='row text-center mt-2' style={{ height: "45px" }}>
                <div className='col-lg-4'>
                    <label htmlFor="thoughts" className="form-label">Add Comment</label>
                </div>
                <div className='col-lg-4'>
                    <input
                        className="form-control"
                        type="text"
                        name="thoughts"
                    //   value={thoughts}
                    //   onChange={(e) => setThoughts(e.target.value)}
                    />
                </div>
                <div className='col-lg-4'>
                    <button className="btn btn-custom-white" type="submit">Post</button>
                </div>
            </div> : <></>}
        </>
    );
}

export default Post;
