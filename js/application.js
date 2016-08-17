$(document).ready(function() {
  game = new Game
  updateRow(game);
  $("body").keydown(function(e) {
    $("#score").text(game.score())
    switch(e.which) {
        case 37: // left
          game.fullLeftMove()
          updateRow(game)
        break;

        case 38: // up
          game.fullUpMove();
          updateRow(game)
        break;

        case 39: // right
          game.fullRightMove();
          updateRow(game)
        break;

        case 40: // down
          game.fullDownMove();
          updateRow(game)
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });

  function updateRow(new_game) {
    $("td").each(function(index) {
      var row = Math.floor(index / 4);
      var col = (index % 4);
      ($(this).text(new_game.board[row][col]))
    })

  }


});
