import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _270e7fb1 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _e44385ce = () => interopDefault(import('..\\pages\\blank-page.vue' /* webpackChunkName: "pages/blank-page" */))
const _e2842382 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _682842a8 = () => interopDefault(import('..\\pages\\Login.vue' /* webpackChunkName: "pages/Login" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/ar",
    component: _270e7fb1,
    name: "index___ar"
  }, {
    path: "/blank-page",
    component: _e44385ce,
    name: "blank-page___en"
  }, {
    path: "/contact",
    component: _e2842382,
    name: "contact___en"
  }, {
    path: "/de",
    component: _270e7fb1,
    name: "index___de"
  }, {
    path: "/id",
    component: _270e7fb1,
    name: "index___id"
  }, {
    path: "/Login",
    component: _682842a8,
    name: "Login___en"
  }, {
    path: "/pt",
    component: _270e7fb1,
    name: "index___pt"
  }, {
    path: "/zh",
    component: _270e7fb1,
    name: "index___zh"
  }, {
    path: "/ar/blank-page",
    component: _e44385ce,
    name: "blank-page___ar"
  }, {
    path: "/ar/contact",
    component: _e2842382,
    name: "contact___ar"
  }, {
    path: "/ar/Login",
    component: _682842a8,
    name: "Login___ar"
  }, {
    path: "/de/blank-page",
    component: _e44385ce,
    name: "blank-page___de"
  }, {
    path: "/de/contact",
    component: _e2842382,
    name: "contact___de"
  }, {
    path: "/de/Login",
    component: _682842a8,
    name: "Login___de"
  }, {
    path: "/id/blank-page",
    component: _e44385ce,
    name: "blank-page___id"
  }, {
    path: "/id/contact",
    component: _e2842382,
    name: "contact___id"
  }, {
    path: "/id/Login",
    component: _682842a8,
    name: "Login___id"
  }, {
    path: "/pt/blank-page",
    component: _e44385ce,
    name: "blank-page___pt"
  }, {
    path: "/pt/contact",
    component: _e2842382,
    name: "contact___pt"
  }, {
    path: "/pt/Login",
    component: _682842a8,
    name: "Login___pt"
  }, {
    path: "/zh/blank-page",
    component: _e44385ce,
    name: "blank-page___zh"
  }, {
    path: "/zh/contact",
    component: _e2842382,
    name: "contact___zh"
  }, {
    path: "/zh/Login",
    component: _682842a8,
    name: "Login___zh"
  }, {
    path: "/",
    component: _270e7fb1,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
