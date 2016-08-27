/* global lib createjs */
// logic for the Count game
class NumberedBox extends createjs.Container {
    constructor(game, number = 0) {
        super();
        
        this.game = game;

        let movieclip = new lib.NumberedBox();
        movieclip.numberText.text = number;
        this.addChild(movieclip);
 
        this.setBounds(0, 0, 50, 50);

        // handle click / tap
        this.on('click', this.handleClick.bind(this));
    }
    handleClick() {
        this.game.handleClick(this);
    }
}
class Game {
    constructor() {
        console.log(`Welkome to the game. Version ${this.version()}`);

        this.canvas = document.getElementById('game-canvas');
        this.stage = new createjs.Stage(this.canvas);

        window.debugStage = this.stage; // debugStage.children in the browser   console

        this.stage.width = this.canvas.width;
        this.stage.height = this.canvas.height;

        // enable tap on touch device
        createjs.Touch.enable(this.stage);

        // enable retina
        this.retinalize();

        // FPS
        createjs.Ticker.setFPS(60);

        // keep redrawing the stage
        createjs.Ticker.on('tick', this.stage);

        // background
        this.stage.addChild(new lib.Background());

        // genrate boxes
        this.generateMultipleBoxes();
    }
    version() {
        return '1.0.0';
    }
    generateMultipleBoxes(amount = 10) {
        for (let i = amount; i ; i--) {
            let movieclip = new NumberedBox(this, i);
            this.stage.addChild(movieclip);

            // random position
            movieclip.x = Math.random() * (this.stage.width - movieclip.getBounds().width);
            movieclip.y = Math.random() * (this.stage.height - movieclip.getBounds().height);
        }
    }
    handleClick(numberedBox) {
        this.stage.removeChild(numberedBox);
    }
    retinalize() {
        this.stage.width = this.canvas.width;
        this.stage.height = this.canvas.height;

        let ratio = window.devicePixelRatio;
        if(ratio === undefined) {
            return;
        }

        this.canvas.setAttribute('width', Math.round(this.stage.width * ratio));
        this.canvas.setAttribute('hight', Math.round(this.stage.hight * ratio));

        this.stage.scaleX = this.stage.scaleX = ratio;

        // set CSS style 
        this.canvas.style.width = `${this.stage.width}px`; 
        this.canvas.style.height = `${this.stage.height}px`; 
    }
}

// start the game
let game = new Game();












