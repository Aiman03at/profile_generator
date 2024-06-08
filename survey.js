//create a quick survey app which asks the user a bunch of questions like their favourite music, activity, food, sport, etc
//Using readline( module to take input from command line)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const survey=()=>{
let profile="";
rl.question("What is your name ", (name) => {
  profile=profile+" My name is "+ name + ".";
  rl.question("What's an activity you like doing? ", (activity) => {
    profile=profile+" I like "+ activity + ".";
    rl.question("Which meal is your favourite  ", (meal) => {
      profile=profile+" My favourite meal is "+ meal + ".";
      rl.question("Which sport is your absolute favourite? ", (sport) => {
        profile=profile+" I love to play "+ sport + ".";
        
            rl.question("What is your favourite color", (color) => {
              profile=profile+" My favourite color is "+ color + " ";
              console.log(`${profile} :Thank you for your feedback`);
              rl.close();
            });

          
        
      });
    });
  });
});


};
survey();