import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const Heading = styled.h1`
  color: #444;
  font-family: sans-serif;
  font-size: 12px;
 
  ${breakpoint('mobile')`
    font-size: 16px;
  `}
 
  ${breakpoint('desktop')`
    font-size: 24px;
  `} 
`;

function PortfolioPage() {
  return (
    <div>
    </div>
  );
}

export default PortfolioPage;