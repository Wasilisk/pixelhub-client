import React from 'react';
import styled from "styled-components";

const UsersIconSvg = styled.svg`
  height: 20px;
  width: 20px;
  
  .cls-1 {
    fill: url(#users-gradient);
  }

  .cls-2 {
    fill: url(#users-gradient-2);
  }

  .cls-3 {
    fill: url(#users-gradient-3);
  }

  .cls-4 {
    fill: url(#users-gradient-4);
  }

  .cls-5 {
    fill: url(#users-gradient-5);
  }

  .cls-6 {
    fill: url(#users-gradient-6);
  }

`

export const UsersIcon = () => {
  return (
    <UsersIconSvg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18">
        <defs>
          <linearGradient id="users-gradient" x1="1.88" y1="0.88" x2="6.12" y2="5.12"
                          gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#6be8a7"/>
            <stop offset="1" stopColor="#01b59c"/>
          </linearGradient>
          <linearGradient id="users-gradient-2" x1="0.98" y1="7.78" x2="7.02" y2="13.81"
                          xlinkHref="#users-gradient"/>
          <linearGradient id="users-gradient-3" x1="17.88" y1="0.88" x2="22.12" y2="5.12"
                          xlinkHref="#users-gradient"/>
          <linearGradient id="users-gradient-4" x1="16.98" y1="7.78" x2="23.02" y2="13.81"
                          xlinkHref="#users-gradient"/>
          <linearGradient id="users-gradient-5" x1="9.17" y1="1.17" x2="14.83" y2="6.83"
                          gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#00c0ff"/>
            <stop offset="1" stopColor="#1f9bff"/>
          </linearGradient>
          <linearGradient id="users-gradient-6" x1="7.92" y1="10.01" x2="16.08" y2="18.16"
                          xlinkHref="#users-gradient-5"/>
        </defs>
        <g id="Layer_2">
          <g id="Layer_3">
            <g id="_24x24">
              <circle className="cls-1" cx="4" cy="3" r="3"/>
              <path className="cls-2"
                    d="M5,7H3a3,3,0,0,0-3,3v2a2,2,0,0,0,2,2H6a2,2,0,0,0,2-2V10A3,3,0,0,0,5,7Z"/>
              <circle className="cls-3" cx="20" cy="3" r="3"/>
              <path className="cls-4"
                    d="M21,7H19a3,3,0,0,0-3,3v2a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V10A3,3,0,0,0,21,7Z"/>
              <circle className="cls-5" cx="12" cy="4" r="4"/>
              <path className="cls-6"
                    d="M13,9H11a5,5,0,0,0-5,5v1a3,3,0,0,0,3,3h6a3,3,0,0,0,3-3V14A5,5,0,0,0,13,9Z"/>
            </g>
          </g>
        </g>
      </svg>
    </UsersIconSvg>
  );
};
