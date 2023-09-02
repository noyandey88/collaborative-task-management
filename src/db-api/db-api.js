/* eslint-disable import/prefer-default-export */
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

  if (!teamInfo) {
    teamData.push({
      id: uniqueId,
      name,
      members: [{ name: username, email: userEmail }, ...memberData],
      teamCreator: userEmail,
    });
    localStorage.setItem('team-info', JSON.stringify(teamData));
  } else {
    teamData.push(
      ...teamInfo,
      {
        id: uniqueId,
        name,
        members: [{ name: username, email: userEmail }, ...memberData],
        teamCreator: userEmail,
      },
    );
    localStorage.setItem('team-info', JSON.stringify(teamData));
  }
};
