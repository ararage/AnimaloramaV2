var BootState = {
	//initiate some game-level settings
  init: function() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    this.game.physics.startSystem(Phaser.Physics.ARCADE);  //Agregamos motor de fisicas
    
    //this.game.physics.arcade.gravity.y = 1000; //Gravedad en Y
    //this.cursors = this.game.input.keyboard.createCursorKeys(); //Se activan las teclas del teclado

    //Seteamos el tamaño del mundo :D 
    this.game.world.setBounds(0,0,700,360);
  },
  preload: function() {
    this.load.image('preloadBar', 'assets/images/bar.png');
  	this.load.image('logo', 'assets/images/burro.png');
  },
  create: function() {
  	this.game.stage.backgroundColor = '#fff';
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.minWidth = 240;
    this.scale.maxWidth = 2880;
    this.scale.minHeight = 170;
    this.scale.maxHeight = 1920;
    this.scale.setScreenSize(true);
    this.scale.pageAlignHorizontally = true;
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
  	this.state.start('PreloadState');
  }
};