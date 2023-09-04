import React, {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import {
  saveProjectToDb,
  saveTeamDataToDb,
  saveUserDataToDb,
  updateTaskPriority,
  updateTaskStatus,
  updateTaskToProjectInDb,
} from '../db-api/db-api';
import { AuthContext } from './AuthProvider';

export const StorageContext = createContext();

export default function StorageProvider({ children }) {
  const { user } = useContext(AuthContext);

  const [loggedInUserInfo, setLoggedInUserInfo] = useState(null);
  const [dbUsers, setDbUsers] = useState(() => JSON.parse(localStorage.getItem('user-info')) || []);

  const [loggedInUserTeamInfo, setLoggedInUserTeamInfo] = useState(null);
  const [teams, setTeams] = useState(() => JSON.parse(localStorage.getItem('team-info')) || []);

  const [loggedInUserProjectsInfo, setLoggedInUserProjectsInfo] = useState(null);
  const [projects, setProjects] = useState(() => JSON.parse(localStorage.getItem('project-info')) || []);

  // filter task
  const [filterTitle, setFilterTitle] = useState('');
  // sort task by due data
  const [sortTitle, setSortTitle] = useState('');

  // useEffect for user data
  useEffect(() => {
    const currentUserData = dbUsers.find((userData) => userData.email === user?.email);
    setLoggedInUserInfo(currentUserData);
  }, [user, dbUsers]);

  const updateDbUsers = (newDbUsers) => {
    setDbUsers(newDbUsers);
    localStorage.setItem('user-info', JSON.stringify(newDbUsers));
  };

  const saveUserToDb = (username, email, bio) => {
    saveUserDataToDb(username, email, bio);
    const updatedDbUsers = JSON.parse(localStorage.getItem('user-info')) || [];
    updateDbUsers(updatedDbUsers);
  };

  // useEffect for teams data
  useEffect(() => {
    const currentUserTeamsData = teams.filter((team) => team.teamCreator === user?.email);
    setLoggedInUserTeamInfo(currentUserTeamsData);
  }, [user, teams]);

  const updateTeamsData = (newTeamInfo) => {
    setTeams(newTeamInfo);
    localStorage.setItem('team-info', JSON.stringify(newTeamInfo));
  };

  const saveTeamToDB = (name, membersData, userEmail, username) => {
    saveTeamDataToDb(name, membersData, userEmail, username);
    const updatedTeamsData = JSON.parse(localStorage.getItem('team-info')) || [];
    updateTeamsData(updatedTeamsData);
  };

  // useEffect for project data
  useEffect(() => {
    const currentUserProjectsData = projects.filter((project) => project.teamCreator === user?.email);
    setLoggedInUserProjectsInfo(currentUserProjectsData);
  }, [user, projects]);

  const updateProjectData = (projectInfo) => {
    setProjects(projectInfo);
    localStorage.setItem('project-info', JSON.stringify(projectInfo));
  };

  const saveProjectsToDB = (name, team, userEmail) => {
    saveProjectToDb(name, team, userEmail);
    const updatedProjectData = JSON.parse(localStorage.getItem('project-info')) || [];
    updateProjectData(updatedProjectData);
  };

  // update task data to project data
  const saveTaskDataToProjectDataDb = (projectId, taskData) => {
    updateTaskToProjectInDb(projectId, taskData);
    const updatedProjectData = JSON.parse(localStorage.getItem('project-info')) || [];
    updateProjectData(updatedProjectData);
  };

  // update a specific task data on a specific project
  const updateProjectTaskPriority = (projectId, taskId, newPriority) => {
    updateTaskPriority(projectId, taskId, newPriority);
    const updatedProjectData = JSON.parse(localStorage.getItem('project-info')) || [];
    updateProjectData(updatedProjectData);
  };

  // update a specific task data on a specific project
  const updateProjectTaskStatus = (projectId, taskId, newStatus) => {
    updateTaskStatus(projectId, taskId, newStatus);
    const updatedProjectData = JSON.parse(localStorage.getItem('project-info')) || [];
    updateProjectData(updatedProjectData);
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
    updateProjectTaskStatus,
    filterTitle,
    setFilterTitle,
    sortTitle,
    setSortTitle,
  }), [
    dbUsers,
    loggedInUserInfo,
    loggedInUserTeamInfo,
    teams,
    projects,
    loggedInUserProjectsInfo,
    filterTitle,
    sortTitle,
  ]);

  return (
    <StorageContext.Provider value={dbInfo}>
      {children}
    </StorageContext.Provider>
  );
}
