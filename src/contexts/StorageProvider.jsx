import {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import { saveUserDataToDb } from '../db-api/db-api';
import { AuthContext } from './AuthProvider';

export const StorageContext = createContext();

export default function StorageProvider({ children }) {
  const [loggedInUserInfo, setLoggedInUserInfo] = useState({});
  const [dbUsers, setDbUsers] = useState(() => {
    // Use localStorage data if available, or an empty array if not
    const parsedUserData = JSON.parse(localStorage.getItem('user-info')) || [];
    return parsedUserData;
  });
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // Update loggedInUserInfo whenever user or dbUsers change
    const currentUserData = dbUsers.find((userData) => userData.email === user?.email);
    setLoggedInUserInfo(currentUserData);
  }, [user, dbUsers]);

  const updateDbUsers = (newDbUsers) => {
    setDbUsers(newDbUsers);
    localStorage.setItem('user-info', JSON.stringify(newDbUsers));
  };

  // Function to save user data to localStorage
  const saveUserToDb = (username, email, bio) => {
    saveUserDataToDb(username, email, bio);
    // After saving, update the dbUsers state
    updateDbUsers(JSON.parse(localStorage.getItem('user-info')));
  };

  const dbInfo = useMemo(() => ({
    dbUsers,
    loggedInUserInfo,
    updateDbUsers,
    saveUserToDb,
  }), [dbUsers, loggedInUserInfo]);

  return (
    <StorageContext.Provider value={dbInfo}>
      {children}
    </StorageContext.Provider>
  );
}
