import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
    setLoading(false);
  }, []);

  // ✅ Create a helper that auto-adds token
  const axiosWithAuth = axios.create({
    baseURL: "http://localhost:3001/", // change if needed
  });

  axiosWithAuth.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return (
    <AuthContext.Provider value={{ token, setToken, loading, axiosWithAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
