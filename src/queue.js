const taskQueue = [];
const { isRateLimited } = require('./rateLimiter');
const { task } = require('./taskRunner');
const fs = require('fs');
const { LOG_FILE_PATH } = require('./config');

function processQueue() {
  if (taskQueue.length > 0 && !isRateLimited()) {
    const { user_id } = taskQueue.shift();
    task(user_id).then(() => {
      fs.appendFileSync(LOG_FILE_PATH, `${user_id}-task completed at-${Date.now()}\n`);
    });
  }
}

setInterval(processQueue, 1000); // process queue every second

function addToQueue(user_id) {
  taskQueue.push({ user_id });
}

module.exports = {
  addToQueue
};
