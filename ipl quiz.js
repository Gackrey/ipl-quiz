const rs = require('readline-sync');
const chalk = require('chalk');

questionlist = [
    {
        question: 'Which team has played in the most IPL finals after Chennai Super Kings? ',
        options: ['Mumbai Indians', 'Royal Challengers Bangalore', 'Kolkata Knight Riders'],
        answer: 1
    },
    {
        question: 'Which is the only IPL game in which the Super Over too ended in a tie? ',
        options: ['Sunrisers Hyderabad vs Kolkata Knight Riders, 2013', 'Kolkata Knight Riders vs Rajasthan Royals, 2014', 'Rajasthan Royals vs Kings XI Punjab, 2015'],
        answer: 2
    },
    {
        question: 'In which season did Virat Kohli score all his IPL centuries? ',
        options: ['IPL 2013', 'IPL 2014', 'IPL 2016'],
        answer: 3
    },
    {
        question: 'Against which team were the most centuries scored in IPL 2018? ',
        options: ['Mumbai Indians', 'Rajasthan Royals', 'Sunrisers Hyderabad'],
        answer: 3
    },
    {
        question: 'Which Indian player has the fastest 100 in IPL? ',
        options: ['Yusuf Pathan', 'Virat Kohli', 'Virender Sehwag'],
        answer: 1
    },
    {
        question: 'Which Australian has the best bowling figures in the IPL? ',
        options: ['Andrew Tye', 'Adam Zampa', 'James Faulkner'],
        answer: 2
    }
];
let highscore = [];
function play() {
    let score = 0;
    let name = rs.question(chalk.bgMagenta.yellow.bold("What's your name? "));
    console.log(`Hi ${name} Welcome to IPL Quiz`);
    console.log(chalk.bgMagenta.yellow.bold("Rules:"));
    console.log(chalk.bgBlueBright.yellowBright('There are 6 questions\nCorrect answer gives you 2 point\nWrong answer deducts 1 point.'));
    for (let i = 0; i < questionlist.length; i++) {
        let index = rs.keyInSelect(questionlist[i].options, chalk.blueBright(questionlist[i].question));
        if (index + 1 == questionlist[i].answer) {
            console.log(chalk.green("Correct"));
            score += 2;
        }
        else if(index+1 == 0){
            console.log(chalk.red('Question Cancelled'));
        }
        else {
            console.log(chalk.red('Wrong'));
            --score;
        }
        console.log(chalk.green.bold('Current Score: '+score));
        console.log('-------------------------');
    }
    console.log(chalk.bgRedBright.bold(`${name}'s Score: ${score}`));
    if(highscore.length<1){
        console.log(chalk.yellow.bold("Congratulation!!! Its the highest score"));
        temp = {name:name,score:score};
        highscore.push(temp);
       }
    else{
        flag = 0;
        for (let i = 0; i < highscore.length; i++) {
            if(score == highscore[i].score){
                flag = 1;
                console.log(chalk.yellow.bold("Congratulation!!! Its the highest score"));
                temp = {name:name,score:score};
                highscore.push(temp);
                break;
            }
            else if(score > highscore[i].score){
                flag = 1;
                highscore = [];
                console.log(chalk.yellow.bold("Congratulation!!! Its the highest score"));
                temp = {name:name,score:score};
                highscore.push(temp);
                break;
            }
        }
        if(flag == 0){
            console.log(chalk.bgMagenta.yellow.bold("HighScores:"));
            for (let i = 0; i < highscore.length; i++) {
                console.log(`Name:${highscore[i].name} Score:${highscore[i].score}`);
            }
        }
    }
}
play();
while(true){
    if(rs.keyInYN(chalk.yellow.bold("Wanna play again? "))){
        play();
    }
    else{
        console.log(chalk.green.bold("Thanks for playing with us"));
        break;
    }
}