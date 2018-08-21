import Component from '@ember/component';
import {inject} from '@ember/service';

export default Component.extend({
  orderManager: inject('order-manager'),
  classNames: ['menu-item'],
  tagName: 'li',
  mealCategory: 'breakfast',
  actions: {
    changeCategory(category) {
      this.set('mealCategory', category);
    },
    chooseItem(menuItemName) {
      this.get('orderManager').chooseMenuOption(this.get('mealCategory'), menuItemName);
    }
  }

});
