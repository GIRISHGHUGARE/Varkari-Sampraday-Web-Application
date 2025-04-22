import React from 'react'

const StoriesHero = ({ src, title, description }) => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={{
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backdropFilter: 'blur(40px) brightness(0.5)',
        }}>
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 text-white fw-bold">{title}</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead text-white mb-4">
                        {description}
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-custom btn-lg px-4">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoriesHero