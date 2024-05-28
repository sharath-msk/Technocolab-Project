const prompt = require('prompt-sync')();

let userName = prompt("enter your name : ");

let res = userName.length ? `Hello, ${userName}` : "Hello"
console.log(res);
let userQuestion = prompt("Enter the question : ")
console.log(`Question asked by the ${userName} : ${userQuestion}`);

let rand = Math.floor(Math.random() * 8);
let eightBall = "";

switch(rand){
    case 0: 
      eightBall = 'It is certain';
      break;
    case 1: 
      eightBall = 'It is decidedly so';
      break;
    case 2: 
      eightBall = 'Reply hazy try again';
      break;
    case 3: 
      eightBall = 'Cannot predict now';
      break;
    case 4: 
      eightBall = 'Do not count on it';
      break;
    case 5: 
      eightBall = 'My sources say no';
      break;
    case 6: 
      eightBall = 'Outlook not so good';
      break;
    case 7: 
      eightBall = 'Signs point to yes';
      break;
    default: break;
    
        
}

console.log(`The Magic Eight Ball’s answer is ${eightBall}`)
