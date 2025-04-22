import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 img-fluid" style={{
            backgroundImage: 'url(../images/Mauli1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backdropFilter: 'blur(40px) brightness(0.5)',
        }}>
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 text-white fw-bold">Welcome to Varkari Sampraday</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead text-white mb-4">
                        Embark on a journey of spiritual growth and connection with fellow Varkaris.
                        Discover the rich history and cultural heritage of our community.
                        Join us in celebrating the values of love, compassion, and devotion.
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Link  to="/signup"><button type="button" className="btn btn-custom btn-lg px-4 gap-3">Get Started</button></Link>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;