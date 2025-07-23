const EventEmitter = require('events')
const chatEmitter = new EventEmitter()

const sendMessage = (userName, message, emitter) => {
  emitter.emit('message', { userName, message })
}

chatEmitter.on('message', (data) => {
    console.log(`${data.userName}: ${data.message}`)
})


sendMessage('Bob', 'Hello world', chatEmitter)
sendMessage('Bib', 'Hello Bob', chatEmitter)
sendMessage('Bub', 'Hello Bib', chatEmitter)
