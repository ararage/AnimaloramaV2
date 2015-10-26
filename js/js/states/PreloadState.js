var PreloadState = {
	//load the game assets before the game starts
  preload: function() {

    this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.logo.anchor.setTo(0.5);

    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadBar');
    this.preloadBar.anchor.setTo(0.5);
    this.load.setPreloadSprite(this.preloadBar);

    this.load.image('background', 'assets/images/background.png');
    this.load.image('bear', 'assets/images/animals/bear.png');
    this.load.image('camel', 'assets/images/animals/camel.png');
    this.load.image('dolphin', 'assets/images/animals/dolphin.png');
    this.load.image('elephant', 'assets/images/animals/elephant.png');
    this.load.image('flamenco', 'assets/images/animals/flamenco.png');
    this.load.image('giraffe', 'assets/images/animals/giraffe.png');
    this.load.image('hippopotamus', 'assets/images/animals/hippopotamus.png');
    this.load.image('kangaroo', 'assets/images/animals/kangaroo.png');
    this.load.image('krokodil', 'assets/images/animals/krokodil.png');
    this.load.image('lion', 'assets/images/animals/lion.png');
    this.load.image('monkey', 'assets/images/animals/monkey.png');
    this.load.image('panda_bear', 'assets/images/animals/panda_bear.png');
    this.load.image('parrot', 'assets/images/animals/parrot.png');
    this.load.image('penguin', 'assets/images/animals/penguin.png');
    this.load.image('polar_bear', 'assets/images/animals/polar_bear.png');
    this.load.image('rhino', 'assets/images/animals/rhino.png');
    this.load.image('seal', 'assets/images/animals/seal.png');
    this.load.image('snake', 'assets/images/animals/snake.png');
    this.load.image('tiger', 'assets/images/animals/tiger.png');
    this.load.image('toucan', 'assets/images/animals/toucan.png');
    this.load.image('zebra', 'assets/images/animals/zebra.png');

      /*Falta cargar las figuras y ver si se pueden hacer sprites*/
      this.load.image('circle_black', 'assets/images/figures/circles/circle_black.png');
      this.load.image('circle_blue', 'assets/images/figures/circles/circle_blue.png');
      this.load.image('circle_brown', 'assets/images/figures/circles/circle_brown.png');
      this.load.image('circle_gray', 'assets/images/figures/circles/circle_gray.png');
      this.load.image('circle_green', 'assets/images/figures/circles/circle_green.png');
      this.load.image('circle_lila', 'assets/images/figures/circles/circle_lila.png');
      this.load.image('circle_orange', 'assets/images/figures/circles/circle_orange.png');
      this.load.image('circle_pink', 'assets/images/figures/circles/circle_pink.png');
      this.load.image('circle_red', 'assets/images/figures/circles/circle_red.png');
      this.load.image('circle_white', 'assets/images/figures/circles/circle_white.png');
      this.load.image('circle_yellow', 'assets/images/figures/circles/circle_yellow.png');
  
      this.load.image('heart_black', 'assets/images/figures/hearts/heart_black.png');
      this.load.image('heart_blue', 'assets/images/figures/hearts/heart_blue.png');
      this.load.image('heart_brown', 'assets/images/figures/hearts/heart_brown.png');
      this.load.image('heart_gray', 'assets/images/figures/hearts/heart_gray.png');
      this.load.image('heart_green', 'assets/images/figures/hearts/heart_green.png');
      this.load.image('heart_lila', 'assets/images/figures/hearts/heart_lila.png');
      this.load.image('heart_orange', 'assets/images/figures/hearts/heart_orange.png');
      this.load.image('heart_pink', 'assets/images/figures/hearts/heart_pink.png');
      this.load.image('heart_red', 'assets/images/figures/hearts/heart_red.png');
      this.load.image('heart_white', 'assets/images/figures/hearts/heart_white.png');
      this.load.image('heart_yellow', 'assets/images/figures/hearts/heart_yellow.png');
              
      this.load.image('hexagon_black', 'assets/images/figures/hexagons/hexagon_black.png');
      this.load.image('hexagon_blue', 'assets/images/figures/hexagons/hexagon_blue.png');
      this.load.image('hexagon_brown', 'assets/images/figures/hexagons/hexagon_brown.png');
      this.load.image('hexagon_gray', 'assets/images/figures/hexagons/hexagon_gray.png');
      this.load.image('hexagon_green', 'assets/images/figures/hexagons/hexagon_green.png');
      this.load.image('hexagon_lila', 'assets/images/figures/hexagons/hexagon_lila.png');
      this.load.image('hexagon_orange', 'assets/images/figures/hexagons/hexagon_orange.png');
      this.load.image('hexagon_pink', 'assets/images/figures/hexagons/hexagon_pink.png');
      this.load.image('hexagon_red', 'assets/images/figures/hexagons/hexagon_red.png');
      this.load.image('hexagon_white', 'assets/images/figures/hexagons/hexagon_white.png');
      this.load.image('hexagon_yellow', 'assets/images/figures/hexagons/hexagon_yellow.png');
      
      this.load.image('pentagon_black', 'assets/images/figures/pentagons/pentagon_black.png');
      this.load.image('pentagon_blue', 'assets/images/figures/pentagons/pentagon_blue.png');
      this.load.image('pentagon_brown', 'assets/images/figures/pentagons/pentagon_brown.png');
      this.load.image('pentagon_gray', 'assets/images/figures/pentagons/pentagon_gray.png');
      this.load.image('pentagon_green', 'assets/images/figures/pentagons/pentagon_green.png');
      this.load.image('pentagon_lila', 'assets/images/figures/pentagons/pentagon_lila.png');
      this.load.image('pentagon_orange', 'assets/images/figures/pentagons/pentagon_orange.png');
      this.load.image('pentagon_pink', 'assets/images/figures/pentagons/pentagon_pink.png');
      this.load.image('pentagon_red', 'assets/images/figures/pentagons/pentagon_red.png');
      this.load.image('pentagon_white', 'assets/images/figures/pentagons/pentagon_white.png');
      this.load.image('pentagon_yellow', 'assets/images/figures/pentagons/pentagon_yellow.png');
      
      this.load.image('rectangle_black', 'assets/images/figures/rectangles/rectangle_black.png');
      this.load.image('rectangle_blue', 'assets/images/figures/rectangles/rectangle_blue.png');
      this.load.image('rectangle_brown', 'assets/images/figures/rectangles/rectangle_brown.png');
      this.load.image('rectangle_gray', 'assets/images/figures/rectangles/rectangle_gray.png');
      this.load.image('rectangle_green', 'assets/images/figures/rectangles/rectangle_green.png');
      this.load.image('rectangle_lila', 'assets/images/figures/rectangles/rectangle_lila.png');
      this.load.image('rectangle_orange', 'assets/images/figures/rectangles/rectangle_orange.png');
      this.load.image('rectangle_pink', 'assets/images/figures/rectangles/rectangle_pink.png');
      this.load.image('rectangle_red', 'assets/images/figures/rectangles/rectangle_red.png');
      this.load.image('rectangle_white', 'assets/images/figures/rectangles/rectangle_white.png');
      this.load.image('rectangle_yellow', 'assets/images/figures/rectangles/rectangle_yellow.png');
      
      this.load.image('square_black', 'assets/images/figures/squares/square_black.png');
      this.load.image('square_blue', 'assets/images/figures/squares/square_blue.png');
      this.load.image('square_brown', 'assets/images/figures/squares/square_brown.png');
      this.load.image('square_gray', 'assets/images/figures/squares/square_gray.png');
      this.load.image('square_green', 'assets/images/figures/squares/square_green.png');
      this.load.image('square_lila', 'assets/images/figures/squares/square_lila.png');
      this.load.image('square_orange', 'assets/images/figures/squares/square_orange.png');
      this.load.image('square_pink', 'assets/images/figures/squares/square_pink.png');
      this.load.image('square_red', 'assets/images/figures/squares/square_red.png');
      this.load.image('square_white', 'assets/images/figures/squares/square_white.png');
      this.load.image('square_yellow', 'assets/images/figures/squares/square_yellow.png');
      
      this.load.image('star_black', 'assets/images/figures/stars/star_black.png');
      this.load.image('star_blue', 'assets/images/figures/stars/star_blue.png');
      this.load.image('star_brown', 'assets/images/figures/stars/star_brown.png');
      this.load.image('star_gray', 'assets/images/figures/stars/star_gray.png');
      this.load.image('star_green', 'assets/images/figures/stars/star_green.png');
      this.load.image('star_lila', 'assets/images/figures/stars/star_lila.png');
      this.load.image('star_orange', 'assets/images/figures/stars/star_orange.png');
      this.load.image('star_pink', 'assets/images/figures/stars/star_pink.png');
      this.load.image('star_red', 'assets/images/figures/stars/star_red.png');
      this.load.image('star_white', 'assets/images/figures/stars/star_white.png');
      this.load.image('star_yellow', 'assets/images/figures/stars/star_yellow.png');
      
      this.load.image('rhombus_black', 'assets/images/figures/rhombuses/rhombus_black.png');
      this.load.image('rhombus_blue', 'assets/images/figures/rhombuses/rhombus_blue.png');
      this.load.image('rhombus_brown', 'assets/images/figures/rhombuses/rhombus_brown.png');
      this.load.image('rhombus_gray', 'assets/images/figures/rhombuses/rhombus_gray.png');
      this.load.image('rhombus_green', 'assets/images/figures/rhombuses/rhombus_green.png');
      this.load.image('rhombus_lila', 'assets/images/figures/rhombuses/rhombus_lila.png');
      this.load.image('rhombus_orange', 'assets/images/figures/rhombuses/rhombus_orange.png');
      this.load.image('rhombus_pink', 'assets/images/figures/rhombuses/rhombus_pink.png');
      this.load.image('rhombus_red', 'assets/images/figures/rhombuses/rhombus_red.png');
      this.load.image('rhombus_white', 'assets/images/figures/rhombuses/rhombus_white.png');
      this.load.image('rhombus_yellow', 'assets/images/figures/rhombuses/rhombus_yellow.png');
      
      this.load.image('triangle_black', 'assets/images/figures/triangles/triangle_black.png');
      this.load.image('triangle_blue', 'assets/images/figures/triangles/triangle_blue.png');
      this.load.image('triangle_brown', 'assets/images/figures/triangles/triangle_brown.png');
      this.load.image('triangle_gray', 'assets/images/figures/triangles/triangle_gray.png');
      this.load.image('triangle_green', 'assets/images/figures/triangles/triangle_green.png');
      this.load.image('triangle_lila', 'assets/images/figures/triangles/triangle_lila.png');
      this.load.image('triangle_orange', 'assets/images/figures/triangles/triangle_orange.png');
      this.load.image('triangle_pink', 'assets/images/figures/triangles/triangle_pink.png');
      this.load.image('triangle_red', 'assets/images/figures/triangles/triangle_red.png');
      this.load.image('triangle_white', 'assets/images/figures/triangles/triangle_white.png');
      this.load.image('triangle_yellow', 'assets/images/figures/triangles/triangle_yellow.png');
      
      this.load.image('speaker','assets/images/speaker.png');
      
  },
  create: function() {
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.state.start('HomeState');
  }
};