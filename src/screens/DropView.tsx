import React from 'react';
import { withRouter } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import { GearSix, Lock, MagnifyingGlass } from 'phosphor-react';
import ContactCard from '../components/Contact';

const Main = () => {
  const theme = useTheme();
  return (
    <FileViewContainer>
      <ContentContainer>
        <SearchBarArea>
          <MagnifyingGlass weight="bold" size={30} style={{ marginRight: 10, marginLeft: 10 }} />
          <h2>Start typing to search</h2>
        </SearchBarArea>
        <Content>
          <ContactCard name="jamie" avatar="https://i.pravatar.cc/299" />
          <ContactCard name="xQc" avatar="https://i.pravatar.cc/301" />
          <ContactCard name="jeff01" avatar="https://i.pravatar.cc/302" />
          <ContactCard name="weffeef" avatar="https://i.pravatar.cc/303" />
        </Content>
        <FooterArea>
          <img src="/space-logo.svg" alt="space-logo" />
          <p style={{ marginLeft: 10 }}>
            <p></p>
            <p>
              {/* <Lock weight="bold" style={{ marginBottom: -2, marginRight: 5 }} />  */}
              Secured with the Signal Protocol
            </p>
          </p>
          <div style={{ flexGrow: 1 }} />
          <GearSix size={30} weight="bold" style={{ marginLeft: 40 }} />
        </FooterArea>
      </ContentContainer>
    </FileViewContainer>
  );
};

export default Main;

const FooterArea = styled.div`
  padding: 0 20px;
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
  flex-direction: row;
  height: 100vh;
`;
const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex-grow: 1;
  width: 80%;
`;

const Content = styled.div`
  font-size: 20px;
  /* background-color: ${(props) => props.theme.background + '40'}; */

  padding: 15px 15px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const SearchBarArea = styled.div`
  display: flex;
  -webkit-user-select: none;
  -webkit-app-region: drag;
  height: 50px;
  align-items: center;
  padding: 0 10px;
  padding-top: 10px;
  flex-direction: row;
  color: ${({ theme }) => theme.textOuter};
  h2 {
    font-size: 22px;
    font-weight: normal;
    /* text-shadow: 0 0 30px #000; */
    /* opacity: 0.6; */
  }
`;
