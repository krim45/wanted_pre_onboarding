import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Button = styled.button`
  background-color: purple;
  border-radius: 30px;
  border: none;
  width: 120px;
  height: 60px;
  color: white;
`;

const LightBox = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Box = styled.div`
  background-color: white;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 160px;

  > button {
    background: none;
    border: none;
    margin: 30px 0;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
  }

  > div {
    font-size: 20px;
    font-weight: 700;
    color: purple;
  }
`;

const Modal = () => {
  const [isModal, setIsModal] = useState(false);

  const modalHandler = () => {
    setIsModal(!isModal);
  };

  return (
    <Wrapper>
      <Button onClick={modalHandler}>Open Modal</Button>
      {isModal ? (
        <LightBox isModal={isModal} onClick={modalHandler}>
          <Box onClick={(e) => e.stopPropagation()}>
            <button onClick={modalHandler}>&#10006;</button>
            <div>HELLO CODESTATES!</div>
          </Box>
        </LightBox>
      ) : null}
    </Wrapper>
  );
};

export default Modal;
