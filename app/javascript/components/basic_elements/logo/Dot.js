import React from 'react'
import styled from 'styled-components'
import HoverTarget from './HoverTarget'

import refactor_spinner_img from 'images/Refactor-spinner-0_290x290.png'

const StyledDot = styled.div(props => (`
  background-color: ${props.placement.backgroundColor || ""};
  ${props.placement.backgroundImage ? "background-image: url(" + props.placement.backgroundImage + ");" : ''};\
  background-size: cover;
  width: 100%;
  height: 100%;
  border-radius: 50%;

`))

const StyledDotContainer = styled.div(props => (`
  top: ${props.placement.top || 0};
  left:  ${props.placement.left || 0};

  transition: transform 250ms;
  position: absolute;
  height: 25%;
  width: 25%;
  display: inline-block;
  z-index: ${props.placement.zIndex};
`))



const Dot = (props) => {
  const settings = {
    'red': { top: '-8%', left: '36%', backgroundColor: 'red', zIndex: props.focusedStep ?  8 : 6 },
    'green': { top: '77%', left: '73%', backgroundColor: 'green', zIndex: props.focusedStep ?  8 : 4},
    'refactor': {top: '66%', left: '-7%', backgroundColor: 'rgba(0,0,0,0)', zIndex: props.focusedStep ?  8 : 2, backgroundImage: refactor_spinner_img}

  }

  const placement = settings[props.function]

  const styled_dot = placement ?  <>
    <StyledDotContainer
      className={`dot-container ${props.function} ${props.focusedStep ? 'expanded' : ''}  ` }
      placement={placement} >

      <StyledDot focusedStep={props.focusedStep}
                 className={`dot ${props.focusedStep && props.function==='refactor' ? 'spinning' : ''}`}
                 placement={placement} ></StyledDot>
    </StyledDotContainer>

    <HoverTarget className={`hover-target ${props.function}`}
      function={props.function}
      placement={placement}
      chooseStep={props.chooseStep} /></> : ""


  return (
    styled_dot
  )
}

export default Dot