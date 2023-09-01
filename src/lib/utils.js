/* eslint-disable import/prefer-default-export */
export const getGreeting = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting;

  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Good morning';
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }

  return greeting;
};

// function getGreetingBD(locale) {
//   const options = {
//     hour: 'numeric',
//     timeZone: 'Asia/Dhaka', // Set the time zone to Bangladesh
//   };

//   const formatter = new Intl.DateTimeFormat(locale, options);
//   const currentTimeString = formatter.format(new Date());
//   const currentHour = parseInt(currentTimeString);

//   let greeting;

//   if (currentHour >= 5 && currentHour < 12) {
//     greeting = "Good morning";
//   } else if (currentHour >= 12 && currentHour < 18) {
//     greeting = "Good afternoon";
//   } else {
//     greeting = "Good evening";
//   }

//   return greeting;
// }

// // Example usage:
// const userLocale = 'en-US'; // Replace with the user's actual locale
// const bdGreeting = getGreetingBD(userLocale);
// console.log(`${bdGreeting}, user!`);
