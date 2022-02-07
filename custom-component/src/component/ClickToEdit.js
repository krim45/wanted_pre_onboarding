import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 80px;
`;

const InputContainer = styled.div`
  display: flex;
  justify: space-between;
  align-items: center;
  margin: 40px 0;

  > input {
    width: 200px;
    height: 40px;
    margin: 0 20px;
    text-align: center;
  }
`;

const Text = styled.div`
  display: grid;
  text-align: center;
  align-content: center;
  border: 1px solid lightgray;
  width: 200px;
  height: 40px;
  margin: 0 20px;
`;

const Input = ({ label, value, inputValueHandler }) => {
  const inputRef = useRef(null);
  const [isEdit, setIsEdit] = useState(false);
  const [newValue, setNewValue] = useState(value);

  useEffect(() => {
    if (isEdit) {
      inputRef.current.focus();
    }
  }, [isEdit]);

  const handleValue = (e) => {
    setNewValue(e.target.value);
  };

  const handlerBlur = () => {
    inputValueHandler(newValue);
    setIsEdit(!isEdit);
  };

  return (
    <>
      {isEdit ? (
        <input
          type="text"
          name={label}
          ref={inputRef}
          defaultValue={newValue}
          onChange={handleValue}
          onBlur={handlerBlur}
        />
      ) : (
        <Text onClick={() => setIsEdit(true)}>{newValue}</Text>
      )}
    </>
  );
};

const ClickToEdit = () => {
  const [name, setName] = useState('김코딩');
  const [age, setAge] = useState('20');

  return (
    <Wrapper>
      <InputContainer>
        <label htmlFor="name">이름</label>
        <Input
          label="name"
          value={name}
          inputValueHandler={(value) => setName(value)}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="age">나이</label>
        <Input
          label="age"
          value={age}
          inputValueHandler={(value) => setAge(value)}
        />
      </InputContainer>
      <div>
        이름 {name} 나이 {age}
      </div>
    </Wrapper>
  );
};

export default ClickToEdit;
