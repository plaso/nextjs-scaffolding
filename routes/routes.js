const routes = require('next-routes')();
const routeList = require('./routes.json');

Object.keys(routeList).forEach((name) => {
  routes.add({ name, ...routeList[name] });
});

module.exports = routes;