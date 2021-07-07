import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

interface ContactCardProps {
  name: string;
  avatar: string;
}

export default function (props: ContactCardProps) {
  const dropZone = useRef(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    // dropZone.current.addEventListener("dragenter", () => setHover(true), false);
    // dropZone.current.addEventListener(
    //   "dragleave",
    //   () => setHover(false),
    //   false
    // );
  }, []);

  return (
    <ContactBody ref={dropZone} hover={hover}>
      <Avatar src={props.avatar} />
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', padding:'8px 0px' }}>
        <h2 style={{ fontFamily: 'Whitney', fontWeight: 'bold', margin: 0 }}>{props.name}</h2>
        <OnlineIndicator />
      </div>
      <span style={{marginTop: -5}}>#23909</span>
      <div style={{ flexGrow: 1 }} />
    </ContactBody>
  );
}

const OnlineIndicator = styled.div`
  border-radius: 50%;
  height: 15px;
  width: 15px;
  /* margin-top: 8px; */
  margin-left: 5px;
  background-color: #47ce47;
`;

const ContactBody = styled.div<{ hover: boolean }>`
  border-radius: 20px;
  /* border: 1px solid ${(props) => props.theme.border}; */
  flex-direction: column;
  display: flex;
  /* width: 160px; */
  margin: 10px;
  transition: 300ms;
  /* justify-content: center; */
  align-items: center;
  /* height: 240px; */
  box-shadow: 0 0 10px #00000010;
  margin-right: 10px;
  &:hover {
    /* transform: scale(1.05); */
  }
  h2 {
    font-size: 19px;
    /* margin-top: 5px; */
  }
  span {
    font-size: 15px;
    font-weight: normal;
    color: ${(props) => props.theme.textFaint};
  }
  img {
    transition: 300ms;
  }
  ${(props) =>
    props.hover &&
    `
    img {
      opacity: 0.2;
    }
    transform: translateY(-10px);
  `}
`;

const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;
