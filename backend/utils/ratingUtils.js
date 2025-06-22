function calculateAverageRating(ratings) {
  const { vibe, safety, uniqueness, crowd } = ratings;
  return ((vibe + safety + uniqueness + (5 - crowd)) / 4).toFixed(1); // Lower crowd is better
}

module.exports = { calculateAverageRating };
