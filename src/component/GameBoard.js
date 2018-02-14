var GameEvents = require("../events/GameEvents");


function GameBoard() {

   console.log("BLE");

   this.app = new PIXI.Application(1024, 768, {backgroundColor: 0x1099bb});
   window.document.body.appendChild(this.app.view);

   var w = this.app.screen.width/2, h = this.app.screen.height/2;

   this.squares = [
      this.createSquare(w-300, h-300),
      this.createSquare(w+300, h-300),
      this.createSquare(w+300, h+300),
      this.createSquare(w-300, h+300)
   ];

   var quad = this.squares.map(function(s) { return s.position });

   this.mainContainerSprite = new PIXI.projection.Sprite2d(PIXI.Texture.WHITE);
   this.mainContainerSprite.anchor.set(0.5);
   this.app.stage.addChild(this.mainContainerSprite);

   this.containerSprite = new PIXI.projection.Sprite2d(new PIXI.Texture.fromImage('resources/board.png'));
   //this.containerSprite = new PIXI.projection.Sprite2d(new PIXI.Texture.fromImage('resources/0546638b58d2d396f97ad69177f104fa.jpg'));
   this.containerSprite.anchor.set(0.5);

   this.mainContainerSprite.addChild(this.containerSprite);
   //this.app.stage.addChild(this.containerSprite);
   this.squares.forEach(function(s) { this.app.stage.addChild(s);}.bind(this));

   // Listen for animate update
   this.app.ticker.add(function (delta) {
      this.containerSprite.proj.mapSprite(this.containerSprite, quad);
   }.bind(this));


   this.squares.forEach(function(s) { this.addInteraction(s);}.bind(this));

   this.squares[0].position.x = 762;
   this.squares[0].position.y = 259;

   this.squares[1].position.x = 933;
   this.squares[1].position.y = 234;

   this.squares[2].position.x = 959;
   this.squares[2].position.y = 418;

   this.squares[3].position.x = 805;
   this.squares[3].position.y = 437;



   this.coords = { x: 762, y: 259, rotation: 0 }; // Start at (0, 0)
   this.tween = new TWEEN.Tween(this.coords) // Create a new tween that modifies 'coords'.
       .to({ x: 414, y: 171, rotation: 0}, 10000) // Move to (300, 200) in 1 second.
       .delay(0)
       .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
       .onUpdate(function() {
          this.squares[0].position.x = this.coords.x;
          this.squares[0].position.y = this.coords.y;
          console.log("ble");}.bind(this));

   this.tween.start(); // Start the tween immediately.

   this.animate();

   this.coords2 = { x: 933, y: 234, rotation: 0 }; // Start at (0, 0)
   this.tween = new TWEEN.Tween(this.coords2) // Create a new tween that modifies 'coords'.
       .to({ x: 822, y: 132, rotation: 0}, 10000) // Move to (300, 200) in 1 second.
       .delay(0)
       .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
       .onUpdate(function() {
          this.squares[1].position.x = this.coords2.x;
          this.squares[1].position.y = this.coords2.y;
          console.log("ble");}.bind(this));
   this.tween.start(); // Start the tween immediately.

   this.coords3 = { x: 959, y: 418, rotation: 0 }; // Start at (0, 0)
   this.tween = new TWEEN.Tween(this.coords3) // Create a new tween that modifies 'coords'.
       .to({ x: 940, y: 758, rotation: 0}, 10000) // Move to (300, 200) in 1 second.
       .delay(0)
       .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
       .onUpdate(function() {
          this.squares[2].position.x = this.coords3.x;
          this.squares[2].position.y = this.coords3.y;
          console.log("ble");}.bind(this));
   this.tween.start(); // Start the tween immediately.

   this.coords4 = { x: 805, y: 437, rotation: 0 }; // Start at (0, 0)
   this.tween = new TWEEN.Tween(this.coords4) // Create a new tween that modifies 'coords'.
       .to({ x: 0, y: 605, rotation: 0}, 10000) // Move to (300, 200) in 1 second.
       .delay(0)
       .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
       .onUpdate(function() {
          this.squares[3].position.x = this.coords4.x;
          this.squares[3].position.y = this.coords4.y;
          console.log("ble");}.bind(this));
   this.tween.start(); // Start the tween immediately.

   this.thing = new PIXI.Graphics();
   //this.thing.drawRect(0, 0, 300, 200);
   this.thing.beginFill(0x8bc5ff, 0.4);
   this.thing.drawCircle(0, 0, 50);

   this.app.stage.addChild(this.thing);

   this.thing.position.x = 850;
   this.thing.position.y = 300;
   this.thing.lineStyle(0);


   this.containerSprite.mask = this.thing;



   this.coords5 = { x: 850, y: 300, rotation: 0 }; // Start at (0, 0)
   this.tween = new
       TWEEN.Tween(this.coords5) // Create a new tween that modifies 'coords'.
       .to({ x: 533, y: 236, rotation: 0}, 10000) // Move to (300, 200) in 1 second.
       .delay(0)
       .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
       .onUpdate(function() {
          this.thing.position.x = this.coords5.x;
          this.thing.position.y = this.coords5.y;
          this.thing.width += 2;
          this.thing.height += 2;
          console.log("ble");}.bind(this));
   this.tween.start(); // Start the tween immediately.

   this.circleMask = new PIXI.Graphics();
   this.circleMask.beginFill(0x8bc5ff, 0.4);
   this.circleMask.drawRect(-300, -150, 600, 300);
   //this.circleMask.drawCircle(w, h, 150);
   this.circleMask.position.x = w;
   this.circleMask.position.y = h;
   this.circleMask.lineStyle(0);
   this.app.stage.addChild(this.circleMask);
   //this.mainContainerSprite.addChild(this.circleMask);


  this.mainContainerSprite.mask = this.circleMask;

}

