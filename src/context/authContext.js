import React, {createContext, useState, useEffect, useContext} from 'react';
// import AsyncStorage from '@react-native-async-storage';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [signed, setSigned] = useState(false)

  useEffect(() => {
    async function loadStorageData() {
      const storageToken = await AsyncStorage.getItem('@token');
      if(storageToken) {
        setSigned(true)
      }
    }
    
    loadStorageData();
  }, []);

  function signIn(email, password){
    if(email === "ramonives@gmail.com" && password === "123456") {
      const token = "5555asdasasdfsdfsdfsdfasdasddasdasdsdfsddasd5555555555asdasd555555"
      setSigned(true)
      AsyncStorage.setItem('@token', token);

    } else {
      console.log("Email ou senha incorretos");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signed,
        signIn
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;