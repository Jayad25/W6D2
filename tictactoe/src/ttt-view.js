class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "#square",(event => {
      const $position = $(event.currentTarget);
      // console.log($(event.target));
      // console.log($position);
      this.game.playMove($position.data('pos'));
      this.makeMove($position);
    }));
    
    
    
  }

  makeMove($square) {
    const pos = $square.data('pos');
    const currentPlayer = this.game.currentPlayer;
    $square.addClass(currentPlayer);
    $square.removeClass();
    $square.addClass(`x:after`);
    $square.text(currentPlayer);
    // $square.addClass('g');
    // console.log('x.');
    
    if(this.game.winner()){
    
    }
    
  }
  

  setupBoard() {
    
    const $ul = $("<ul>");
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        const $li = $("<li>");
        $li.attr("id","square");
        $li.data("pos",[i,j]);
        $ul.append($li);
        
       }
       
    }
      
    this.$el.append($ul);
    }
}

module.exports = View;

