const wait = (ms) =>
  new Promise((resolve) => {
    console.log(`calling wait with ${ms} ms`);
    setTimeout(resolve, ms);
  });

console.log("Before wait 100ms");
wait(100).then(() => console.log("After 100ms promise resolves"));
console.log("After wait(100)");

console.log("Before wait 800ms");
wait(800).then(() => console.log("After 800ms promise resolves"));
console.log("After wait(800)");

const s = new Date().getSeconds();

setTimeout(function () {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500); // The time value represents the (minimum) delay after which the message will actually be pushed into the queue.

while (true) {
  if (new Date().getSeconds() - s >= 2) {
    console.log("Good, looped for 2 seconds");
    break;
  }
}
