$(document).ready(function () {

  let computerTurn = $("#options option:not(:selected)").val();
  let gameOn = true;
  let xScore = oScore = 0;
  let count = 0; //Incremental value to stop computerTurn in last move
  let player = $("#options option:selected").val();
  let arr =[[],[],[]] //2D Array keep moves for player & computer


//where player can choose X or O
  let start = $("select").on("change", function () {
    player = this.value;
    computerTurn = $("#options option:not(:selected)").val();
    $("#message").html(`Player ${player} gets to start!`);
    return computerTurn, player;
  });

  $("#message").html(`Player ${player} gets to start!`); //tell who is the player

  //Start of the game 
  $("#gameBoard li").click(function () {
    gameOn = false
    if ($(this).text() === "") {
      $("select").attr("disabled", true);
      $(this).text(player);
      setTimeout(()=>{
        arrayPush(this.id)
        if(!gameOn) computersTurn(this.id);
      },100)
     
    }
  });

  //Recursive function calc computerMove
  function calcComputerMove(id){
    let computerMove = (Math.random() * 8).toFixed();
    if ($("#"+computerMove).text()!= "") {
      return calcComputerMove(id)    
    }else{
      return computerMove;
    }
  }

  //Push to Array Player and Computer Movement
  function arrayPush(id){
    if(id >= 0&& id<=2) arr[0][id] = $("#"+id).text();
    else if(id >=3 && id<=5) arr[1][id-3] = $("#"+id).text();
    else if(id>=6 && id<=8)  arr[2][id-6] = $("#"+id).text();
    if ($("ul li:empty").length < 5 ){
      if (checkWinners() === true){
        // xScore
        $("#"+id).text() == "X" ? xScore++ : xScore;
        $("#Xscore").val(xScore)
        $("#"+id).text() == "O" ? oScore++ : oScore;
        $("#Oscore").val(oScore)
        alert("player "+ $("#"+id).text()+" winners");
            reset();
      }
    } 
  }

  //Add ComputerTurn in li
  function computersTurn(id) {
    if(count == 4) {
      alert("Draw X O")
      reset();
    }
    else if (count !== 4) {
      count ++;
      let move = calcComputerMove(id)
      $("#" + move).text(computerTurn);
      arrayPush(move)
    }
  }

  //Check winner Player
  function checkWinners(){
    //Check By Rows
    let r =c =0;
    for ( ;r < 3; r++) {
      console.log(arr[r],r)
      if ((arr[r][0]!=null)&&(arr[r][0] === arr[r][1])&&(arr[r][1]===arr[r][2]))
      {
        console.log("win1",r)
        return true ;
      } 
    }

    //Check By Columns
    for( ;c < 3; c++) {
      if ((arr[0][c]!=null)&&(arr[0][c] === arr[1][c] )&&(arr[0][c]===arr[2][c] )&& (arr[0][c] !== '')){ console.log("win2")
      return true;}   
    }

    //Check from Top Left to Bottom Right
    if ((arr[0][0]!=null)&&(arr[0][0] === arr[1][1]) && (arr[1][1] === arr[2][2] )){
      console.log("win3")
      return true;
    } 

    //Check from Top Left to Bottom Right
    else if ((arr[0][2]!=null)&&(arr[0][2] === arr[1][1]) &&(arr[1][1] === arr[2][0])){
      console.log("win4")
      return true;

    } 
      return false;
  }

  //Reset Game
  function reset() {
    $('ul li').empty();
    gameOn = true;
    count = 0;
    $("select").attr("disabled", false);
    arr = [[],[],[]]
  }

  //Click Event on Reset Button 
  $("#reset").click(function () {
    reset()
    });

    $("#newGame").click(function () {
      reset()
      $("#Xscore").val(0)
      $("#Oscore").val(0)




    });
});
