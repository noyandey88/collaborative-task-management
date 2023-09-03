// import {
//   createContext, useContext, useEffect, useMemo, useState,
// } from 'react';
// import {
//   saveProjectToDb, saveTeamDataToDb, saveUserDataToDb, updateTaskPriority, updateTaskToProjectInDb,
// } from '../db-api/db-api';
// import { AuthContext } from './AuthProvider';

// export const StorageContext = createContext();

// export default function StorageProvider({ children }) {
//   const [loggedInUserInfo, setLoggedInUserInfo] = useState({});
//   const [dbUsers, setDbUsers] = useState(() => {
//     // Use localStorage data if available, or an empty array if not
//     const parsedUserData = JSON.parse(localStorage.getItem('user-info')) || [];
//     return parsedUserData;
//   });
//   const [loggedInUserTeamInfo, setLoggedInUserTeamInfo] = useState([]);
//   const [teams, setTeams] = useState(() => {
//     // Use localStorage data if available, or an empty array if not
//     const parsedTeamData = JSON.parse(localStorage.getItem('team-info')) || [];
//     return parsedTeamData;
//   });
//   const [loggedInUserProjectsInfo, setLoggedInUserProjectsInfo] = useState([]);
//   const [projects, setProjects] = useState(() => {
//     // Use localStorage data if available, or an empty array if not
//     const parsedProjectData = JSON.parse(localStorage.getItem('project-info')) || [];
//     return parsedProjectData;
//   });

//   const { user } = useContext(AuthContext);

//   // working of users data with localStorage
//   useEffect(() => {
//     // Update loggedInUserInfo whenever user or dbUsers change
//     const currentUserData = dbUsers.find((userData) => userData.email === user?.email);
//     setLoggedInUserInfo(currentUserData);
//   }, [user, dbUsers]);

//   const updateDbUsers = (newDbUsers) => {
//     setDbUsers(newDbUsers);
//     localStorage.setItem('user-info', JSON.stringify(newDbUsers));
//   };

//   // Function to save user data to localStorage
//   const saveUserToDb = (username, email, bio) => {
//     saveUserDataToDb(username, email, bio);
//     // After saving, update the dbUsers state
//     updateDbUsers(JSON.parse(localStorage.getItem('user-info')));
//   };

//   // usage of teams data with localStorage
//   useEffect(() => {
//     const currentUserTeamsData = teams.filter((team) => team.teamCreator === user?.email);
//     setLoggedInUserTeamInfo(currentUserTeamsData);
//   }, [user, teams]);

//   const updateTeamsData = (newTeamInfo) => {
//     setTeams(newTeamInfo);
//     localStorage.setItem('team-info', JSON.stringify(newTeamInfo));
//   };

//   // Function to save user data to localStorage
//   const saveTeamToDB = (name, membersData, userEmail, username) => {
//     saveTeamDataToDb(name, membersData, userEmail, username);
//     // After saving, update the dbUsers state
//     updateTeamsData(JSON.parse(localStorage.getItem('team-info')));
//   };

//   // usage of project data with localStorage
//   useEffect(() => {
//     const currentUserProjectsData = projects.filter((project) => project.teamCreator === user?.email);
//     setLoggedInUserProjectsInfo(currentUserProjectsData);
//   }, [user, projects]);

//   const updateProjectData = (projectInfo) => {
//     setProjects(projectInfo);
//     localStorage.setItem('project-info', JSON.stringify(projectInfo));
//   };

//   // Function to save user data to localStorage
//   const saveProjectsToDB = (name, team, userEmail) => {
//     saveProjectToDb(name, team, userEmail);
//     // After saving, update the projects state
//     updateProjectData(JSON.parse(localStorage.getItem('project-info')));
//   };

//   // update task data to project data
//   const saveTaskDataToProjectDataDb = (projectId, taskData) => {
//     updateTaskToProjectInDb(projectId, taskData);
//     // After saving, update the dbUsers state
//     updateProjectData(JSON.parse(localStorage.getItem('project-info')));
//   };

//   // testing code of realtime updates

//   const handleLocalStorageChange = (event) => {
//     if (event.key === 'project-info') {
//       // Update the state when LocalStorage changes
//       setProjects(JSON.parse(event.newValue));
//     }
//   };

//   useEffect(() => {
//     // Retrieve data from LocalStorage and set it in the state
//     const storedData = JSON.parse(localStorage.getItem('project-info')) || [];
//     setProjects(storedData);

//     // Listen for changes in LocalStorage
//     window.addEventListener('storage', handleLocalStorageChange);

//     return () => {
//       // Remove the event listener when the component unmounts
//       window.removeEventListener('storage', handleLocalStorageChange);
//     };
//   }, []);

//   // update a specific task data on a specific project
//   const updateProjectTaskPriority = (projectId, taskId, newPriority) => {
//     updateTaskPriority(projectId, taskId, newPriority);
//     updateProjectData(JSON.parse(localStorage.getItem('project-info')));
//   };

//   const dbInfo = useMemo(() => ({
//     dbUsers,
//     loggedInUserInfo,
//     updateDbUsers,
//     saveUserToDb,
//     saveTeamToDB,
//     saveProjectsToDB,
//     saveTaskDataToProjectDataDb,
//     teams,
//     loggedInUserTeamInfo,
//     projects,
//     loggedInUserProjectsInfo,
//     updateProjectTaskPriority,
//   }), [dbUsers, loggedInUserInfo, loggedInUserTeamInfo, projects, loggedInUserProjectsInfo]);

//   return (
//     <StorageContext.Provider value={dbInfo}>
//       {children}
//     </StorageContext.Provider>
//   );
// }

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

  // // Remove the storage event listener when the component unmounts
  // useEffect(() => {
  //   const handleLocalStorageChange = (event) => {
  //     if (event.key === 'project-info') {
  //       setProjects(JSON.parse(event.newValue));
  //     }
  //   };

  //   window.addEventListener('storage', handleLocalStorageChange);

  //   return () => {
  //     window.removeEventListener('storage', handleLocalStorageChange);
  //   };
  // }, []);

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
  }), [
    dbUsers,
    loggedInUserInfo,
    loggedInUserTeamInfo,
    teams,
    projects,
    loggedInUserProjectsInfo,
  ]);

  return (
    <StorageContext.Provider value={dbInfo}>
      {children}
    </StorageContext.Provider>
  );
}
