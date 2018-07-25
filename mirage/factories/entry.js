import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.lorem.words();
  },
  yearOfRelease() {
    return faker.date.past();
  },
  spotifyLink() {
    return 'https://www.spotify.com/';
  },

  albumName() {
    return faker.lorem.word();
  },
  albumCoverUrl() {
    return faker.image.imageUrl();
  },
  artistName() {
    return faker.name.firstName();
  }
});
