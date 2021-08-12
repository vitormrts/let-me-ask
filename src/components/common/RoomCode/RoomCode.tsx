import React from 'react';
import { copyToClipboard } from 'src/utils';
import { ToastContainer, toast } from 'react-toastify';
import { Button, ImageWrapper, Room } from './RoomCode.style';
import 'react-toastify/dist/ReactToastify.css';
import { CopyIcon } from '../Icons';

type RoomCodeProps = {
  code: string;
};

const RoomCode: React.FC<RoomCodeProps> = ({ code }) => {
  const handleCopyRoomCodeToClipboard = () => {
    const { success } = copyToClipboard(code);
    if (success) {
      toast.success('The room code has been copied!');
      return;
    }
    toast.error('It was not possible to copy the room code.');
  };

  return (
    <Button className="room-code" onClick={handleCopyRoomCodeToClipboard}>
      <ImageWrapper>
        <CopyIcon />
      </ImageWrapper>
      <Room>Room #{code}</Room>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Button>
  );
};

export default RoomCode;
