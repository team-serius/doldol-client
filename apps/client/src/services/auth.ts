import { apiClient } from './apiClient';

export const postCheckId = (id: string) => {
  return apiClient.post('/auth/check-id', { id });
};
