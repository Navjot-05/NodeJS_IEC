// priority wise of the below code

// change it's position but the content outcome will be fixed due to it's priority due to asynchrony due to event _loop steps
console.log("1. start");

process.nextTick(()=>console.log("2. process start"));

Promise.resolve().then(()=>console.log("3. promise step"));

setTimeout(()=>console.log("4. setTimeout Step"));

setImmediate(()=> console.log("5. setImmediate Step"));

console.log("6. ending Step");