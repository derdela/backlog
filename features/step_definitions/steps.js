const
  {defineSupportCode} = require('cucumber'),
  should = require('should');

defineSupportCode(({Given, When, Then}) => {
  const memory = {};
  Given('I have a empty Backlog with id {id:stringInDoubleQuotes}', function (id) {
    return this.driver.post('/backlog').send({title: id}).expect(201)
      .then(res => memory[id] = res.body.id);
  });

  When('I add a task with the title {title:stringInDoubleQuotes} to the backlog {id:stringInDoubleQuotes}', function (title, id) {
    return this.driver.post(`/backlog/${memory[id]}/tasks`).send({title: title}).expect(200);
  });

  Then('The backlog with id {id:stringInDoubleQuotes} should have the following tasks:', function (id, table) {
    return this.driver.get(`/backlog/${memory[id]}/tasks`).expect(200)
      .then(res => res.body.should.containDeep(table.hashes()))
  });
});