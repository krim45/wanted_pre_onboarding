import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 85%;
  margin-top: 40px;
`;

const TabContainer = styled.ul`
  background-color: lightgray;
  list-style: none;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const TabMenu = styled.li`
  width: 30%;
  height: 100%;
  color: gray;
  font-size: 20px;
  font-weight: 700;
  padding-left: 10px;
  display: flex;
  align-items: center;
  background-color: lightgray;

  &.selected {
    color: white;
    background-color: purple
  }
`;

const Text = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-top: 100px;
`;

const Tab = () => {
  const [tab, setTab] = useState(0);

  const tabMenu = [
    { name: 'Tab1', text: 'Tab menu ONE' },
    { name: 'Tab2', text: 'Tab menu TWO' },
    { name: 'Tab3', text: 'Tab menu THREE' },
  ];

  const tabHandler = (idx) => {
    setTab(idx);
  };

  return (
    <Wrapper>
      <TabContainer>
        {tabMenu.map((item, idx) => (
          <TabMenu
            className={tab === idx ? 'selected' : ''}
            onClick={() => tabHandler(idx)}
          >
            {item.name}
          </TabMenu>
        ))}
      </TabContainer>
      <Text>{tabMenu[tab].text}</Text>
    </Wrapper>
  );
};

export default Tab;
