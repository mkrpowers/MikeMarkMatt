// Different Arrays to use:
var computerNames = ['Godzilla', 'MasterBlater', 'Skeletor', 'Aku', 'Mandark', 'Voldemort', 'MoJo', 'Mr. Burns', 'Big Brother'];
var rock = ['rock1.jpg', 'rock2.jpg', 'rock3.jpg', 'rock4.jpg'];
var paper = ['paper1.jpg', 'paper2.jpg', 'paper3.jpg', 'paper4.jpg'];
var scissor = ['scissors1.jpg', 'scissors2.jpg', 'scissors3.jpg', 'scissors4.jpg'];
var playChoice = ['rock', 'paper', 'scissors'];

// Get the Names
var playerName = prompt("And What's Your Name?");
var computerName = randomChoice(computerNames);

var playerScore = 0;
var computerScore = 0;
var computerThrows = '';
var playerThrows = '';
var playImage = '';
var computerImage = '';

$('#rock').click(function() {
  playerThrows = "rock";
  gamePlay(playerThrows,computerThrows);
});
$('#paper').click(function() {
  playerThrows = "paper";
  gamePlay(playerThrows,computerThrows);
});
$('#scissors').click(function() {
  playerThrows = "scissors";
  gamePlay(playerThrows,computerThrows);
});

$('#computer_name').text(computerName + ": ");
$('#player_name').text(playerName + ": ");
 
$('#player').text(playerName);
$('#computer').text(computerName);



//Takes in an array of objects and returns one randomly
function randomChoice(arrayList){
  return arrayList[Math.floor(Math.random() * arrayList.length)];
}


function gamePlay(playerThrows, computerThrows){
  if (playerThrows == 'rock')
    playImage = randomChoice(rock);
  else if (playerThrows == 'paper')
    playImage = randomChoice(paper);
  else
    playImage = randomChoice(scissor);
  
  computerThrows = randomChoice(playChoice);
  if (computerThrows == 'rock')
    computerImage = randomChoice(rock);
  else if (computerThrows == 'paper')
    computerImage = randomChoice(paper);
  else
    computerImage = randomChoice(scissor);
  
  theWinner(playerThrows,computerThrows);
  $('#showing').removeClass("toshow")
  $('#player_pic').attr('src', 'assets/images/' + playerThrows + '/' + playImage);
  $('#computer_pic').attr('src', 'assets/images/' + computerThrows + '/' + computerImage);
  $('#player_score').text(playerScore);
  $('#computer_score').text(computerScore);
}


function theWinner(player, computer){
  if (player == computer){
    $('#result').text("It's a Tie!");
  }
  else if(player == "paper" && computer == "rock"){
    playerScore++;
    $('#result').text(playerName + "'s Paper Covers " + computerName + "'s Rock");
  }
  else if (computer == "paper" && player =="rock"){
    computerScore++;
    $('#result').text(computerName + "'s Paper Covers " + playerName + "'s Rock");
  }
  else if (player == "rock" && computer =="scissors"){
    playerScore++;
    $('#result').text(playerName + "'s Rock Blunts " + computerName + "'s Scissors");
  }
  else if (computer == "rock" && player =="scissors"){
    computerScore++;
    $('#result').text(computerName + "'s Rock Blunts " + playerName + "'s Scissors");
  }
  else if (player == "scissors" && computer =="paper"){
    playerScore++;
    $('#result').text(playerName + "'s Scissors Cuts " + computerName + "'s Paper");
  }
  else if (computer == "scissors" && player =="paper"){
    computerScore++;
    $('#result').text(computerName + "'s Scissors Cuts " + playerName + "'s Paper");
  }
}


