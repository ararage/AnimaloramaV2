var GameState = {
    preload:function(){//Cargamos el json de la configuracion de los animales
        this.load.text('animals','assets/data/data.json');
        this.load.audio('black', ['assets/audio/black.ogg', 'assets/audio/black.mp3']);
        this.load.audio('blue', ['assets/audio/blue.ogg', 'assets/audio/blue.mp3']);
        this.load.audio('brown', ['assets/audio/brown.ogg', 'assets/audio/brown.mp3']);
        this.load.audio('green', ['assets/audio/green.ogg', 'assets/audio/green.mp3']);
        this.load.audio('orange', ['assets/audio/orange.ogg', 'assets/audio/orange.mp3']);
        this.load.audio('pink', ['assets/audio/pink.ogg', 'assets/audio/pink.mp3']);
        this.load.audio('red', ['assets/audio/red.ogg', 'assets/audio/red.mp3']);
        this.load.audio('white', ['assets/audio/white.ogg', 'assets/audio/white.mp3']);
        this.load.audio('yellow', ['assets/audio/yellow.ogg', 'assets/audio/yellow.mp3']);      
        this.load.audio('bear',['assets/audio/animals/bear.mp3','assets/audio/animals/bear.ogg']);
        this.load.audio('camel',['assets/audio/animals/camel_.mp3','assets/audio/animals/camel_.ogg']);
        this.load.audio('dolphin',['assets/audio/animals/dolphin_.mp3','assets/audio/animals/dolphin_.ogg']);
        this.load.audio('elephant',['assets/audio/animals/elephant.mp3','assets/audio/animals/elephant.ogg']);
        this.load.audio('flamenco',['assets/audio/animals/flamenco_.mp3','assets/audio/animals/flamenco_.ogg']);
        this.load.audio('giraffe',['assets/audio/animals/giraffe_.mp3','assets/audio/animals/giraffe_.ogg']);
        this.load.audio('hippopotamus',['assets/audio/animals/hippopotamus_.mp3','assets/audio/animals/hippopotamus_.ogg']);
        this.load.audio('kangaroo',['assets/audio/animals/kangaroo_.mp3','assets/audio/animals/kangaroo_.ogg']);
        this.load.audio('krokodil',['assets/audio/animals/krokodil_.mp3','assets/audio/animals/krokodil_.ogg']);
        this.load.audio('lion',['assets/audio/animals/lion_.mp3','assets/audio/animals/lion_.ogg']);
        this.load.audio('monkey',['assets/audio/animals/monkey_.mp3','assets/audio/animals/monkey_.ogg']);
        this.load.audio('panda_bear',['assets/audio/animals/panda_bear_.mp3','assets/audio/animals/panda_bear_.ogg']);
        this.load.audio('parrot',['assets/audio/animals/parrot_.mp3','assets/audio/animals/parrot_.ogg']);
        this.load.audio('penguin',['assets/audio/animals/penguin_.mp3','assets/audio/animals/penguin_.ogg']);
        this.load.audio('polar_bear',['assets/audio/animals/polar_bear_.mp3','assets/audio/animals/polar_bear_.ogg']);
        this.load.audio('rhino',['assets/audio/animals/rhino_.mp3','assets/audio/animals/rhino_.ogg']);
        this.load.audio('seal',['assets/audio/animals/seal_.mp3','assets/audio/animals/seal_.ogg']);
        this.load.audio('snake',['assets/audio/animals/snake_.mp3','assets/audio/animals/snake_.ogg']);
        this.load.audio('tiger',['assets/audio/animals/tiger.mp3','assets/audio/animals/tiger.ogg']);
        this.load.audio('toucan',['assets/audio/animals/toucan_.mp3','assets/audio/animals/toucan_.ogg']);
        this.load.audio('zebra',['assets/audio/animals/zebra_.mp3','assets/audio/animals/zebra_.ogg']);
    },
	create:function(){    
        console.log("Attempts "+this.atempts); 
        this.animalData = JSON.parse(this.cache.getText('animals'));
        console.log(this.animalData);
		//scaling options
    	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    	//have the game centered horizontally
	    this.scale.pageAlignHorizontally = true;
	    this.scale.pageAlignVertically = true;
	    //screen size will be set automatically
   		this.scale.setScreenSize(true);
   		//create a sprite for the background
    	this.background = this.game.add.sprite(0, 0, 'background');
        this.background.inputEnabled = true;
        //Generamos los animales de manera aleatoria a utilizar
        var arrayFiguresAndAnimals = this.generaMemorama(this.animalData.animals);
        var animalToFind = arrayFiguresAndAnimals[this.getRandomInt(0,8)].key;
        
        var randomUniqueColors = [];
        var int_ =0;
        while(int_<10){
            var tempValue = this.getRandomInt(0,10);
            if(randomUniqueColors.indexOf(tempValue)==-1){
                //No existe
                randomUniqueColors.push(tempValue);
                int_++;
            }
        }
        
        this.cards = this.game.add.group();
        this.animals = this.game.add.group();
        var self = this;
        var card;
        var animal;
        var counter = 0;
        var arrayPosicionesParaAnimales = [];
        var cardGlobal;
        var animalGlobal;

        var booleanShowed = false;
        this.animalData.figures.forEach(function(element){
            //console.log("ESTO "+this.animalData.animals[arrayFiguresAndAnimals[counter].id].key);
            //Se crea tarjeta
            card = self.cards.create(element.x,element.y,element.key+"_"+element.color[randomUniqueColors[counter]].value,0);
            animal = self.animals.create(element.x,element.y,this.animalData.animals[arrayFiguresAndAnimals[counter].id].key,0);
            animal.scale.setTo(0.4,0.4); //Se escala a una cuarta
            animal.anchor.setTo(0.5); //Mantiene en el centro la figura
            //animal.anchor.setTo(0.5,0.5);
            //animal.visible = false;
            animal.alpha = 0;
            arrayPosicionesParaAnimales.push({posX:element.x,posY:element.y});
            card.customParams = {animal:animal,animalAudio:self.game.add.audio(animal.key),color:element.key,audio:self.game.add.audio(this.animalData.colors[randomUniqueColors[counter]].key),toFind:animalToFind};
            
            //console.log("Este es el sonido "+this.animalData.colors[randomUniqueColors[counter]].key);
            card.anchor.setTo(0.5);
            //Implementar una animacion aqui
            card.inputEnabled = true;
            card.input.pixelPerfectClick = true;
            card.events.onInputDown.add(self.animateFigure,self);
            counter++;
        },this);
        console.log("Posiciones "+arrayPosicionesParaAnimales);
        //Dibujamos el animal a pintar, esto se cambiara con las letras
        var style = { font: '20px Arial', fill: '#fff'};
        this.game.add.text(400, 20, 'Animal to find: '+animalToFind, style);
        //No se bloquea la UI al inicio
        this.uiBlocked = false;
        
        //No se ha seleccionado nada
        this.selectedItem = false;
        
        this.drawAnimalToFind = this.game.add.sprite(500,170,animalToFind)
        this.drawAnimalToFind.customParams = {audio:game.add.audio(animalToFind)};
        this.drawAnimalToFind.scale.setTo(0.6,0.6);
        this.drawAnimalToFind.anchor.setTo(0.5);
        this.drawAnimalToFind.inputEnabled = true;
        //this.drawAnimalToFind.events.onInputDown.add(this.playSound,this);
        
        this.speakerAnimalToFind = this.game.add.sprite(500,300,'speaker');
        this.speakerAnimalToFind.customParams = {audio:game.add.audio(animalToFind)};
        this.speakerAnimalToFind.scale.setTo(0.6,0.6);
        this.speakerAnimalToFind.anchor.setTo(0.5);
        this.speakerAnimalToFind.inputEnabled = true;
        this.speakerAnimalToFind.input.pixelPerfectClick = true;
        this.speakerAnimalToFind.events.onInputDown.add(this.playSound,this);
        
        //this.animals = this.game.add.group();
        //var selfAnimal = this;
        //var animal;
        //var counterAnimal = 0;
        /*this.animalData.animals.forEach(function(element){
            animal = selfAnimal.animals.create(arrayPosicionesParaAnimales[counterAnimal].posX,arrayPosicionesParaAnimales[counterAnimal].posY)
            counterAnimal++;
        },this);*/
        
        /*arrayFiguresAndAnimals.forEach(function(element){
            animal = selfAnimal.animals.create(arrayPosicionesParaAnimales[counterAnimal].posX,arrayPosicionesParaAnimales[counterAnimal].posY,this.animalData.animals[element.id].key);
            //card.anchor.setTo(0.000001,0.000001);
            counterAnimal++;
        },this);
        */
        
        //var arrayPartidas = [];
        //var memorama;
        //numero de partidas definidas en el json
        //var numero_partidas = this.animalData.number_stages;
    	//for (var i = 0; i < numero_partidas; i++) {
            //En este arreglo se guardan los animales a utilizar en este juego
        //    memorama = this.agregaAtributoFigura(this.generaMemorama(this.animalData.animals));
        //    arrayPartidas.push(memorama);
        //};
        
        //Creamos un grupo donde se guardaran cada una de las partidas con sus respectivos memoramas ya cargados
        //this.stages = this.game.add.group();
        //var self = this;
        //var stage;

        //arrayPartidas.forEach(function(element){
        //    stage = self.stages.create();
        //},this);

        //pintamos las figuras
	},
	update:function(){
         
    },

    playSound: function(sprite,event){
        if(!this.uiBlocked){
            //console.log("REFRESCO "+sprite.customParams.audio);
            //this.uiBlocked = true;
            this.drawAnimalToFind.customParams.audio.play();

        }
    },
    //generamos el Memorama a partir del arreglo de los 21 animales
    generaMemorama:function(animalData){
        var memorama = [];
        //Arreglo de posiciones a tomar, se tomaran 9 elementos sin repetir
        var posicionesATomar = this.randomNumbers21(); //El arreglo contiene 9 numeros sin repetir
        console.log(posicionesATomar);
        for (var i =0; i < posicionesATomar.length; i++) {
            for (var j = 0; j < animalData.length; j++) {
                if(animalData[j].id == posicionesATomar[i]){
                    memorama.push(animalData[j]);
                    break;
                }
            };
        };
        return memorama;
    },

	//Genera 9 numeros sin repetirse del 0 al 20
	randomNumbers21:function(){
		var unicos = chance.unique(chance.natural,9,{min:0,max:20});
		return unicos;
	},

    //Genera un elemento aleatorio desde un minimo a un maximo
    getRandomInt:function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    //Se encarga de animar cada una de las tarjetas
    animateFigure: function(card,event){
        /*if(!this.selectedItem){
            this.selectedItem = true;    
        }*/
        this.selectedItem = true;
        
        var millisecondsToWait = 4000;
        var timer;
        console.log("¿Esta bloqueado? "+this.uiBlocked);
        if(!this.uiBlocked){
            this.uiBlocked = true;
            console.log("¿Ahora Esta bloqueado? "+this.uiBlocked);
            cardGlobal = card;
            animalGlobal = card.customParams.animal;
            card.customParams.audio.play();
            if(card.customParams.animal.key == card.customParams.toFind){
                
                game.time.events.add(Phaser.Timer.SECOND * 1, this.fadeImage, this);
                game.time.events.add(Phaser.Timer.SECOND * 1, this.showAnimal, this);
                game.time.events.add(Phaser.Timer.SECOND * 3, this.youWin, this);
                //card.customParams.animalAudio.play();
                this.uiBlocked = true;
                
            }else{
                console.log("Bloqueado? "+this.uiBlocked);
                game.time.events.add(Phaser.Timer.SECOND * 1, this.fadeImage, this);
                game.time.events.add(Phaser.Timer.SECOND * 1, this.showAnimal, this);
                game.time.events.add(Phaser.Timer.SECOND * 3, this.badCard, this); 
                game.time.events.add(Phaser.Timer.SECOND * 4, this.unlockUI,this);
                //card.customParams.animalAudio.play();
                console.log("AUDIO DEL ANIMAL "+card.customParams.animalAudio)
                console.log("Y ahora? "+this.uiBlocked);
            }    
        }
    },

    unlockUI:function(){
        this.uiBlocked = false;
    },
    fadeImage: function(){
        console.log("fade");
        console.log(cardGlobal);
        game.add.tween(cardGlobal).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    },
    showAnimal: function(){
        //console.log("Le animal"+animalGlobal);
        cardGlobal.customParams.animalAudio.play();
        game.add.tween(animalGlobal).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);        
    },
    badCard: function(){
        console.log("bad");
        game.add.tween(cardGlobal).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
        game.add.tween(animalGlobal).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    },
    youWin: function(){
        alert('Ganaste :D');
        this.atempts++;
        game.state.start('GameState');
    }
};


//var game = new Phaser.Game(640, 360, Phaser.AUTO);
//game.state.add('GameState', GameState);
//game.state.start('GameState');