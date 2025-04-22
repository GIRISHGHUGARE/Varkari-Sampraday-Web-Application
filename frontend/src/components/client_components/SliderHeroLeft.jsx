import React from 'react';
import '../../css/SliderHero.css';

const SliderHeroLeft = () => {
  return (
    <>
      <div className="image-carousel-container h-50">
        <div className="image-carousel-row-left">
          <img src="../images/aaiVarkari.png" className="rounded img-fluid me-5" alt='' />
          <img src="../images/littleVarkari.png" className="rounded img-fluid me-5" alt='' />
          <img src="../images/bhajanVarkari.png" className="rounded img-fluid me-5" alt='' />
          <img src="../images/Vari.png" className="rounded img-fluid me-5" alt='' />
          <img src="../images/VariHandi.png" className="rounded img-fluid me-5" alt='' />
        </div>
      </div>
    </>
  );
};

export default SliderHeroLeft;