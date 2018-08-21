define('ember-inflector/lib/ext/string', ['exports', 'ember-inflector/lib/system/string'], function (exports, _emberInflectorLibSystemString) {
  'use strict';

  if (Ember.EXTEND_PROTOTYPES === true || Ember.EXTEND_PROTOTYPES.String) {
    /**
      See {{#crossLink "Ember.String/pluralize"}}{{/crossLink}}
       @method pluralize
      @for String
    */
    Object.defineProperty(String.prototype, 'pluralize', {
      get: function get() {
        Ember.deprecate('String.prototype.pluralize() is deprecated. Please explicitly: import { pluralize } from \'ember-inflector\';', false, {
          id: 'ember-inflector.globals',
          until: '3.0.0'
        });

        return function () {
          return (0, _emberInflectorLibSystemString.pluralize)(this);
        };
      }
    });

    /**
      See {{#crossLink "Ember.String/singularize"}}{{/crossLink}}
       @method singularize
      @for String
    */
    Object.defineProperty(String.prototype, 'singularize', {
      get: function get() {
        Ember.deprecate('String.prototype.singularize() is deprecated. Please explicitly: import { singularize } from \'ember-inflector\';', false, {
          id: 'ember-inflector.globals',
          until: '3.0.0'
        });

        return function () {
          return (0, _emberInflectorLibSystemString.singularize)(this);
        };
      }
    });
  }
});