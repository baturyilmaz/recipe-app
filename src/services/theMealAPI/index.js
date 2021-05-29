export const fetchMealAPI = async (suffix) => {
  const respond = await fetch(
    `https://www.themealdb.com/api/json/v1/1/${suffix}`
  );
  const data = await respond.json();
  return data;
};
