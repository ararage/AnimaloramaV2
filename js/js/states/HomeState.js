var HomeState = {
	//Se inicializa con un mensaje, si fue game over recibe el mensaje Game Over
  	init: function(message){
    	this.message = message;
  	},
  	create: function(){
  		var background = this.game.add.sprite(0,0,'background');
  		background.inputEnabled = true;
      	//console.log("CRISTINA "+background);
		//Si se toca la pantalla inicializara el state GameState
		background.events.onInputDown.add(function(){
		  this.state.start('GameState');
		},this);
		//Mensaje para que inicialice el juego
		var style = {font:'70px Arial',fill:'#fff'};
		//Aqui hay verificar como hacerle para que de la bienvenida
		var t = this.game.add.text(this.game.width/2, this.game.height/2,'TOUCH TO START',style);
		t.anchor.set(0.5);
		//Si dentro del init recibe un mensaje, por ejemplo GAME OVER se muestra
		if(this.message){
			this.game.add.text(60,this.game.world.centerY-200,this.message,style);
		}
  	}
};