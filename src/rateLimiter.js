// rateLimiter.js
const { RATE_LIMIT } = require('./config');

let taskCountPerSecond = 0;
let taskCountPerMinute = 0;

setInterval(() => taskCountPerSecond = 0, 1000); // reset every second
setInterval(() => taskCountPerMinute = 0, 60000); // reset every minute

function isRateLimited() {
  if (taskCountPerSecond < RATE_LIMIT.MAX_TASKS_PER_SECOND && taskCountPerMinute < RATE_LIMIT.MAX_TASKS_PER_MINUTE) {
    taskCountPerSecond++;
    taskCountPerMinute++;
    return false; // not rate limited
  } else {
    return true; // rate limited
  }
}

module.exports = {
  isRateLimited
};
