import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  margin-top: 150px;
  min-height: 50px;
  border: 1px solid lightgray;
  border-radius: 10px;
  overflow: hidden;

  :focus-within {
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
  }
`;

const InputContainer = styled.div`
  min-height: 50px;
  display: flex;

  > input {
    flex: 96;
    font-size: 20px;
    font-weight: 700;
    border: none;
    padding: 10px;

    :focus {
      outline: transparent;
    }
  }

  > button {
    flex: 4;
    border: none;
    background: transparent;
  }
`;

const DropdownOptions = styled.ul`
  list-style: none;
  background: #fff;
  border-top: 1px solid lightgray;
`;

const Option = styled.li`
  background: ${(props) => (props.selected ? 'lightgray' : 'none')};
  font-size: 13px;
  font-weight: 600;
  padding: 3px 10px;
  margin: 3px 0;

  :hover {
    background: lightgray;
  }
`;

const dropdownOptions = [
  'Amazon',
  'Apple',
  'Adobe',
  'AWS',
  '네이버',
  'Naver',
  'Netflix',
  'Google',
  'Youtube',
  'Twitter',
  'Facebook',
  '가루지기',
  '가비엔제이',
  '가수 알리',
  '가천대',
  '나무위키',
  '나비효과',
  '낙동강',
  '카카오',
  '다나와',
  '다음',
  '줌',
  '구글',
  '주식',
];

const AutoComplete = () => {
  const [inputValue, setInputValue] = useState('');
  const [hasText, setHasText] = useState(false);
  const [options, setOptions] = useState(dropdownOptions);
  const [selected, setSelected] = useState(-1);

  const changeInputValue = (e) => {
    const value = e.target.textContent || e.target.value;
    const filterRegex = new RegExp(value, 'i');
    const newOptions = dropdownOptions.filter((option) =>
      filterRegex.test(option)
    );

    setHasText(value !== '');
    setOptions(newOptions);
    setInputValue(value);
  };

  const deleteHandler = () => {
    setInputValue('');
    setHasText(false);
  };

  const keyUpHandler = (e) => {
    if (e.key === 'ArrowDown') {
      const idx = (selected + 1) % options.length;
      setSelected(idx);
    } else if (e.key === 'ArrowUp') {
      const idx =
        selected < 0 ? options.length - 1 : (selected - 1) % options.length;
      setSelected(idx);
    } else if (e.key === 'Enter') {
      setInputValue(options[selected]);
      setSelected(null);
    }
  };

  return (
    <Wrapper hasText={hasText}>
      <InputContainer onKeyUp={keyUpHandler}>
        <input
          type="text"
          value={inputValue}
          onChange={changeInputValue}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
              e.preventDefault();
            }
          }}
          autoComplete="off"
        />
        <button onClick={deleteHandler}>&#10006;</button>
      </InputContainer>
      {hasText ? (
        <DropdownOptions>
          {options.map((option, idx) => (
            <Option
              key={idx}
              onClick={changeInputValue}
              selected={selected === idx}
            >
              {option}
            </Option>
          ))}
        </DropdownOptions>
      ) : null}
    </Wrapper>
  );
};

export default AutoComplete;
