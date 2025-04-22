import React, { useState, useEffect } from 'react';
import '../../css/Stories.css';
import Axios from 'axios';
import StoriesHero from '../../components/client_components/StoriesHero';

const Stories = () => {
    const [stories, setStories] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:5001/api/v1/stories/getStories')
            .then(response => {
                console.log(response.data)
                setStories(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return (
        <>
            {stories.flat().map(story => (
            <div key={story._id} className="d-flex justify-content-center align-items-center vh-100 img-fluid" style={{
                backgroundImage: 'url(../images/DnyaneshwarMauli.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backdropFilter: 'blur(40px) brightness(0.5)',
            }}>
              <StoriesHero
                src={story.image}
                title={story.title}
                description={story.description}
              />
            </div>
            ))}
        </>
    )
}

export default Stories