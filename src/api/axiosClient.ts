import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://tmgztvdsoxoyhckhzeow.supabase.co/rest/v1/",
  headers: {
    apiKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
    Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
  },
});
