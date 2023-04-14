export function createGenresFromTrend(array, genres) {
  const genresArray = array
    .map(id => genres.filter(element => element.id === id))
    .flat();

  if (genresArray.length > 2) {
    let newArray = genresArray.slice(0, 2);
    return newArray.map(el => el.name).join(', ') + ', Other';
  } else {
    return genresArray.map(el => el.name).join(', ');
  }
}