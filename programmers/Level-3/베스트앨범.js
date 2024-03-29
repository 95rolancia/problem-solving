function solution(genres, plays) {
  const genreMap = new Map();

  genres
    .map((genre, idx) => [genre, plays[idx]])
    .forEach(([genre, play], idx) => {
      const data = genreMap.get(genre) || { total: 0, songs: [] };

      genreMap.set(genre, {
        total: data.total + play,
        songs: [...data.songs, { play, idx }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2),
      });
    });

  return [...genreMap]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((item) => item.idx);
}
