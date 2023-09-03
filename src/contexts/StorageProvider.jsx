import {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import {
  saveProjectToDb, saveTeamDataToDb, saveUserDataToDb, updateTaskPriority, updateTaskToProjectInDb,
} from '../db-api/db-api';
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
  const [loggedInUserProjectsInfo, setLoggedInUserProjectsInfo] = useState([]);
  const [projects, setProjects] = useState(() => {
    // Use localStorage data if available, or an empty array if not
    const parsedProjectData = JSON.parse(localStorage.getItem('project-info')) || [];
    return parsedProjectData;
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

  // usage of project data with localStorage
  useEffect(() => {
    const currentUserProjectsData = projects.filter((project) => project.teamCreator === user?.email);
    setLoggedInUserProjectsInfo(currentUserProjectsData);
  }, [user, projects]);

  const updateProjectData = (projectInfo) => {
    setProjects(projectInfo);
    localStorage.setItem('project-info', JSON.stringify(projectInfo));
  };

  // Function to save user data to localStorage
  const saveProjectsToDB = (name, team, userEmail) => {
    saveProjectToDb(name, team, userEmail);
    // After saving, update the projects state
    updateProjectData(JSON.parse(localStorage.getItem('project-info')));
  };

  // update task data to project data
  const saveTaskDataToProjectDataDb = (projectId, taskData) => {
    updateTaskToProjectInDb(projectId, taskData);
    // After saving, update the dbUsers state
    updateProjectData(JSON.parse(localStorage.getItem('project-info')));
  };

  // update a specific task data on a specific project
  const updateProjectTaskPriority = (projectId, taskId, newPriority) => {
    updateTaskPriority(projectId, taskId, newPriority);
    updateProjectData(JSON.parse(localStorage.getItem('project-info')));
  };

  const dbInfo = useMemo(() => ({
    dbUsers,
    loggedInUserInfo,
    updateDbUsers,
    saveUserToDb,
    saveTeamToDB,
    saveProjectsToDB,
    saveTaskDataToProjectDataDb,
    teams,
    loggedInUserTeamInfo,
    projects,
    loggedInUserProjectsInfo,
    updateProjectTaskPriority,
  }), [dbUsers, loggedInUserInfo, loggedInUserTeamInfo, projects, loggedInUserProjectsInfo]);

  return (
    <StorageContext.Provider value={dbInfo}>
      {children}
    </StorageContext.Provider>
  );
}
