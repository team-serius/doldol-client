export interface Participant {
  participantId: number;
  userId: number;
  name: string;
}

export interface ApiResponseListParticipantResponse {
  data: Participant[];
  status: number;
  message: string;
}
