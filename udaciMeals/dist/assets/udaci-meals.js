"use strict";



;define('udaci-meals/app', ['exports', 'udaci-meals/resolver', 'ember-load-initializers', 'udaci-meals/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
;define('udaci-meals/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define('udaci-meals/helpers/app-version', ['exports', 'udaci-meals/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
;define('udaci-meals/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
;define('udaci-meals/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
;define('udaci-meals/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'udaci-meals/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define('udaci-meals/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('udaci-meals/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define('udaci-meals/initializers/export-application-global', ['exports', 'udaci-meals/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define("udaci-meals/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
;define('udaci-meals/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('udaci-meals/router', ['exports', 'udaci-meals/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('menu');
    this.route('item', { path: 'item/:item_name' }, function () {
      this.route('nutrition');
    });
  });

  exports.default = Router;
});
;define('udaci-meals/routes/item', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model(params) {
      return Ember.$.get('/menu/' + params.item_name + '.json');
    }
  });
});
;define('udaci-meals/routes/item/nutrition', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('udaci-meals/routes/menu', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model() {
      // same as: model: function() {, just new syntax
      return Ember.$.get('/menu/menu.json');
      // same as: return Ember.$.get('/menu/menu.json');
    }
  });
});
;define('udaci-meals/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("udaci-meals/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "kIxYGJLl", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "udaci-meals/templates/application.hbs" } });
});
;define("udaci-meals/templates/item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "IXCeNQE6", "block": "{\"symbols\":[],\"statements\":[[7,\"h4\"],[9],[1,[23,[\"model\",\"name\"]],false],[10],[0,\"\\n\"],[7,\"img\"],[11,\"width\",\"50%\"],[12,\"src\",[28,[\"/assets/images/\",[23,[\"model\",\"image\"]]]]],[12,\"alt\",[28,[[23,[\"model\",\"name\"]]]]],[9],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[23,[\"model\",\"rating\"]],false],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"\\n  \"],[1,[23,[\"model\",\"description\"]],false],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"\\n  \"],[2,\" <a href=\\\"{{model.id}}/nutrition\\\">Nutrition</a> \"],[0,\"\\n  \"],[2,\" using link-to provided by Ember so page load faster \"],[0,\"\\n  \"],[4,\"link-to\",[\"item.nutrition\"],null,{\"statements\":[[0,\"Nutrition\"]],\"parameters\":[]},null],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "udaci-meals/templates/item.hbs" } });
});
;define("udaci-meals/templates/item/nutrition", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Kli5OUDm", "block": "{\"symbols\":[],\"statements\":[[7,\"h4\"],[9],[0,\"Nutrition Facts\"],[10],[0,\"\\n\"],[7,\"dl\"],[9],[0,\"\\n  \"],[7,\"dt\"],[9],[0,\"Calories\"],[10],[0,\"\\n  \"],[7,\"dd\"],[9],[0,\"670\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "udaci-meals/templates/item/nutrition.hbs" } });
});
;define("udaci-meals/templates/menu", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "87rFrpzm", "block": "{\"symbols\":[\"item\"],\"statements\":[[0,\"Who's hungry?\\n\\n\"],[1,[27,\"log\",[[23,[\"model\"]]],null],false],[0,\"\\n\\n\"],[7,\"ul\"],[11,\"class\",\"items-container\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"model\"]]],null,{\"statements\":[[0,\"  \"],[7,\"li\"],[11,\"class\",\"menu-item\"],[9],[0,\"\\n    \"],[7,\"h4\"],[9],[1,[22,1,[\"name\"]],false],[10],[0,\"\\n    \"],[7,\"img\"],[12,\"src\",[28,[\"/assets/images/\",[22,1,[\"image\"]]]]],[12,\"alt\",[28,[[22,1,[\"name\"]]]]],[9],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"\\n      \"],[2,\" <a href=\\\"/item/{{item.id}}\\\">Details</a> \"],[0,\"\\n      \"],[4,\"link-to\",[\"item\",[22,1,[\"id\"]]],null,{\"statements\":[[0,\"Detail\"]],\"parameters\":[]},null],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "udaci-meals/templates/menu.hbs" } });
});
;

;define('udaci-meals/config/environment', [], function() {
  var prefix = 'udaci-meals';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("udaci-meals/app")["default"].create({"name":"udaci-meals","version":"0.0.0+6321b097"});
          }
        
//# sourceMappingURL=udaci-meals.map
