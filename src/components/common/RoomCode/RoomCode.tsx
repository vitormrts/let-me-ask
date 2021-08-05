import React from 'react';
import CopyImg from 'src/assets/icons/copy.svg';
import { Button, ImageWrapper, Room } from './RoomCode.style';

type RoomCodeProps = {
  code: string;
};

const RoomCode: React.FC<RoomCodeProps> = ({ code }) => {
  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <Button className="room-code" onClick={copyRoomCodeToClipboard}>
      <ImageWrapper>
        <img src={CopyImg} alt="Copy room code" />
      </ImageWrapper>
      <Room>Sala #{code}</Room>
    </Button>
  );
};

export default RoomCode;
