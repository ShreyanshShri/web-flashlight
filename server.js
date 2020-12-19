const socketio = require('socket.io')
const http = require('http')
const express = require('express')
const app = express()

const server = http.createServer(app)
const io = socketio(server)

const { Board, Led } = require("johnny-five")
const board = new Board()

// declare static files
app.use(express.static('./public'))

board.on("ready", () => {
  let switchedOn = true
  // Create an Led on pin 13
  console.log('We are connected to arduino')
  const led = new Led(13)
  // Blink every half second
  led.on()
  io.on('connection', socket => {
    socket.on('switch_led', () => {
      if(switchedOn) {
        led.on()
      } else {
        led.off()
      }
      switchedOn = !switchedOn
    })
  })

})

// run the server
const PORT = process.env.PORT || 3000
server.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`))