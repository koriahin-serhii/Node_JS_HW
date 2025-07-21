const fs = require('fs').promises
const path = require('path')

function logMessage(message) {
  const logLine = `${new Date().toISOString()} - ${message}\n`
  const logFilePath = path.join(__dirname, 'log.txt')

  fs.appendFile(logFilePath, logLine, (err) => {
    if (err) {
      console.error('Error writing to log file:', err)
    }
  })
  console.log('Log message written:', logLine.trim())
  return logLine.trim()
}

module.exports = {
  logMessage,
}
