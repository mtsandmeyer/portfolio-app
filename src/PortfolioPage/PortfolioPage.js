import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import ProjectPanel from './ProjectPanel';

const ContentColumn = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${breakpoint('mobile')`
   max-width: 20rem;
 `}

 ${breakpoint('desktop')`
   max-width: 40rem;
 `} 
`

const Title = styled.h1`
  color: #c0d0e5;
  margin-top: 6rem;
  margin-bottom: 0;
  font-family: 'Josefin Sans', sans-serif;
 
  ${breakpoint('mobile')`
    font-size: 2.2rem;
  `}
 
  ${breakpoint('desktop')`
    font-size: 4.5rem;
  `} 
`;

const Description = styled.h2`
  color: slategrey;
  font-family: 'Josefin Sans', sans-serif;
 
  ${breakpoint('mobile')`
    font-size: 1.4rem;
    margin-bottom: 5rem;
  `}
 
  ${breakpoint('desktop')`
    font-size: 2.8rem;
    margin-bottom: 6rem;
  `} 
`;

function PortfolioPage() {
  return (
    <ContentColumn>
      <Title>Murray Sandmeyer</Title>
      <Description>Here are some of my projects:</Description>
      <ProjectPanel imageSrc="https://s6.gifyu.com/images/trash-panda.gif" title="Raccoon Game (2020)" description="A game where a starving raccoon collects trash to feed his family. Made with Unity Game Engine, C#, and Blender." launch="https://radlynn.itch.io/raccoonadventure" github="https://github.com/fen-cullen/TrashPandas-2.0"/>
      <ProjectPanel imageSrc="https://s6.gifyu.com/images/melt-gif.gif" title="Melt (2020)" description="A 3D, 360 degree immersive WebVR experience to accompany the musical project Melt. Created using Aframe.js, Three.js, and React." launch="http://murray-wow.surge.sh/" github="https://github.com/mtsandmeyer/melt-webvr"/>
      <ProjectPanel imageSrc="https://s6.gifyu.com/images/splash-ezgif.gif" title="Splash Fire (2020)" description="A water-based First Person Shooter game developed using Unity Game Engine and C#." launch="https://mtsandmeyer.itch.io/splash-fire-2" github="https://github.com/mtsandmeyer/splash-fire"/>
      <ProjectPanel title="This Portfolio Website" description="This website is optimized for mobile and desktop, and was created used React.js, CSS, styled-components, and styled-components-breakpoints." github="https://github.com/mtsandmeyer/portfolio-app"/>
      <ProjectPanel imageSrc="https://s6.gifyu.com/images/atk-img.jpg" title="Co-op at ATK (2019)" description="Developed responsive mobile-first web pages at America's Test Kitchen using React, HTML, CSS, and APIs interfaced with Ruby on Rails. Built an interactive prototype for a proposed ATK Kids initiative." launch="http://resolute-friend.surge.sh/"/>
      <ProjectPanel imageSrc="https://s6.gifyu.com/images/marble-ball.gif" title="Marble Ball (2019)" description="A simple marble-rolling game developed in Unity using C# scripts. Sound Effects crafted in Avid Pro Tools." launch="https://mtsandmeyer.itch.io/marble-ball" github="https://github.com/mtsandmeyer/marble-ball"/>
      <ProjectPanel title="...And more to come!"/>
    </ContentColumn>
  );
}

export default PortfolioPage;