import {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import { saveTeamDataToDb, saveUserDataToDb } from '../db-api/db-api';
import { AuthContext } from './AuthProvider';

export const StorageContext = createContext();

export default function StorageProvider({ children }) {
  const [loggedInUserInfo, setLoggedInUserInfo] = useState({});
  const [dbUsers, setDbUsers] = useState(() => {
    // Use localStorage data if available, or an empty array if not
    const parsedUserData = JSON.parse(localStorage.getItem('user-info')) || [];
    return parsedUserData;
  });
  const [loggedInUserTeamInfo, setLoggedInUserTeamInfo] = useState([]);
  const [teams, setTeams] = useState(() => {
    // Use localStorage data if available, or an empty array if not
    const parsedTeamData = JSON.parse(localStorage.getItem('team-info')) || [];
    return parsedTeamData;
  });

  const { user } = useContext(AuthContext);

  // working of users data with localStorage
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

  // usage of teams data with localStorage
  useEffect(() => {
    const currentUserTeamsData = teams.filter((team) => team.teamCreator === user?.email);
    setLoggedInUserTeamInfo(currentUserTeamsData);
  }, [user, teams]);

  const updateTeamsData = (newTeamInfo) => {
    setTeams(newTeamInfo);
    localStorage.setItem('team-info', JSON.stringify(newTeamInfo));
  };

  // Function to save user data to localStorage
  const saveTeamToDB = (name, membersData, userEmail, username) => {
    saveTeamDataToDb(name, membersData, userEmail, username);
    // After saving, update the dbUsers state
    updateTeamsData(JSON.parse(localStorage.getItem('team-info')));
  };

  const dbInfo = useMemo(() => ({
    dbUsers,
    loggedInUserInfo,
    updateDbUsers,
    saveUserToDb,
    saveTeamToDB,
    teams,
    loggedInUserTeamInfo,
  }), [dbUsers, loggedInUserInfo]);

  return (
    <StorageContext.Provider value={dbInfo}>
      {children}
    </StorageContext.Provider>
  );
}
