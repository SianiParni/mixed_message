let userName = 'Siani';
let userQuestion = '\'Am I going to be successful?\'';
let randomNumber = Math.floor(Math.random()*8); 
//let randomNumber = 1;
let eightBall = '';



userName ? console.log('Hello ' + userName + '!') : console.log('Hello!');

console.log(userName + ' says ' + userQuestion);

switch(randomNumber) {
  case 1:
    eightBall = 'It is certain';
  break;
 case 2:
    eightBall = 'It is decidedly so';
  break;
 case 3:
    eightBall = 'Reply hazy, try again';
  break;
 case 4:
    eightBall = 'Cannot predict now';
  break;
 case 5:
    eightBall = 'Do not count on it';
  break;
 case 6:
    eightBall = 'My sources say no';
  break;
 case 7:
    eightBall = 'Outlook not so good';
  break;
 case 0:
    eightBall = 'Signs point to yes';
  break;  
  default:
    console.log('I don\'t know');
}

console.log(eightBall);