var GameBoard = require("./component/GameBoard");

var gameBoard;

window.onload = function() {
    gameBoard = new GameBoard();
}

module.exports = {
    GameBoard:gameBoard
}