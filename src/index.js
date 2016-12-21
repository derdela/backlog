const app = require('koa')();
const router = require('koa-router')();
const body = require('koa-body')();

const backlogService = require('./backlog');

router
  .post('/backlog', body, backlogService.create)
  .post('/backlog/:id/tasks', body, backlogService.addTask)
  .get('/backlog/:id/tasks', backlogService.getTasks)
  .get('/backlog', backlogService.list)
  .get('/backlog/:id', backlogService.get)
  .delete('/backlog/:id', backlogService.remove);

app
  .use(router.routes())
  .use(router.allowedMethods());

module.exports = app;
