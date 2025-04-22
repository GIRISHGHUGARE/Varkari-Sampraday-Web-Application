import React from 'react'

const FeaturesHero = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <img className="rounded img-fluid" src='../images/Varkari.png'></img>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center'>
                        <div className='row gap-3'>
                            <h1 className="display-5">VarkariConnect</h1>
                            <div className="">
                                <p className="lead">
                                    Displays varkari's posts and news in a single feed.
                                </p>
                            </div>
                        </div>
                        <div className='row gap-3'>
                            <h1 className="display-5">Live Tracker</h1>
                            <div className="">
                                <p className="lead">
                                    Track your route and amenities.
                                </p>
                            </div>
                        </div>
                        <div className='row gap-3'>
                            <h1 className="display-5">Devotional Content</h1>
                            <div className="">
                                <p className="lead">
                                    Learn about the culture and traditions.
                                </p>
                            </div>
                        </div>
                        <div className='row gap-3'>
                            <h1 className="display-5">Products</h1>
                            <div className="">
                                <p className="lead">
                                    Buy products online securely.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturesHero