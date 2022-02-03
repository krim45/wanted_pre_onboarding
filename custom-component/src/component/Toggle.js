import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .toggle-container {
    width: 80px;
    height: 35px;
    background-color: lightgray;
    border-radius: 30px;
    position: relative;
    overflow: hidden;

    :before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: purple;
      transition: 0.3s linear;
      transform: ${props => props.isToggle ? 'translateX(0%)' : 'translateX(-100%)'};
    }

    :hover {
      cursor: pointer;
    }
  }

  .toggle-circle {
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    left: ${props => props.isToggle ? '50px' : '5px'};
    transition: 0.3s linear;
  }

  .text {
    margin: 10px 0;
    font-weight: 700;
  }
`;

const Toggle = () => {
  const [isToggle, setIsToggle] = useState(false);

  const toggleHandler = () => {
    setIsToggle(!isToggle);
  }

  return (
    <Wrapper isToggle={isToggle}>
      <div className='toggle-container' onClick={toggleHandler}>
        <div className='toggle-circle'></div>
      </div>

      <div className='text'>Toggle Switch {isToggle ? 'ON' : 'OFF'}</div>
    </Wrapper>
  );
};

export default Toggle;