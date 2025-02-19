import { api } from "../lib/axios";

export async function getWord(word: string) {
  const response = await api.get<WordData[]>(`/${word}`);
  return response.data;
}
