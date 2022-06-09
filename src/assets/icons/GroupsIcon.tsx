import React from 'react';
import styled from "styled-components";

const GroupsIconSvg = styled.svg`
  height: 20px;
  width: 20px;
  
  .cls-1 {
    fill: url(#groups-gradient);
  }

  .cls-2 {
    fill: url(#groups-gradient-2);
  }

  .cls-3 {
    fill: url(#groups-gradient-3);
  }

  .cls-4 {
    fill: url(#groups-gradient-4);
  }
`

export const GroupsIcon = () => {
  return (
    <GroupsIconSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
      <defs>
        <linearGradient id="groups-gradient" x1="0.59" y1="0.59" x2="7.41" y2="7.41"
                        gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#00c0ff"/>
          <stop offset="1" stopColor="#1f9bff"/>
        </linearGradient>
        <linearGradient id="groups-gradient-2" x1="10.59" y1="0.59" x2="17.41" y2="7.41"
                        gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#eaf6ff"/>
          <stop offset="1" stopColor="#addcff"/>
        </linearGradient>
        <linearGradient id="groups-gradient-3" x1="0.59" y1="10.59" x2="7.41" y2="17.41"
                        xlinkHref="#groups-gradient"
        />
        <linearGradient id="groups-gradient-4" x1="10.59" y1="10.59" x2="17.41" y2="17.41"
                        xlinkHref="#groups-gradient"
        />
      </defs>
      <g id="Layer_2">
        <g id="Layer_3">
          <g id="_24x24">
            <rect className="cls-1" width="8" height="8" rx="2"/>
            <rect className="cls-2" x="10" width="8" height="8" rx="2"/>
            <rect className="cls-3" y="10" width="8" height="8" rx="2"/>
            <rect className="cls-4" x="10" y="10" width="8" height="8" rx="2"/>
          </g>
        </g>
      </g>
    </GroupsIconSvg>
  );
};