GameBoard.prototype.animate = function animate( time ) {
   var id = requestAnimationFrame(animate);
   var result = TWEEN.update(time);
   if(!result) cancelAnimationFrame(id);
}

GameBoard.prototype.addInteraction = function addInteraction(obj) {
   obj.interactive = true;
   obj
       .on('pointerdown', this.onDragStart.bind(this))
       .on('pointerup', this.onDragEnd.bind(this))
       .on('pointerupoutside', this.onDragEnd.bind(this))
       .on('pointermove', this.onDragMove.bind(this));
}

GameBoard.prototype.onDragStart = function onDragStart(event) {
   var obj = event.currentTarget;
   obj.dragData = event.data;
   obj.dragging = 1;
   obj.dragPointerStart = event.data.getLocalPosition(obj.parent);
   obj.dragObjStart = new PIXI.Point();
   obj.dragObjStart.copy(obj.position);
   obj.dragGlobalStart = new PIXI.Point();
   obj.dragGlobalStart.copy(event.data.global);
}

GameBoard.prototype.snap = function snap(obj) {
   if (obj == this.containerSprite) {
      //obj.position.set(0);
   } else {
      obj.position.x = Math.min(Math.max(obj.position.x, 0), this.app.screen.width);
      obj.position.y = Math.min(Math.max(obj.position.y, 0), this.app.screen.height);

      this.squares.forEach(function(square) { console.log("X:" + square.position.x + "   Y:" + square.position.y);});
      console.log("------------");

   }
}

GameBoard.prototype.onDragEnd = function onDragEnd(event) {
   var obj = event.currentTarget;
   if (obj.dragging == 1) {
      //toggle(obj);
   } else {
      this.snap(obj);
   }
   obj.dragging = 0;
   obj.dragData = null;

   //console.log("X:" + obj.position.x + "Y:" + obj.position.y);
   // set the interaction data to null
}

GameBoard.prototype.onDragMove = function onDragMove(event) {
   var obj = event.currentTarget;
   if (!obj.dragging) return;
   var data = obj.dragData; // it can be different pointer!
   if (obj.dragging == 1) {
      // click or drag?
      if (Math.abs(data.global.x - obj.dragGlobalStart.x) +
          Math.abs(data.global.y - obj.dragGlobalStart.y) >= 3) {
         // DRAG
         obj.dragging = 2;
      }
   }
   if (obj.dragging == 2) {
      var dragPointerEnd = data.getLocalPosition(obj.parent);
      // DRAG
      obj.position.set(
          obj.dragObjStart.x + (dragPointerEnd.x - obj.dragPointerStart.x),
          obj.dragObjStart.y + (dragPointerEnd.y - obj.dragPointerStart.y)
      );
   }
}

GameBoard.prototype.createSquare = function createSquare(x, y) {
   var square = new PIXI.Sprite(PIXI.Texture.WHITE);
   square.tint = 0xff0000;
   square.factor = 1;
   square.anchor.set(0.5);
   square.position.set(x, y);
   return square;
}




module.exports = GameBoard;