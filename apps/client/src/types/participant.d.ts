export interface Participant {
  participantId: number;
  userId: number;
  name: string;
}

export interface ParticipantRequest {
  id: number;
  cursorName: string | null;
  cursorId: number | null;
  size?: number;
}

export interface CursorPageParticipantResponse {
  data: Participant[];
  size: number;
  nextCursor: {
    cursorName: string;
    cursorId: number;
  };
  hasNext: boolean;
  empty: boolean;
}
