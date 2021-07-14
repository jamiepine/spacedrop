import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import { MY_CLIENT_ID } from '../state';
import { call } from '../websocket';

interface ContactCardProps {
  name: string;
  avatar: string;
}

export default function (props: ContactCardProps) {
  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const result = await call('initUpload', {
      fileSize: file.size,
      originClient: MY_CLIENT_ID.value,
      targetClient: props.name
    });
    console.log(result);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <ContactBody {...getRootProps()} hover={isDragActive}>
      <Avatar src={props.avatar} />
      <MetaArea>
        <DisplayName>{props.name}</DisplayName>
        <OnlineIndicator />
      </MetaArea>
      <div style={{ flexGrow: 1 }} />
      <input {...getInputProps()} />
    </ContactBody>
  );
}

const MetaArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 8px 0;
`;

const DisplayName = styled.h2`
  font-weight: medium;
  margin: 0;
`;

const OnlineIndicator = styled.div`
  border-radius: 50%;
  height: 10px;
  width: 10px;
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
    font-size: 15px;
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
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;
