const EventEmitter = require('events')

//Extndemos de la clase Emitter

class MyEmiter extends EventEmitter {}

//Inicializamos un objeto Emitter

const myEmiter = new MyEmiter()

//Creamos el listener

myEmiter.on('evento', () => console.log('Evento recibido...'))

myEmiter.emit('evento')
