export const getRandomElement = (array)=> {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};
