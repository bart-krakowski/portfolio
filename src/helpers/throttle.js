export default (func, delay) => {
  let isRunning;
  return function(...args) {
    let context = this;        // store the context of the object that owns this function
    if(!isRunning) {
      isRunning = true;
      func.apply(context,args) // execute the function with the context of the object that owns it
      setTimeout(function() {
        isRunning = false;
      }, delay);
    }
  }
}