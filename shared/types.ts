export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
export interface User {
  id: string;
  name: string;
}
export interface Chat {
  id: string;
  title: string;
}
export interface ChatMessage {
  id: string;
  chatId: string;
  userId: string;
  text: string;
  ts: number;
}
export type LeadStatus = 'pending' | 'contacted' | 'completed';
export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  zipCode: string;
  serviceType: string;
  preferredDate: string;
  itemsDescription: string;
  status: LeadStatus;
  createdAt: number;
}