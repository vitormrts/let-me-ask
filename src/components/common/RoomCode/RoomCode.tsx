import React from 'react';
import CopyImg from 'src/assets/icons/copy.svg';
import './RoomCode.scss';

type RoomCodeProps = {
  code: string;
};

const RoomCode: React.FC<RoomCodeProps> = ({ code }) => {
  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={CopyImg} alt="Copy room code" />
      </div>
      <span>Sala #{code}</span>
    </button>
  );
};

export default RoomCode;
