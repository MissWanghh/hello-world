'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _header = require('./components/header.vue');

var _header2 = _interopRequireDefault(_header);

var _home = require('./views/home.vue');

var _home2 = _interopRequireDefault(_home);

var _about = require('./views/about.vue');

var _about2 = _interopRequireDefault(_about);

var _letConst = require('./views/views_children/letConst.vue');

var _letConst2 = _interopRequireDefault(_letConst);

var _classExtendsSuper = require('./views/views_children/classExtendsSuper.vue');

var _classExtendsSuper2 = _interopRequireDefault(_classExtendsSuper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//路由插件
_vue2.default.use(_vueRouter2.default); /**
                                         * Created by wanghonghu on 2017/5/12.
                                         */
// 引用模板
//vue
exports.default = new _vueRouter2.default({
    routes: [{
        path: '/',
        component: _home2.default
    }, {
        path: '/about',
        component: _about2.default
    }, {
        path: '/letConst',
        component: _letConst2.default
    }, {
        path: '/classExtendsSuper',
        component: _classExtendsSuper2.default
    }]
});

//# sourceMappingURL=routes-compiled.js.map