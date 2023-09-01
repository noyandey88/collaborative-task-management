/* eslint-disable import/prefer-default-export */
export const getGreeting = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting;

  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Good Morning';
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }

  return greeting;
};

export const makeRandomId = (range) => {
  const characterCapital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const characterSmall = 'abcdefghijklmnopqrstuvwxyz';
  const characterNumberString = '0123456789';

  /* show id with capital letter, small letter and number (high secured) */
  const allCharacters = characterCapital + characterSmall + characterNumberString;

  const charactersLength = allCharacters.length;
  let id = '';

  for (let i = 0; i < range; i++) {
    id += allCharacters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return id;
};

// get data from localStorage
export const getDataFromLocalStorage = (key) => {
  const userInfo = localStorage.getItem(key);
  const userInfoParsed = JSON.parse(userInfo);
  return userInfoParsed;
};
