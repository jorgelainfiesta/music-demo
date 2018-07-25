import Component from '@ember/component';
import { get, set } from '@ember/object';

export default Component.extend({
  entryData: {},
  _entryData: {},

  init() {
    this._super(...arguments);
    set(this, '_entryData', get(this, 'entryData'));
  },

  actions: {
    updateData(key, value) {
      let entryData = get(this, '_entryData');
      set(entryData, key, value);
    }
  }
});
