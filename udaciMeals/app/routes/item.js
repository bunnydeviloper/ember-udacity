import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
  model(params) {
    return $.get('/menu/' + params.item_name + '.json');
  }
});
