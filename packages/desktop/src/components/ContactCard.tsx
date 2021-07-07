import { ShieldCheck } from "phosphor-react";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

interface ContactCardProps {
  name: string;
  avatar: string;
}

export default function (props: ContactCardProps) {
  const dropZone = useRef(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    // dropZone.current.addEventListener('dragenter', () => setHover(true), false);
    // dropZone.current.addEventListener('dragleave', () => setHover(false), false);
  }, []);

  return (
    <ContactCardBody ref={dropZone} hover={hover}>
      <CardDetails style={{ pointerEvents: "none" }}>
        <Avatar src={props.avatar} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <h2>{props.name}</h2>
          <OnlineIndicator />
        </div>
        <span>#23909</span>
        <div style={{ flexGrow: 1 }} />
      </CardDetails>
       
      <BottomArea>
        <span>
          <ShieldCheck style={{ marginBottom: -2 }} /> Secure
        </span>
      </BottomArea>
    </ContactCardBody>
  );
}

const OnlineIndicator = styled.div`
  border-radius: 50%;
  height: 15px;
  width: 15px;
  margin-top: 8px;
  margin-left: 5px;
  background-color: #47ce47;
`;

const ContactCardBody = styled.div<{ hover: boolean }>`
  border-radius: 20px;
  background-color: ${(props) => props.theme.background};
  /* border: 1px solid ${(props) => props.theme.border}; */
  flex-direction: column;
  display: flex;
  /* width: 160px; */
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
    font-size: 22px;
    margin-top: 5px;
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

const CardDetails = styled.div`
  padding: 10px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const BottomArea = styled.div`
  border: 0px solid ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.sidebar};
  border-top-width: 1px;
  display: flex;
  width: 100%;
  height: 100;
  overflow: hidden;
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  justify-content: center;
  span {
    font-size: 15px;
    /* opacity: 0.5;
    color: ${(props) => props.theme.text}; */
  }
  /* background-color: red; */
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;
