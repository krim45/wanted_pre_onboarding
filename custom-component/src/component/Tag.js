import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 85%;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 10px;

  &:focus-within {
    border: 1px solid purple;
  }

  > input {
    border: none;
    margin: 5px;
    font-size: 16px;

    :focus {
      outline: transparent;
    }
  }
`;

const TagContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  > li {
    background-color: purple;
    border-radius: 10px;
    padding: 8px;
    margin: 5px;

    span {
      font-weight: 700;
      color: #e9e9e9;
      margin: 0 3px;

      &.close {
        background-color: #e9e9e9;
        color: #000;
        border-radius: 50%;
        padding: 0 3px;
      }
    }
  }
`;

const Tag = () => {
  const [tags, setTags] = useState(['Pre Onboarding']);

  const addTag = (e) => {
    if (e.key === 'Enter' && e.target.value && !tags.includes(e.target.value)) {
      const newTags = [...tags, e.target.value];
      e.target.value = '';

      setTags(newTags);
    }
  };

  const removeTag = (removedIdx) => {
    const newTags = tags.filter((_, idx) => idx !== removedIdx);

    setTags(newTags);
  };

  return (
    <Wrapper>
      <InputContainer>
        <TagContainer>
          {tags.map((text, idx) => (
            <li key={idx}>
              <span className="text">{text}</span>
              <span className="close" onClick={() => removeTag(idx)}>
                &#10006;
              </span>
            </li>
          ))}
        </TagContainer>
        <input
          type="text"
          placeholder="Press enter to add tags"
          onKeyUp={addTag}
        />
      </InputContainer>
    </Wrapper>
  );
};

export default Tag;
