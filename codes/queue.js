const Queue = function () {
  this.queue = [];
};

Queue.prototype.enqueue = function (item) {
  this.queue.push(item);
};

Queue.prototype.dequeue = function () {
  if (this.isEmpty()) return "This is an empty queue!";
  return this.queue.shift();
};

Queue.prototype.front = function () {
  if (this.isEmpty()) return "This is an empty queue!";
  return this.queue[0];
};

Queue.prototype.size = function () {
  return this.queue.length;
};

Queue.prototype.isEmpty = function () {
  return this.queue.length === 0;
};
