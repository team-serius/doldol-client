export interface Participant {
  participantId: number;
  userId: number;
  name: string;
}

export interface CursorPageParticipantResponse {
  list: Participant[];
  size: number;
  nextCusor: {
    cursorName: string;
    cursorId: number;
  };
  hasNext: boolean;
  empty: boolean;
}
