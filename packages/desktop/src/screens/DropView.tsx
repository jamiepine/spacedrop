import React from 'react';
import styled, { useTheme } from 'styled-components';
import { GearSix, MagnifyingGlass, Lock } from 'phosphor-react';
import ContactCard from '../components/Contact';

const Main = () => {
  return (
    <FileViewContainer>
      <SearchBarArea>
        <MagnifyingGlass
          weight="bold"
          size={30}
          style={{ transform: 'translate(0, -3px)', minWidth: 30, minHeight: 30 }}
        />
        <SearchBar placeholder="Search Contacts" autoFocus />
      </SearchBarArea>
      <Content>
        <ContactCard name="jamie" avatar="https://i.pravatar.cc/299" />
        <ContactCard name="xQc" avatar="https://i.pravatar.cc/301" />
        <ContactCard name="jeff01" avatar="https://i.pravatar.cc/302" />
        <ContactCard name="weffeef" avatar="https://i.pravatar.cc/303" />
      </Content>
      <FooterArea>
        <div style={{ width: 40, height: 40 }}>
          <img src="images/logo.png" alt="space-logo" style={{ width: 40, height: 40 }} />
        </div>
        <div style={{ marginLeft: 10, flex: 1 }}>
          <span>
            <Lock weight="bold" style={{ marginBottom: -2, marginRight: 5 }} />
            Secured with the Signal Protocol
          </span>
        </div>
        <GearSix size={30} weight="bold" style={{ marginLeft: 40 }} />
      </FooterArea>
    </FileViewContainer>
  );
};

export default Main;

const FooterArea = styled.div`
  padding: 0 30px 22px 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  color: ${(props) => props.theme.textOuter};
  p {
    font-size: 15px;
  }
`;

const FileViewContainer = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 10px 15px;
`;
const Content = styled.div`
  font-size: 20px;
  /* background-color: ${(props) => props.theme.background + '40'}; */

  flex: 1;
  padding: 15px 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
`;

const SearchBarArea = styled.div`
  position: relative;
  display: flex;
  -webkit-app-region: drag;

  height: 50px;
  align-items: center;
  flex-direction: row;
  color: ${({ theme }) => theme.textOuter};
`;

const SearchBar = styled.input`
  background: none;
  flex: 1;
  font-size: 24px;
  padding-bottom: 5px;
  margin: 0 10px;
  margin-right: 30px;
  border-width: 0px;
  border-bottom: 2px solid transparent;
  color: ${({ theme }) => theme.textOuter};
  box-sizing: border-box;
  transition: border 50ms ease-out;
  :focus {
    outline: none;
    border-bottom-color: gray;
  }
`;
