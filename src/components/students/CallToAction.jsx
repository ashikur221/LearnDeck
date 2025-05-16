import React from 'react';
import { assets } from '../../assets/assets';

const CallToAction = () => {
  return (
    <div>
      <h1>Learn anything, anytime, anywhere</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quisquam explicabo esse nulla facere ducimus labore vero illum nam ea id accusamus blanditiis reprehenderit laudantium sequi, excepturi reiciendis fugit facilis officia illo neque!</p>
      <div>
        <button>Get started</button>
        <button>Learn more <img src={assets.arrow_icon} alt="" /></button>
      </div>
    </div>
  );
};

export default CallToAction;