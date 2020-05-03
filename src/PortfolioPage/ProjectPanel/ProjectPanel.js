import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
`

const ProjectTitle = styled.div`
  text-align: left;
  color: lightsteelblue;
  margin-top: 2rem;
  font-family: 'Josefin Sans', sans-serif;

  ${breakpoint('mobile')`
    font-size: 2.5rem;
  `}
  ${breakpoint('desktop')`
    font-size: 3.5rem;
  `} 
`

const ProjectDescription = styled.div`
  text-align: left;
  color: slategrey;
  margin: 0;

  ${breakpoint('mobile')`
    font-size: 1rem;
  `}
  ${breakpoint('desktop')`
    font-size: 1.6rem;
  `} 
`

const ProjectButton = styled.a`
  border-style: solid;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: gray;
  margin: 1.5rem 0;
  padding: 1rem;
  transition: 0.3s;

  &:hover {
    color: lavender;
  }

  ${breakpoint('mobile')`
    font-size: 1rem;
  `}
  ${breakpoint('desktop')`
    font-size: 1.5rem;
  `} 
`

const Container = styled.div`
  margin-bottom: 8rem;
`

class ProjectPanel extends React.Component {
  render() {
    return (
      <Container>
        {this.props.imageSrc && <ProjectImage src={this.props.imageSrc}/>}
        {this.props.title && <ProjectTitle>{this.props.title}</ProjectTitle>}
        {this.props.description && <ProjectDescription>{this.props.description}</ProjectDescription>}
        {this.props.launch && <ProjectButton href={this.props.launch} target="_blank">Launch</ProjectButton>}
        {this.props.github && <ProjectButton href={this.props.github} target="_blank">View on Github</ProjectButton>}
      </Container>
    );
  }
}

export default ProjectPanel;