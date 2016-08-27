(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.youWon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AApBOIgFgHIhEh3IAABqIAHAAIAJAAQAHAAADACQAEACAAAFQAAAGgDACQgDACgKAAIghAAIgGAAQgFAAgCgDQgCgCAAgFQAAgFACgCQADgCAIAAIACAAIAAh1IgDAAQgLAAgEgCQgEgCAAgFQAAgFAEgCQADgCAHAAIAIgBIANAAQAGAAACACQADABADAGIBABxIAAhnIgFAAIgJAAQgHAAgDgCQgEgCAAgFQAAgGADgBQADgDAJAAIAfAAIAGAAQAFAAADADQACACAAAFQAAAFgDACQgDACgHAAIgCAAIAACDQAAAEgCABQgCACgGAAg");
	this.shape.setTransform(198.4,18.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgyA7QgUgYAAgjQAAgjAUgXQAUgXAeAAQAeAAAUAXQAVAXAAAjQAAAkgVAXQgUAXgeAAQgeAAgUgXgAgigtQgMAQAAAdQAAAdANARQAMARAVAAQAVAAANgRQANgRAAgdQAAgcgNgRQgNgRgVAAQgVAAgNARg");
	this.shape_1.setTransform(182.4,18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAjBOIgFgBIgCgFIgchZIgYBZIgDAFIgFABIgJAAIgEgBQgCgCAAgEIgUiCIgCAAQgFAAgCgCQgDgCAAgFQAAgEACgCQACgDADAAIArAAQAHAAADACQADACAAAFQAAAFgDACQgDACgGAAIgTAAIAPBnIAWhNQACgEABgBIAGgBIADAAIAGABIADAFIAZBNIANhnIgUAAQgGAAgDgCQgDgCAAgFQAAgFADgCQACgCAIAAIAqAAQADAAACADQADADAAADQAAAFgDACQgCACgFAAIgCAAIgTCCIgBAFQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_2.setTransform(166.2,18);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgoBAQgPgQAAgcIAAhQIgCAAQgIAAgDgCQgDgCAAgFQAAgFACgDQADgCAFAAIAGAAIAbAAQAKAAADACQADACAAAGQAAAFgDACQgEACgJAAIgGAAIAABHIABAUQACAIADAFQAFAIAIAEQAIAFAIAAQATAAAJgMQAIgLAAgZIAAhJIgHAAQgKAAgEgCQgDgCAAgFQAAgGADgCQADgCAIAAIAdAAIAHAAQAEAAADACQACADAAAFQAAAFgDACQgDACgHAAIgCAAIAABMQAAAggOAQQgPAQgcAAQgYAAgQgQg");
	this.shape_3.setTransform(133.8,18.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgyA7QgUgYAAgjQAAgjAUgXQAUgXAeAAQAeAAAUAXQAVAXAAAjQAAAkgVAXQgUAXgeAAQgeAAgUgXgAgigtQgMAQAAAdQAAAdANARQAMARAVAAQAVAAANgRQANgRAAgdQAAgcgNgRQgNgRgVAAQgVAAgNARg");
	this.shape_4.setTransform(117.6,18);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeBOQgIAAgEgCQgCgCAAgGQAAgFADgCQADgCAKAAIATAAIAAgsIgshJIgCAAQgIAAgDgCQgDgCAAgFQAAgFADgCQACgDAFAAIAGAAIAeAAQAIAAADADQADACAAAFQgBAFgDACQgDACgJAAIgEAAIAeA6IAhg6IgGAAQgHAAgDgCQgCgCAAgFQAAgGACgCQACgCALAAIADAAIAUAAQAKAAAEADQACABAAAGQAAAFgCACQgEACgIAAIgCAAIgtBLIAAAqIAUAAQAKAAADACQADACAAAFQAAAGgDACQgDACgIAAg");
	this.shape_5.setTransform(101.4,18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ApcClIAAgVIS5AAIAAAVgAgQgfQgIgHABgKQgBgLAIgHQAHgIAJAAQAKAAAHAIQAIAHgBALQABAKgIAHQgHAIgKAAQgJAAgHgIgApciQIAAgUIS5AAIAAAUg");
	this.shape_6.setTransform(150,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,34.5);


(lib.restartBtnIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(128,219,238,0.929)").s().p("ADaCUYhABThtAhhhgiYhigihDhcAAhoYAAhnBDhcBigiYBhgiBtAhBABTIgKAIYg9hPhngfhcAgYhdAgg/BYAABhYAABiA/BYBdAgYBcAgBngfA9hPg");
	this.shape.setTransform(68.9,83.1,2.075,2.216,0,-36,-33.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AoUIVQg0g0gog5IgKgNQh4i1AAjmQAAjlB4i1QAshAA6g6QDdjeE3AAQE4AADdDeQDdDdABE3QAADviDC5QgnA5g0A0QjdDdk4ABQk3gBjdjdgAkuo1QjXBwhcDiQgOAlgLAlQgvCpAvCtIAMAkQAlBwBHBXQBHBbBpA/QBYA1BcAZQCPAsCYgZQDvgoCdi5IAVgaQCJiwAAjfIggAAIAAgJIhLAAQgRiZhyhxIgXgWICAhgQiLi5jcg5QgagJgcgGQhLgRhHAAQibAAiSBNg");
	this.shape_1.setTransform(75.5,75.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(128,219,238,0.929)").s().p("AhqAUICChlIBTCjg");
	this.shape_2.setTransform(92,34.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AieKAQhcgYhYg1QhphAhIhaQhGhYgmhwIgLgkQgwitAwipQALglAOglQBbjhDYhxQDXhxDoA1QAcAGAaAJQDGA9CBCsIkrDgQg/hUhmgXQhjgXhdAxQhdAxgnBhQgnBhAhBhQAhBjBaA2QBaA2BkgQQBngRBEhRQBEhPAAhoIErAAIBMAAIAAAJQgDDgiNCwIgOAQQidC6juAnQg5AJg0AAQhPAAhMgTgAA4mWIDXA/IhSilg");
	this.shape_3.setTransform(75.5,77.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151,151);


(lib.NumberedBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 98
	this.numberText = new cjs.Text("33", "27px 'Arial'");
	this.numberText.name = "numberText";
	this.numberText.textAlign = "center";
	this.numberText.lineHeight = 32;
	this.numberText.lineWidth = 49;
	this.numberText.setTransform(24.7,11.3);

	this.timeline.addTween(cjs.Tween.get(this.numberText).wait(1));

	// Layer 4 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ajej5IG7AAQAdAAAAAWIAAHHQAAAWgdAAIm7AAQgbAAAAgWIAAnHQAAgWAbAAg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#72ECD4").s().p("AjtD6IAAgCIgBAAIAAgBIgBgBIgBAAIgBAAIgCgCIgBgBIgBAAIgBgBIgDgCIAAnjIACgBIAAgBIAAgBIABAAIABgCIABAAIACgBIHjAAIABABIgBACIABABIAAABIACADIABAAIAAAAIACAAIADgCIAAHgIgBABIgBAAIgCABIgBACIAAABIgBABIAAABIgBAAIAAABIAAAAIgBACIgBAAIAAAAIAAADg");
	this.shape_1.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,54.2,52.3);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,204,0.898)").s().p("AiHdgImZc9ICN+FIqZarIGe86IuBXaIKf6oIxGTOIOF3WIzhOUIRKzJI1MI1ITjuNI2CDBIVNouI2Di5IWDi5I1NouIWCDBIzjuNIVMI1IxKzIIThOTIuF3VIRGTNIqf6oIOBXbIme87IKZasIiN+FIGZc9ICH+GICIeGIGY89IiNeFIKa6sImec7IOB3bIqfaoIRGzNIuFXVIThuTIxJTIIVLo1IzjONIWCjBI1NIuIWDC5I2DC5IVNIuI2CjBITjONI1Lo1IRJTJIzhuUIOFXWIxGzOIKfaoIuB3aIGec6Iqa6rICNeFImY89IiIeGg");
	this.shape.setTransform(147,202);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B6DC").s().p("A3bfPMAAAg+eMAu2AAAMAAAA+eg");
	this.shape_1.setTransform(150,200);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.4,-179.5,558.8,763);


(lib.RestartBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.restartBtnIn();
	this.instance.setTransform(75.5,75.5,1,1,0,0,0,75.5,75.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:48.8},0).wait(1));

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.459)").s().p("AoUIVQjejcAAk5QAAk4DejdQDdjcE3gBQE5ABDcDcQDeDdAAE4QAAE5jeDcQjcDek5AAQk3AAjdjeg");
	this.shape.setTransform(75.5,75.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151,151);


(lib.gameOverView = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// YOU WON
	this.instance = new lib.youWon();
	this.instance.setTransform(150,76.2,1,1,0,0,0,150,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// restartBtn
	this.restartBtn = new lib.RestartBtn();
	this.restartBtn.setTransform(150.5,201.5,1,1,0,0,0,75.5,75.5);
	new cjs.ButtonHelper(this.restartBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.restartBtn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,59,300,218);


// stage content:
(lib.assets = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gameOver
	this.instance = new lib.gameOverView();
	this.instance.setTransform(150,16.8,1,1,0,0,0,150,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// numberedBox
	this.instance_1 = new lib.NumberedBox();
	this.instance_1.setTransform(172,360,0.94,0.98,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// background
	this.instance_2 = new lib.Background();
	this.instance_2.setTransform(150,200,1,1,0,0,0,150,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.6,20.5,558.8,763);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;