import { useParams } from 'react-router';

type RoomParams = {
  id: string;
};

const useRoomId = (): string => {
  const { id: roomId } = useParams<RoomParams>();

  return roomId;
};

export default useRoomId;
