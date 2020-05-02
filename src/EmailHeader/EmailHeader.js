import React from 'react';
import {ReactComponent as Icon} from '../assets/communications.svg';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const EmailBox = styled.a`
  margin: 2rem;
  display: flex;
  align-items: center;

  ${breakpoint('mobile')`
    justify-content: center;
  `}

  ${breakpoint('desktop')`
    justify-content: flex-end;
 `} 
`;

const EmailIcon = styled(Icon)`
  fill: gray;
  width: 2rem;
  height: 2rem;
  margin: 1rem;
`;

const EmailText = styled.h2`
  color: gray;
  padding-right: 2rem;
  padding-bottom: 2px;
 
 ${breakpoint('mobile')`
   font-size: 1rem;
 `}

 ${breakpoint('desktop')`
   font-size: 1.2rem;
 `} 
`;

const myEmail = 'sandmeyer.m@northeastern.edu';

function EmailHeader() {
  return (
    <EmailBox href={'mailto:' + myEmail} target="_blank">
      <EmailIcon/>
      <EmailText>{myEmail}</EmailText>
    </EmailBox>
  );
}

export default EmailHeader;