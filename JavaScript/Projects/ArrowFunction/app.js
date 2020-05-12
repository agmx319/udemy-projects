// const sayHello = function() {
//   console.log("Hello");
// }

const sayHello = () => console.log("Hello Arrow");

const sayHelloReturn = () => "Hello Arrow";

const sayHelloName = name => console.log(`Hello ${name}`);

const sayHelloFullName = (fname, lname) => console.log(`Hello ${fname} ${lname}`);

sayHello();

console.log(sayHelloReturn());
sayHelloName("TeeToo");
sayHelloFullName('Bo', 'Ness');

users = ['Nathan', 'Lee', 'Bracken'];

const nameLengths = users.map(function(name) {
  return name.length;
});

const nameLengthsShort = users.map(name => name.length);



console.log(nameLengthsShort);