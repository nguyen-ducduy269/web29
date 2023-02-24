export const getRandomMeals = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((data) => data.meals)
    .catch((err) => console.log(err));
};

