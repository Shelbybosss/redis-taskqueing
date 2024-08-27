// config.js
module.exports = {
  RATE_LIMIT: {
    MAX_TASKS_PER_SECOND: 1, // 1 task per second
    MAX_TASKS_PER_MINUTE: 20 // 20 tasks per minute
  },
  PORT: 3000,
  LOG_FILE_PATH: './task_logs.txt'
};
