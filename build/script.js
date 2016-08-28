'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global lib createjs */
// logic for the Count game
var NumberedBox = function (_createjs$Container) {
    _inherits(NumberedBox, _createjs$Container);

    function NumberedBox(game) {
        var number = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

        _classCallCheck(this, NumberedBox);

        var _this = _possibleConstructorReturn(this, (NumberedBox.__proto__ || Object.getPrototypeOf(NumberedBox)).call(this));

        _this.game = game;
        _this.number = number;

        var movieclip = new lib.NumberedBox();
        movieclip.numberText.text = number;
        _this.addChild(movieclip);

        _this.setBounds(0, 0, 50, 50);

        // handle click / tap
        _this.on('click', _this.handleClick.bind(_this));
        return _this;
    }

    _createClass(NumberedBox, [{
        key: 'handleClick',
        value: function handleClick() {
            this.game.handleClick(this);
        }
    }]);

    return NumberedBox;
}(createjs.Container);

// this class controlls the game data


var GameData = function () {
    function GameData() {
        _classCallCheck(this, GameData);

        this.amountOfBox = 20;
        this.resetData();
    }

    _createClass(GameData, [{
        key: 'resetData',
        value: function resetData() {
            this.currentNumber = 1;
        }
    }, {
        key: 'nextNumber',
        value: function nextNumber() {
            this.currentNumber += 1;
        }
    }, {
        key: 'isRightNUmber',
        value: function isRightNUmber(number) {
            return number === this.currentNumber;
        }
    }, {
        key: 'isGameWin',
        value: function isGameWin() {
            // TODO
            return this.currentNumber > this.amountOfBox;
        }
    }]);

    return GameData;
}();

var Game = function () {
    function Game() {
        _classCallCheck(this, Game);

        // 
        console.log('Welkome to the game. Version ' + this.version());

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

    _createClass(Game, [{
        key: 'version',
        value: function version() {
            return '1.0.0';
        }
    }, {
        key: 'restartGame',
        value: function restartGame() {
            this.gameData.resetData();
            this.stage.removeAllChildren();

            // background
            this.stage.addChild(new lib.Background());

            // genrate boxes
            this.generateMultipleBoxes(this.gameData.amountOfBox);
        }
    }, {
        key: 'generateMultipleBoxes',
        value: function generateMultipleBoxes() {
            var amount = arguments.length <= 0 || arguments[0] === undefined ? 10 : arguments[0];

            for (var i = amount; i; i--) {
                var movieclip = new NumberedBox(this, i);
                this.stage.addChild(movieclip);

                // random position
                movieclip.x = Math.random() * (this.stage.width - movieclip.getBounds().width);
                movieclip.y = Math.random() * (this.stage.height - movieclip.getBounds().height);
            }
        }
    }, {
        key: 'handleClick',
        value: function handleClick(numberedBox) {
            var _this2 = this;

            if (this.gameData.isRightNUmber(numberedBox.number)) {
                this.stage.removeChild(numberedBox);
                this.gameData.nextNumber();

                // is game over?
                if (this.gameData.isGameWin()) {
                    var gameOverView = new lib.GameOverView();
                    this.stage.addChild(gameOverView);

                    gameOverView.restartBtn.on('click', function () {
                        return _this2.restartGame();
                    }.bind(this));
                }
            }
        }
    }, {
        key: 'retinalize',
        value: function retinalize() {
            this.stage.width = this.canvas.width;
            this.stage.height = this.canvas.height;

            var ratio = window.devicePixelRatio;
            if (ratio === undefined) {
                return;
            }

            this.canvas.setAttribute('width', Math.round(this.stage.width * ratio));
            this.canvas.setAttribute('hight', Math.round(this.stage.hight * ratio));

            this.stage.scaleX = this.stage.scaleX = ratio;

            // set CSS style 
            this.canvas.style.width = this.stage.width + 'px';
            this.canvas.style.height = this.stage.height + 'px';
        }
    }]);

    return Game;
}();

// start the game


var game = new Game();