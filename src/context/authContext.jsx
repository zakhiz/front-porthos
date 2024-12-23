import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFromLocalStorage, getTokenLocalStorage, removeFromLocalStorage, saveTokenToLocalStorage, saveToLocalStorage } from '../utils/storage';
const AuthContext = createContext();

const Token = import.meta.env.VITE_TOKEN_LOCAL;
const uid = import.meta.env.VITE_ID_USER;

export const AuthProvider = ({ children }) => {
    
  const [user, setUser] = useState(null);
  const [usrId, setUsrId] = useState( () => getFromLocalStorage(uid));
  const navigate = useNavigate();

  useEffect(() => {
    
        const token = getTokenLocalStorage(Token);
        
        if (token) {
          setUser({ token });
        }else{
          navigate('/login')
        }

  }, []);

  const login = (userData) => {
    saveTokenToLocalStorage(Token, userData);
    setUser({ token: userData.token });
  };

  const dataUser = async (id) => {
          saveToLocalStorage(uid, id);
          setUsrId(id)
  }

  const logoutContext = () => {
    removeFromLocalStorage(Token)
    removeFromLocalStorage(uid)
    
    setUser(null);
    navigate('/login'); 
  };

  return (
    <AuthContext.Provider value={{ user,login, logoutContext, dataUser, usrId }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
