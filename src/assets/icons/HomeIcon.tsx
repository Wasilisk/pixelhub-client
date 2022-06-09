import styled from "styled-components";

const HomeIconContainer = styled.svg`
  height: 20px;
  width: 20px;
  
  .cls-1 {
    fill: url(#home-gradient)
  }
`

export const HomeIcon = () => {
  return (
    <HomeIconContainer xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 19">
      <defs>
        <linearGradient id="home-gradient" x1="3.19" y1="5.4" x2="16.81" y2="19.02"
                        gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fd0"/>
          <stop offset="1" stopColor="#feb100"/>
        </linearGradient>
      </defs>
      <g id="Layer_2">
        <g id="Layer_3">
          <g id="_24x24">
            <path className="cls-1"
                  d="M19.7,8.28,12,.84A2.87,2.87,0,0,0,8,.84L.3,8.28a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l.3-.3V17a2,2,0,0,0,2,2H6a2,2,0,0,0,2-2V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v2a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2V9.42l.3.3a1,1,0,0,0,1.4-1.44Z"/>
          </g>
        </g>
      </g>
    </HomeIconContainer>
  );
}