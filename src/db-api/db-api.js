import { getDataFromLocalStorage, makeRandomId } from '../lib/utils';

// save user data to localStorage
export const saveUserDataToDb = (username, email, bio) => {
  const userData = [];
  const uniqueId = makeRandomId(6);
  const userInfo = getDataFromLocalStorage('user-info') || [];

  if (!userInfo) {
    userData.push({
      id: uniqueId,
      username,
      email,
      bio,
    });
    localStorage.setItem('user-info', JSON.stringify(userData));
  } else {
    userData.push(
      ...userInfo,
      {
        id: uniqueId,
        username,
        email,
        bio,
      },
    );
    localStorage.setItem('user-info', JSON.stringify(userData));
  }
};

// save team data to db
export const saveTeamDataToDb = (name, memberData, userEmail, username) => {
  const teamData = [];
  const uniqueId = makeRandomId(6);
  const teamInfo = getDataFromLocalStorage('team-info') || [];
  const membersData = [{ name: username, email: userEmail }, ...memberData];
  const uniqueMembers = [...new Set(membersData)];

  if (!teamInfo) {
    teamData.push({
      id: uniqueId,
      name,
      members: uniqueMembers,
      projects: [],
      teamCreator: userEmail,
    });
    localStorage.setItem('team-info', JSON.stringify(teamData));
  } else {
    teamData.push(
      ...teamInfo,
      {
        id: uniqueId,
        name,
        members: uniqueMembers,
        projects: [],
        teamCreator: userEmail,
      },
    );
    localStorage.setItem('team-info', JSON.stringify(teamData));
  }
};

export const saveProjectToDb = (name, team, userEmail) => {
  const projectData = [];
  const uniqueId = makeRandomId(6);
  const projectInfo = getDataFromLocalStorage('project-info') || [];

  if (!projectInfo) {
    projectData.push({
      id: uniqueId,
      name,
      tasks: [],
      team,
      projectCreator: userEmail,
    });
    localStorage.setItem('project-info', JSON.stringify(projectData));
  } else {
    projectData.push(
      ...projectInfo,
      {
        id: uniqueId,
        name,
        tasks: [],
        team,
        projectCreator: userEmail,
      },
    );
    localStorage.setItem('project-info', JSON.stringify(projectData));
  }
};

export const updateTaskToProjectInDb = (projectId, taskData) => {
  const uniqueId = makeRandomId(6);
  const projectInfo = getDataFromLocalStorage('project-info') || [];
  const updateAbleTask = { id: uniqueId, ...taskData };

  const elementToUpdate = projectInfo?.findIndex((project) => project?.id === projectId);
  if (elementToUpdate !== -1) {
    projectInfo[elementToUpdate]?.tasks.push(updateAbleTask);
    localStorage.setItem('project-info', JSON.stringify(projectInfo));
  } else {
    throw new Error('Element is not updatable');
  }
};
