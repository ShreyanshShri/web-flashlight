const socket = io('http://192.168.43.138:3000/')
document.getElementById('btn').addEventListener('click', () => {
      socket.emit('switch_led')  
})