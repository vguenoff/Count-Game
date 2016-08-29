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
        this.amountOfBox = 3;
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

        window.debugStage = this.stage; // debugStage.children in the browser console

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
        this.startRestartGame(true);
    }
    version() {
        return '2.0.1';
    }
    startRestartGame(first = true) {
        this.gameData.resetData();
        this.stage.removeAllChildren();

        // background
        // this.stage.addChild(new lib.Background());

        // Start View
        if(first) {
            let startView = new lib.StartView(this);
            this.stage.addChild(startView);
            
            startView.setBounds(0, 0, 300, 33.5);

            startView.x = (this.stage.width - startView.getBounds().width) / 2;
            startView.y = (this.stage.height - startView.getBounds().height) / 4;
            
            startView.startBtn.on('click', (() => {
                // generate boxes
                this.stage.removeChild(startView);
                this.generateMultipleBoxes(this.gameData.amountOfBox);   
            }).bind(this));
        } else {
            this.generateMultipleBoxes(this.gameData.amountOfBox);   

        }
    }
    generateMultipleBoxes(amount = 10) {
        for (let i = amount; i ; i--) {
            let movieclip = new NumberedBox(this, i);
            this.stage.addChild(movieclip);

            // random position
            movieclip.x = parseInt(Math.random() * (this.stage.width - movieclip.getBounds().width));
            movieclip.y = parseInt(Math.random() * 0.7 * (this.stage.height - movieclip.getBounds().height) + this.stage.height / 5);
        }
    }
    handleClick(numberedBox) {
        if(this.gameData.isRightNUmber(numberedBox.number)) {

            createjs.Tween.get(numberedBox)
                .to({x: (numberedBox.x + 25), y: (numberedBox.y + 25), scaleX:0, scaleY:0, visible:false}, 100, createjs.Ease.cubicInOut())
                .call(() => {
                    this.stage.removeChild(numberedBox);
                    this.gameData.nextNumber();

                    // is game over?
                    if(this.gameData.isGameWin()) {
                        var gameOverView = new lib.GameOverView();
                        this.stage.addChild(gameOverView);

                        gameOverView.setBounds(0, 0, 300, 245.65);

                        gameOverView.x = (this.stage.width - gameOverView.getBounds().width) / 2;
                        gameOverView.y = (this.stage.height - gameOverView.getBounds().height) / 4;

                        gameOverView.restartBtn.on('click', (() => {
                            createjs.Tween.get(gameOverView.restartBtn)
                                .to({rotation: 360}, 500, createjs.Ease.cubicInOut())
                                .call(() => {
                                    this.startRestartGame(false);
                                });
                        }).bind(this));
                    }
                });
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
        this.canvas.setAttribute('height', Math.round(this.stage.height * ratio));

        this.stage.scaleX = this.stage.scaleY = ratio;

        // set CSS style 
        this.canvas.style.width = `${this.stage.width}px`; 
        this.canvas.style.height = `${this.stage.height}px` ; 
    }
}
// start the game
let game = new Game();