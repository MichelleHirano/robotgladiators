var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;


console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//create function
var fight = function(){
    //this alerts player that the fight is starting
    window.alert("Welcome to Robot Gladiators!");

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

  // Log a resulting message to the console so we know that it worked.
    playerName + "attacked" + enemyName + "." + enemyName + "now has" + enemyHealth + "health remaining."

    // check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } 
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }
    
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

  // Log a resulting message to the console so we know that it worked.
    enemyName + "attacked" + playerName + "." + playerName + "now has" + playerHealth + "health remaining."

    //condition to check player's health
    if (playerHealth <= 0){
        window.alert(playerName + "has died!");
    }

    else{
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }




};

//executes function
fight();