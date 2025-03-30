// 7202d95ece7191d8f1733ff06fcbe9e5
// --url 'https://api.themoviedb.org/3/discover/movie?api_key=7202d95ece7191d8f1733ff06fcbe9e5

const fetchedData = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=7202d95ece7191d8f1733ff06fcbe9e5"
  );
  const data = await response.json();
  console.log(data);

  return data;
};
export const getPopularMovies = async () => {
  const data = await fetchedData();
  console.log(data);
  return data;
};
// this is for getting the detail for film if you click on the film or the detail button
const getMovieDetails = async (id) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=7202d95ece7191d8f1733ff06fcbe9e5`
  ).then((response) => response.json());
  console.log(data);
  return data;
};
const searchMovies = async (searchQuery) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=7202d95ece7191d8f1733ff06fcbe9e5&query=${searchQuery}`
  );
  console.log(data);
  return data;
};
const getMovieByGenre = async (genre) => {
  const data = fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=7202d95ece7191d8f1733ff06fcbe9e5&with_genres=${genre}`
  );
  console.log(data);

  return data;
};
const getTrendingMovies = async (trend = "day") => {
  const data = fetch(
    `https://api.themoviedb.org/3/trending/movie/${trend}?api_key=7202d95ece7191d8f1733ff06fcbe9e5`
  );
  console.log(data);

  return data;
};
