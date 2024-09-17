import axios from "axios";

export const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/`,
  headers: {
    apiKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
    Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
  },
});
