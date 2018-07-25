import Route from '@ember/routing/route';
import Table from 'ember-light-table';
import { setProperties } from '@ember/object';

export default Route.extend({
  model() {
    return this.store.findAll('entry');
  },

  columns: [{
    label: 'Name',
    valuePath: 'name'
  }, {
    label: 'Artist',
    valuePath: 'artistName',
    width: '150px'
  }, {
    label: '',
    valuePath: 'albumCoverUrl',
    cellComponent: 'album-cover',
    width: '50px'
  }, {
    label: 'Album',
    valuePath: 'albumName',
    width: '150px'
  }, {
    label: 'Genre(s)',
    valuePath: 'genres',
    cellComponent: 'genre-list',
    width: '150px'
  }],

  setupController(controller, model) {
    let table = new Table(this.get('columns'), model.toArray(), { enableSync: false });

    setProperties(controller, {
      table,
      model
    });
  }
});
