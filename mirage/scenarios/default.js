export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */


  let genres = server.createList('genre', 5);
  genres.forEach((genre) => {
    server.createList('entry', 5, { genre });
  });
}
