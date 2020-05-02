import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const Title = styled.h1`
  color: gray;
  margin-top: 6rem;
 
  ${breakpoint('mobile')`
    font-size: 2rem;
  `}
 
  ${breakpoint('desktop')`
    font-size: 3rem;
  `} 
`;

const Description = styled.h2`
  color: gray;
 
  ${breakpoint('mobile')`
    font-size: 1.2rem;
  `}
 
  ${breakpoint('desktop')`
    font-size: 1.9rem;
  `} 
`;

function PortfolioPage() {
  return (
    <div>
      <Title>Murray Sandmeyer</Title>
      <Description>Here are some of my projects:</Description>
    </div>
  );
}

export default PortfolioPage;