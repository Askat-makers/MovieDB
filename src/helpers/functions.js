export const isFavorite = (id) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  return !!favorites.find((movie) => movie.id === id);
};
