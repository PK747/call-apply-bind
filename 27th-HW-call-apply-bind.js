//call vs apply vs bind

//call and apply will invoke the argument and pass the context 
// ..directly to function and executes immidiately.


//bind will get a copy of the function requested and will execute only when it is invoked in future


//bind returns a copy

function greet() {
    return `Hello ${this.name}`
  }
  const person = {
    name: "Lawrence Eagles"
  };
  
  
  console.log(greet.call(person)); // returns Hello Lawrence Eagles
  console.log(greet.apply(person)); // returns Hello Lawrence Eagles
  
  
  const greet2 = greet.bind(person) // returns a new copy of greet with this binding
  console.log(greet.bind(person)); // returns function greet()