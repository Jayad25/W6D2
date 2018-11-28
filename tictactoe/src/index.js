const View = require('./ttt-view.js');
const Game = require('./../tictactoe_node/game.js');

  $(() => {
    let root_ttt = $('.ttt');
    const game = new Game();
   new View(game,root_ttt);
  });
