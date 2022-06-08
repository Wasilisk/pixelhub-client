import React from 'react';
import styled from "styled-components";

const backgroundImages = [
  require('../assets/backgrounds/background1.png'),
  require('../assets/backgrounds/background2.gif'),
  require('../assets/backgrounds/background3.png'),
  require('../assets/backgrounds/background4.gif'),
  require('../assets/backgrounds/background5.png'),
];

const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

const Background = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  background-image: url(${randomImage});
  background-size: cover;
  image-rendering: pixelated;
  background-position: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    min-height: 100%;
    height: auto;
    align-items: start;
  }
`;

export default Background;