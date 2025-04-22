import React from 'react';
import '../../css/SliderHero.css';

const SliderHeroRight = () => {
    return (
        <>
            <div className="image-carousel-container h-50">
                <div className="image-carousel-row">
                    <img src="../images/WomenVarkari.jpg"  className='rounded img-fluid me-5 ' alt=''/>
                    <img src="../images/MenVarkari.jpg" className='rounded img-fluid me-5 ' alt='' />
                    <img src="../images/Men1Varkari.jpg" className='rounded img-fluid me-5 ' alt='' />
                    <img src="../images/childVarkari.jpg"  className='rounded img-fluid me-5 ' alt=''/>
                    <img src="../images/bhajan.webp"  className='rounded img-fluid me-5 ' alt=''/>
                </div>
                
            </div>
        </>
    )
}

export default SliderHeroRight;