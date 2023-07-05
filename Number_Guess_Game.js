   //Number Guess Game//
//------------------------//

let num
let ran = Math.floor(Math.random()*100+1);
// console.log(ran);
let chance = 0;
while(num!=ran){
  num =prompt("Guess a number between 1 to 100");
  num=Number.parseInt(num);
  chance++;
    if(num==ran){
    console.log("\nYour Guess Number ",num, " is correct");
      break;
    }
   else if(num>ran){
     console.log("You Number is greater than Random Number\nTry Again");
   }
  else{
    console.log("You Number is smaller than Random Number\nTry Again");
  }
}
console.log("     Congratulation!!\n      You Win");
console.log("----Your score is ", (100-chance)," ------");




