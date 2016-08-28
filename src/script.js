/* global lib createjs */
// logic for the Count game
class NumberedBox extends createjs.Container {
    constructor(game, number = 0) {
        super();
        
        this.game = game;
        this.number = number;

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

// this class controlls the game data
class GameData {
    constructor() {
        this.amountOfBox = 20;
        this.resetData();
    }
    resetData() {
        this.currentNumber = 1;
    }
    nextNumber() {
        this.currentNumber += 1;
    }
    isRightNUmber(number) {
        return (number === this.currentNumber);
    }
    isGameWin() {
        // TODO
        return (this.currentNumber > this.amountOfBox);
    }
}
class Game {
    constructor() {
        // 
        console.log(`Welkome to the game. Version ${this.version()}`);

        this.canvas = document.getElementById('game-canvas');
        this.stage = new createjs.Stage(this.canvas);

        window.debugStage = this.stage; // debugStage.children in the browser   console

        this.stage.width = this.canvas.width;
        this.stage.height = this.canvas.height;

        this.stage.enableMouseOver();

        // enable tap on touch device
        createjs.Touch.enable(this.stage);

        // enable retina
        this.retinalize();

        // FPS
        createjs.Ticker.setFPS(60);

        // game related initalization
        this.gameData = new GameData();

        // keep redrawing the stage
        createjs.Ticker.on('tick', this.stage);

        // furst init
        this.restartGame();
    }
    version() {
        return '1.0.0';
    }
    restartGame() {
        this.gameData.resetData();
        this.stage.removeAllChildren();

        // background
        this.stage.addChild(new lib.Background());

        // genrate boxes
        this.generateMultipleBoxes(this.gameData.amountOfBox);
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
        if(this.gameData.isRightNUmber(numberedBox.number)) {
            this.stage.removeChild(numberedBox);
            this.gameData.nextNumber();

            // is game over?
            if(this.gameData.isGameWin()) {
                var gameOverView = new lib.GameOverView();
                this.stage.addChild(gameOverView);

                gameOverView.restartBtn.on('click', (() => this.restartGame()).bind(this));
            }
        }
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