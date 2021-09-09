const apiKey = process.env.REACT_APP_GIPHY_API;

export const getTrendingGIFs = () => {
  return fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`).then(
    (response) => response.json()
  );
};

export const searchGIFs = (value) => {
  return fetch(
    `https://api.giphy.com/v1/gifs/search?q=${value}&api_key=${apiKey}`
  ).then((response) => response.json());
};
