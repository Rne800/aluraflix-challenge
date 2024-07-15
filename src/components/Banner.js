import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-category">FRONT END</div>
        <h1>Challenge React</h1>
        <p>
          Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás
          comprometerte en la resolución de un problema para poder aplicar todos
          los conocimientos adquiridos en la formación React.
        </p>
      </div>
      <div className="banner-image">
        <img src="https://live.staticflickr.com/5634/23519243193_38c3279c75_c.jpg" alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
