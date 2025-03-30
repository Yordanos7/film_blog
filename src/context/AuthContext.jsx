import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createContext, useState, useEffect, useContext } from "react";

import React from "react";
const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decode = jwtDecode(token);
        if (decode.exp * 1000 < Date.now()) {
          localStorage.removeItem(token);
          setUser(null);
          setIsAuthenticated(false);
        } else {
          setUser(decode);
          axiosInterceptor(response.data.token);
          setIsAuthenticated(true);
        }
      } catch (error) {
        localStorage.removeItem("token");
        setUser(null);
        setIsAuthenticated(false);
        return;
      }
    }
    setLoading(false);
  }, []);
  const axiosInterceptor = (token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          localStorage.removeItem("token");
          setUser(null);
          window.location.href = "/login";
        } else {
          return Promise.reject(error);
        }
      }
    );
  };

  const register = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        userData
      );
      localStorage.setItem("token", response.data.token);
      const decode = jwtDecode(response.data.token);
      setUser(response.data.user);
      axiosInterceptor(response.data.token);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(
        "Registration error:",
        error.response?.data || error.message
      );
    }
  };
  const login = async (credentials) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",

        credentials
      );
      localStorage.setItem("token", response.token);
      const decode = jwtDecode(response.token);
      setUser(decode);
      axiosInterceptor(response.data.token);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error);
    }
  };
  const logOut = async () => {
    const response = await axios.post("http://localhost:5000/api/auth/logout");
    localStorage.removeItem("token");
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <div>
      <AuthContext.Provider
        value={{ logOut, login, register, user, loading, isAuthenticated }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
}
export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
