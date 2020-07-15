
<!Doctype html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Tic-Tac-Toe</title>
  <link href="{{asset('css/style.css')}}" rel="stylesheet" type="text/css"/>
</head>
<body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script  src="{{asset('js/app.js')}}"></script>


<div class="text-center"id="box">
  <header>
    <h1>Tic Tac Toe</h1>
  </header>
  <div>
  <select id="options"> Select
  <option class="x">X</option>
  <option class="o">O</option>
</select>
  </div>

<div>
  <input type="number" disabled id="Xscore" value=0 placeholder="Xscore"> 
  <input type="number" disabled id="Oscore" value=0 placeholder="Oscore">

</div>
<div id="message"></div>
  <ul id="gameBoard">
    <li class="tic"id="0"></li>
    <li class="tic"id="1"></li>
    <li class="tic"id="2"></li>
    <li class="tic"id="3"></li>
    <li class="tic"id="4"></li>
    <li class="tic"id="5"></li>
    <li class="tic"id="6"></li>
    <li class="tic"id="7"></li>
    <li class="tic"id="8"></li>
  </ul>
  <div class="clearfix"></div>
<footer>
  <button id="reset">Reset</button>
  <div>
  <button id="newGame">New Game</button>
  </div>
</footer>
</div>


</body>
</html>