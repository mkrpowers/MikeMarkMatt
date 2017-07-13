/*
<script type="text/javascript">
 var images = ['OUT01ari.jpg', 'OUT02adobe.jpg', 'OUT03alife.jpg', 'OUT04chinup.jpg', 'OUT05datenightwinecologne.jpg', 'OUT06officechair.jpg', 'OUT07printer.jpg', 'OUT08whitewall.jpg', 'OUT09umbrella.jpg', 'OUT10converse.jpg', 'OUT11wardrobebar.jpg'];
 $('#background').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});
</script>
*/

// Different Arrays to use:
var computerNames = ['Godzilla', 'MasterBlater', 'Skeletor', 'Aku', 'Mandark', 'Voldemort', 'MoJo', 'Mr. Burns', 'Big Brother'];
var rock = ['rock1.jpg', 'rock2.jpg', 'rock3.jpg', 'rock4.jpg'];
var paper = ['paper1.jpg', 'paper2.jpg', 'paper3.jpg', 'paper4.jpg'];
var scissor = ['scissors1.jpg', 'scissors2.jpg', 'scissors3.jpg', 'scissors4.jpg'];
var playChoice = ['rock', 'paper', 'scissors'];

// var playerName = prompt("And What's Your Name?");
var playerName = "George";
var computerName = randomChoice(computerNames);

var playerScore = 0;
var computerScore = 0;
var playerThrows = 'rock'
var computerThrows = randomChoice(playChoice);

$('#rock').click(function() {
  playerThrows = "rock";
  $('#rock').text("YO");
});
$('#paper').click(function() {
  playerThrows = "paper";
});
$('#scissors').click(function() {
  playerThrows = "scissors";
});



if (playerThrows == 'rock')
  var playImage = randomChoice(rock);
else if (playerThrows == 'paper')
  var playImage = randomChoice(paper);
else
  var playImage = randomChoice(scissor);

if (computerThrows == 'rock')
  var computerImage = randomChoice(rock);
else if (computerThrows == 'paper')
  var computerImage = randomChoice(paper);
else
  var computerImage = randomChoice(scissor);


$('#computer_name').text(computerName + ": ");
$('#player_name').text(playerName + ": ");
 
$('#player').text(playerName);
$('#computer').text(computerName);

theWinner(playerThrows,computerThrows)

$('#player_score').text(playerScore);
$('#computer_score').text(computerScore);

$('#player_pic').attr('src', 'assets/images/' + playerThrows + '/' + playImage);

$('#computer_pic').attr('src', 'assets/images/' + computerThrows + '/' + computerImage);



//Takes in an array of objects and returns one randomly
function randomChoice(arrayList){
  return arrayList[Math.floor(Math.random() * arrayList.length)];
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


