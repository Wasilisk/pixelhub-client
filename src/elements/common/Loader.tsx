import React from 'react';
import styled from "styled-components";

interface LoaderProps {
  size: string
}

const SvgLoaderIcon = styled.svg<LoaderProps>`
  width: 100%;
  height: 100%;
  margin: auto;
  background: none;
  display: block;
  shape-rendering: auto;
`

export const Loader = ({size}: LoaderProps) => {
  return (
    <SvgLoaderIcon size={size} viewBox="0 0 100 100">
      <g transform="rotate(0 50 50)">
        <rect x="47" y="22" rx="3" ry="4.32" width="6" height="16" fill="#ffffff">
          <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9s" repeatCount="indefinite"></animate>
        </rect>
      </g><g transform="rotate(36 50 50)">
      <rect x="47" y="22" rx="3" ry="4.32" width="6" height="16" fill="#ffffff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(72 50 50)">
      <rect x="47" y="22" rx="3" ry="4.32" width="6" height="16" fill="#ffffff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.7s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(108 50 50)">
      <rect x="47" y="22" rx="3" ry="4.32" width="6" height="16" fill="#ffffff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(144 50 50)">
      <rect x="47" y="22" rx="3" ry="4.32" width="6" height="16" fill="#ffffff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(180 50 50)">
      <rect x="47" y="22" rx="3" ry="4.32" width="6" height="16" fill="#ffffff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(216 50 50)">
      <rect x="47" y="22" rx="3" ry="4.32" width="6" height="16" fill="#ffffff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(252 50 50)">
      <rect x="47" y="22" rx="3" ry="4.32" width="6" height="16" fill="#ffffff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.2s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(288 50 50)">
      <rect x="47" y="22" rx="3" ry="4.32" width="6" height="16" fill="#ffffff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.1s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(324 50 50)">
      <rect x="47" y="22" rx="3" ry="4.32" width="6" height="16" fill="#ffffff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
      </rect>
    </g>
    </SvgLoaderIcon>
  );
};

export default Loader;