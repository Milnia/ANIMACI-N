
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
        game.load.image('background', 'assets/images/background.gif');
        game.load.spritesheet('samurai', 'assets/images/samurai.png', 143, 274, 7);
        game.load.audio('sonido', 'assets/sounds/sound.mp3');
    },
    create: function() {
        game.add.sprite(0, 0, 'background');
        this.samurai = game.add.sprite(0, 700, 'samurai');
        this.samurai.animations.add('walk', [0,1,2,3,4,5,6,],2,true);
        this.samurai.animations.play("walk");
        sonido = game.add.audio('sonido');

        sonido.play('', 0, 0.5, true);
    },
    update: function() {
        console.log("update");
        this.samurai.x += 2;
        
    }
}

var game = new Phaser.Game(1200, 960, Phaser.CANVAS);
var sonido;
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");