
const
  app = require('./../../src/index.js'),
  supertest = require('supertest'),
  {defineSupportCode} = require('cucumber');

function CustomWorld() {
  this.driver = supertest(app.listen());
}

defineSupportCode(function ({setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
});