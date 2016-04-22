// eslint-disable-next-line
console.log('i can communicate in many ways');

let timer = null;
const birth = Date.now();

self.postMessage('i am');

const tick = () => {
  self.postMessage(`i exist for ${Date.now() - birth} milliseconds`);
};

const rewindTimer = () => {
  if (timer) {
    clearInterval(timer);
  }
  timer = setInterval(tick, 2000);
};
rewindTimer();

self.addEventListener('message', ({ data: message }) => {
  if (!message) {
    self.postMessage('you no speaking');
    rewindTimer();
  } else if (message === 'exit') {
    self.postMessage('i am not');
    self.close();
  } else {
    self.postMessage(`i answer a message: ${message}`);
    rewindTimer();
  }
});
