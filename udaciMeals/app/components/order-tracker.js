import Component from '@ember/component';
import {inject} from '@ember/service';

export default Component.extend({
  orderManager: inject('order-manager'),
  actions: {
    setDayTo(day) {
      this.get('orderManager').setSelectedDayTo(day);
    },
    remove(day, menuCategory) {
      this.get('orderManager').removeMenuOption(day, menuCategory);
    }
  }
});
