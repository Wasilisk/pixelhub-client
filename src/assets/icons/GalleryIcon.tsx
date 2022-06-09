import React from 'react';
import styled from "styled-components";

const GalleryIconSvg = styled.svg`
  height: 20px;
  width: 20px;
  
  .cls-1 {
    fill: url(#gallery-gradient);
  }

  .cls-2 {
    fill: url(#gallery-gradient-2);
  }

  .cls-3 {
    fill: url(#gallery-gradient-3);
  }
`

export const GalleryIcon = () => {
  return (
    <GalleryIconSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <defs>
        <linearGradient id="gallery-gradient" x1="2.93" y1="2.93" x2="17.07" y2="17.07"
                        gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3fa9f5"/>
          <stop offset="1" stopColor="#4379bd"/>
        </linearGradient>
        <linearGradient id="gallery-gradient-2" x1="4.82" y1="9.9" x2="10.1" y2="15.18"
                        gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#d8f0f7"/>
          <stop offset="1" stopColor="#c1e8fb"/>
        </linearGradient>
        <linearGradient id="gallery-gradient-3" x1="9.9" y1="4.82" x2="15.18" y2="10.1"
                        gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3fa9f5"/>
          <stop offset="0" stopColor="#d2edf7"/>
          <stop offset="1" stopColor="#c4e8f9"/>
        </linearGradient>
      </defs>
      <g id="Layer_2">
        <g id="Layer_3">
          <g id="_24x24">
            <circle className="cls-1" cx="10" cy="10" r="10"/>
            <path className="cls-2"
                  d="M6.65,8.07l5.28,5.28a4.88,4.88,0,0,1-1.17.57l-2.9,1a2.37,2.37,0,0,1-.69.11,2.13,2.13,0,0,1-1.53-.64,2.15,2.15,0,0,1-.53-2.22l1-2.9A4.88,4.88,0,0,1,6.65,8.07Z"/>
            <path className="cls-3"
                  d="M14.89,7.86l-1,2.9a4.88,4.88,0,0,1-.57,1.17L8.07,6.65a4.88,4.88,0,0,1,1.17-.57l2.9-1a2.18,2.18,0,0,1,2.75,2.75Z"/>
          </g>
        </g>
      </g>
    </GalleryIconSvg>
  );
};