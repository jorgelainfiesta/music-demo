import Route from '@ember/routing/route';
import Table from 'ember-light-table';
import { setProperties, get, set } from '@ember/object';
import { task } from 'ember-concurrency';

export default Route.extend({
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
    width: '60px'
  }, {
    label: 'Album',
    valuePath: 'albumName',
    width: '150px'
  }],

  model() {
    return this.store.findAll('entry');
  },

  setupController(controller, model) {
    let table = new Table(this.get('columns'), model.toArray(), { enableSync: false });
    let createEntry = get(this, 'createEntry');

    setProperties(controller, {
      createEntry,
      table,
      model
    });
  },

  createEntry: task(function*(entryData) {
    let newEntry = this.store.createRecord('entry', entryData);
    
    yield newEntry.save();

    let table = get(this, 'controller.table');
    table.addRow(newEntry);

    set(this, 'controller.addingEntry', false);
  })
});
