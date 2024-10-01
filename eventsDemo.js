import {EventEmitter} from 'events';

const myEmitter = new EventEmitter();

// Listener #1
const greetHandler = (name) => {
    console.log(`Hello ${name}!`);
}

// Listener #2  
const byeHandler = () => {
    console.log('Goodbye!');
}

//Register the listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', byeHandler);

//Emit events
myEmitter.emit('greet', 'John');
myEmitter.emit('goodbye');

//error handler
myEmitter.on('error', (err) => {
    console.log('An error occured', err);
});

//simulate the error
myEmitter.emit('error', new Error('Something went wrong'));
