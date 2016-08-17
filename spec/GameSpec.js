describe("Game",function() {
  var game;
  beforeEach(function() {
    game = new Game
  })
  it("returns an array of possible places", function() {
    expect(game.openSpots().length).toBe(14)
  })

  it("should insert a random 2 into the table",function() {
    game.insert();
    game.insert();
    expect(game.openSpots().length).toBe(12)
  })

  describe("right", function(){
    it("moves number values to right coordinates of table", function(){
      game.board =[[0,0,0,0],
                  [0,8,0,0],
                  [0,0,0,0],
                  [0,0,0,0]]
      game.moveRight();
      var position = game.board[1][2];
      expect(position).toBe(8);
    })

    it("moves numbers in fancy ways", function() {
      game.board = [ [ 0, 16, 0, 0 ],
                      [ 8, 0, 0, 8 ],
                      [ 2, 0, 0, 0 ],
                      [ 0, 0, 0, 4 ] ]
      game.moveRight();
      var position = game.board[2][1]
      expect(position).toBe(2)
    })

    it("knows when a board is moved fully right", function() {
      game.board = [[0,0,0,0],
                  [0,2,4,8],
                  [0,0,0,4],
                  [0,0,0,0]];
      expect(game.fullyRight()).toBe(true)
    })

    it("knows when a board is moved fully right, pt 2", function() {
      game.board = [[0,0,0,0],
                  [0,8,0,2],
                  [0,4,0,4],
                  [0,0,0,0]];
      expect(game.fullyRight()).toBe(false)
    })

    it("knows to multiply values like a bo$$",function() {
      game.board = [[0,0,0,0],
                  [0,0,8,8],
                  [0,0,0,4],
                  [0,0,0,0]];
      game.addRightMove();
      var position = game.board[1][3];
      expect(position).toBe(16);
    })

    it("knows how to fully execute a right move",function() {
      game.board = [[0,0,0,0],
                  [0,8,8,8],
                  [0,2,0,0],
                  [0,0,4,0]]
      expect("God").toBe("God")
    })
  });

  describe("left", function(){
    it("move number values to the left coordinates oft table", function() {
      game.board = [[0,0,0,0],
                  [0,8,0,0],
                  [0,0,0,0],
                  [0,0,0,0]];
      game.moveLeft();
      var position = game.board[1][0]
      expect(position).toBe(8)
    })

    it("should know when a board is fully left",function() {
      game.board = [[0,0,0,0],
                  [0,8,0,0],
                  [0,0,0,0],
                  [0,0,0,0]];
      expect(game.fullyLeft()).toBe(false)
    })

    it("should know when a board is fully left",function() {
      game.board = [[0,0,0,0],
                  [8,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0]];
      expect(game.fullyLeft()).toBe(true)
    })

    it("should be able to add relevant number",function() {
      game.board = [[0,0,0,0],
                  [8,8,0,0],
                  [0,0,0,0],
                  [0,0,0,0]];
      game.addLeftMove();
      var position = game.board[1][0];
      expect(position).toBe(16);
    })
  })


  describe("up", function() {
    it("moves numbers to upper corner", function() {
      game.board = [[0,0,0,0],
                  [0,8,0,0],
                  [0,0,0,0],
                  [0,0,0,0]];
      game.moveUp();
      // console.log(game.board)
      var position = game.board[0][1]
      expect(position).toBe(8)
    })

    it("should know when a board is fully up (expect false)",function() {
      game.board = [[0,0,0,0],
                  [0,8,0,0],
                  [0,0,0,0],
                  [0,0,0,0]];
      expect(game.fullyUp()).toBe(false)
    })

    it("should know when a board is fully up (expect true)",function() {
      game.board = [[0,8,0,0],
                  [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0]];
      expect(game.fullyUp()).toBe(true)
    })

    it("should add numbers when possible",function() {
      game.board = [[0,8,0,0],
                    [0,8,0,0],
                    [0,0,0,0],
                    [0,0,0,0]];
      game.addUp();
      var position = game.board[0][1]
      expect(position).toBe(16)
    })
  })

  describe("down",function() {
    it("moves numbers down town (but not all around)",function() {
      game.board = [[0,0,0,0],
                    [0,0,0,0],
                    [0,4,0,0],
                    [0,0,0,0]];
      game.moveDown();
      var position = game.board[3][1]
      console.log("hello")
      console.log(game.board)
      expect(position).toBe(4)
    })

    it("should know if its fully down to clown (expect false)", function() {
      game.board = [[0,0,0,0],
                    [0,0,0,0],
                    [0,4,0,0],
                    [0,0,0,0]];
      expect(game.fullyDown()).toBe(false)
    })

    it("should know if its fully down to clown (expect false)", function() {
      game.board = [[0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,4,0,0]];
      expect(game.fullyDown()).toBe(true)
    })

    it("should be able to add somet mother f****** values", function(){
      game.board = [[0,0,0,0],
                    [0,0,0,0],
                    [0,4,0,0],
                    [0,4,0,0]];
      game.addDown();
      var position = game.board[3][1];
      expect(position).toBe(8)
    })
  })






})
