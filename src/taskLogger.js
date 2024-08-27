const fs = require('fs');
const path = require('path');
const logFilePath = path.join(__dirname, '../logs/task_log.txt');

function processTask(task) {
  const logEntry = `${task.user_id}-task completed at-${Date.now()}\n`;
  fs.appendFileSync(logFilePath, logEntry);
  console.log(logEntry);
}

module.exports = { processTask };
