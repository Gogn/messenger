/*
 * This is example of data generator.
 * Inject this code into your application to receive random messages at random time.
 * You can rewrite it according to your needs.
 * */

const loremIpsum = require('lorem-ipsum').loremIpsum;

let init = true;
let id = 0;
const roomIds = ['Rick Sanchez', 'Morty Smith', 'Dipper Pines', 'Mabel Pines', 'Spongebob Squarepants'];
const channelIds = ['VK', 'OK', 'FB'];

// emit();

export function emit() {
  if (init) {
    init = false;
  } else {
    return handle({
      id: ++id,
      roomId: randomChoose(roomIds),
      channelId: randomChoose(channelIds),
      body: loremIpsum({
        count: randomBetween(1, 5),
        format: 'plain',
        units: randomChoose(['sentences', 'words']),
      }),
      ts: new Date(),
    });
  }
  return new Promise((resolve,reject) => setTimeout(()=>resolve(emit()), randomBetween(1000, 1000)) )
}

function randomBetween(min, max) {
  return Math.floor((max - min + 1) * Math.random()) + min;
}

function randomChoose(array) {
  return array[randomBetween(0, array.length - 1)];
}

function handle(message) {
  // FIXME Your code goes here
  // console.log(message);
  return message
}
