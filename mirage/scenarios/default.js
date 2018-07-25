export default function(server) {
  let genres = server.createList('genre', 5);
  genres.forEach((genre) => {
    server.createList('entry', 5, { genres: genre });
  });
}
