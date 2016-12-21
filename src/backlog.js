const backlogs = [];

function* create() {
  backlogs.push({
    id: backlogs.length,
    title: this.request.body.title,
    tasks: []
  });

  this.status = 201;
  this.body = backlogs[backlogs.length - 1];
}

function* list() {
  this.status = 200;
  this.body = backlogs;
}

function* get() {
  if (!backlogs[this.params.id]) {
    this.status = 404;
    return;
  }

  this.status = 200;
  this.body = backlogs[this.params.id];
}

function* remove() {
  this.status = 204;
  delete backlogs[this.params.id];
}

function* addTask() {
  const backlog = backlogs[this.params.id];
  backlog.tasks.push(this.request.body);
  this.body = backlog.tasks;
}

function* getTasks() {
  const backlog = backlogs[this.params.id];
  this.body = backlog.tasks;
}

module.exports = {create, list, get, remove, addTask, getTasks};