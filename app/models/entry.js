import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  yearOfRelease: attr('number'),
  spotifyLink: attr('number'),

  albumName: attr('string'),
  albumCoverUrl: attr('string'),
  artistName: attr('string'),

  genres: hasMany()
});
