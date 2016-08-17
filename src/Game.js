function Game() {
  this.board = [[0,0,0,0],
                [0,2,2,0],
                [0,0,0,0],
                [0,0,0,0]]
}

Game.prototype.score = function() {
  score = 0;
  for(i = 0; i < this.board.length; i++) {
    for (j = 0; j < this.board.length; j++ ) {
      score += this.board[i][j];
    }
  }
  return score
}
// KNOWS WHERE TO INSERT RANDOM S***

Game.prototype.openSpots = function(){
  var indexes = []
  for (var i = 0; i < this.board.length; i++) {
    for (var j = 0; j < this.board[0].length; j++ )
      if (this.board[i][j] == 0) {
        indexes.push([i,j])
      }
    }
  return indexes
  }

Game.prototype.insert = function() {
  var possibilities = this.openSpots();
  var position = possibilities[Math.floor(Math.random()*possibilities.length)];
  this.board[position[0]][position[1]] = 2
}
// MOVES THINGS ALL AROUND TOWN

Game.prototype.moveRight = function(){
  for (var i = this.board.length-1; i >= 0; i--) {
    for (var j = this.board.length-1; j >= 0; j-- )
      if (this.board[i][j] != 0 && this.board[i][j+1] == 0) {
        this.board[i][j+1] = this.board[i][j];
        this.board[i][j] = 0;
      }
    }
  return this.board
}

Game.prototype.moveLeft = function() {
  for(var i = 0; i < this.board.length; i ++) {
    for(var j = 0; j < this.board.length; j++) {
      if (this.board[i][j] != 0 && this.board[i][j-1] == 0) {
        this.board[i][j-1] = this.board[i][j];
        this.board[i][j] = 0;
      }
    }
  }
  return this.board
}

Game.prototype.moveUp = function() {
  for(var i = 1; i < this.board.length; i++) {
    for (var j = 0; j < this.board.length; j++) {
      if (this.board[i][j] != 0 && this.board[i-1][j] == 0) {
        this.board[i-1][j] = this.board[i][j]
        this.board[i][j] = 0;
      }
    }
  }
  return this.board
}

Game.prototype.moveDown = function() {
  for(var i = this.board.length-2; i >=0; i--) {
    for(var j = this.board.length-1; j >0; j--) {
      if (this.board[i][j] != 0 && this.board[i+1][j] == 0) {
        this.board[i+1][j] = this.board[i][j];
        this.board[i][j] = 0;
      }
    }
  }
  return this.board
}

// METHODS TO CHECK IF FULLY MOVED

Game.prototype.fullyRight = function() {
  var checker = true;
  for (var i = 0; i < this.board.length; i ++ ) {
    for (var j = 0; j < this.board.length; j++) {
      if (this.board[i][j] != 0 && this.board[i][j+1] == 0 ) {
        checker = false
      }
    }
  }
  return checker;
}

Game.prototype.fullyLeft = function() {
  var checker = true;
  for(var i = this.board.length-1;i >= 0; i--) {
    for(var j = this.board.length-1; j >=0; j -- ) {
      if(this.board[i][j] != 0 && this.board[i][j-1] == 0) {
        checker = false
      }
    }
  }
  return checker;
}

Game.prototype.fullyUp = function() {
  var checker = true
  for(var i = 1; i < this.board.length; i ++) {
    for(var j = 0; j < this.board.length; j++) {
      if(this.board[i][j] != 0 && this.board[i-1][j] == 0) {
        checker = false
      }
    }
  }
  return checker
}

Game.prototype.fullyDown = function() {
  var checker = true
  for(var i = this.board.length-2; i >= 0 ; i--) {
    for(var j = this.board.length-1; j > 0; j--) {
      if(this.board[i][j] != 0 && this.board[i+1][j] == 0 ) {
        checker = false
      }
    }
  }
  return checker
}

// METHODS TO ADD VALUES WHEN POSSIBLE

Game.prototype.addRightMove = function() {
  for (var i = this.board.length-1; i >= 0; i--) {
    for (var j = this.board.length-1; j >= 0; j-- ) {
      if (this.board[i][j] == this.board[i][j+1] && this.board[i][j] != 0) {
        this.board[i][j+1] = (this.board[i][j])*2;
        this.board[i][j] = 0;
      }
    }
  }
  return this.board
}

Game.prototype.addLeftMove = function() {
  for (var i = 0; i < this.board.length; i++) {
    for(var j = 0; j < this.board.length; j++) {
      if (this.board[i][j] == this.board[i][j-1] && this.board[i][j] !=0) {
        this.board[i][j-1] = (this.board[i][j])*2;
        this.board[i][j] = 0;
      }
    }
  }
 return this.board
}

Game.prototype.addUp = function() {
  for (var i = 1; i < this.board.length; i++) {
    for(var j = 0; j < this.board.length; j++) {
      if (this.board[i][j] == this.board[i-1][j] && this.board[i][j] != 0) {
        this.board[i-1][j] = (this.board[i][j])*2;
        this.board[i][j] = 0;
      }
    }
  }
  return this.board
}

Game.prototype.addDown = function() {
  for(var i = this.board.length-2; i >= 0;i--) {
    for(var j = this.board.length-1; j >=0; j--) {
      if (this.board[i][j] == this.board[i+1][j] && this.board[i][j] !=0) {
        this.board[i+1][j] = (this.board[i][j])*2
        this.board[i][j] = 0
      }
    }
  }
  return this.board
}


Game.prototype.fullLeftMove = function() {
  while(game.fullyLeft() == false) {
    this.moveLeft();
  }
  this.addRightMove();
  while (game.fullyLeft() == false) {
    this.moveLeft();
  }
  this.insert();
}

Game.prototype.fullRightMove = function() {
  while (game.fullyRight() == false) {
      this.moveRight();
    }
    this.addRightMove();
  while (game.fullyRight() == false) {
    this.moveRight();
  }
  this.insert();
}

Game.prototype.fullUpMove = function() {
  while(game.fullyUp() == false) {
    this.moveUp();
  }
  this.addUp();
  while(game.fullyUp() == false) {
    this.moveUp()
  }
  this.insert();
}

Game.prototype.fullDownMove = function() {
  while(game.fullyDown() == false) {
    this.moveDown();
  }
  this.addDown()
  while(game.fullyDown() == false) {
    this.moveDown;
  }
  this.insert();
}

// var game = new Game;

// console.log(game.board)
// game.fullUpMove();
// console.log(game.board)








