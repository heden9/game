//Constructor
var Sprite = function(name, painter, behaviors){
	if(name !== undefined)
		this.name = name;
	if(painter !== undefined)
		this.painter = painter;
	this.lifeValue = 6;
	this.top = 0;
	this.left = 0; // Fixed typo: letft -> left
	this.width = 10;
	this.height = 10;
	this.velocityX = 0;
	this.velocityY = 0;
	this.gravity = .1;
	this.visible = true;
	// this.animating = false; // Unused property removed
	this.behaviors = behaviors || [];
	this.die = false;
	this.protect = -1; // Used in game.js for player invulnerability timing
	this.angle = 0; // Available for rotation, though current game doesn't use it with context.rotate as expected
	this.spritesheet = new Image();
	// this.onattack = false; // Unused property removed
	// this.skillTime = []; // Unused property removed (game.js uses direct properties on ghost for cooldowns)
	return this;
};
//Prototype
Sprite.prototype = {
	paint: function(context){
		if(this.painter !== undefined && this.visible){
			this.painter.paint(this, context);
		}	
	},
	update: function(context, time){
		for(var i = 0;i < this.behaviors.length; ++i){
			this.behaviors[i].execute(this, context, time);
		}
	}
};

var ImagePainter = function(imageUrl){
	this.image = new Image();
	this.image.src = imageUrl;
};

ImagePainter.prototype = {
	paint: function(sprite, context){
		if(this.image.complete){
			context.drawImage(this.image, sprite.left, sprite.top, sprite.width, sprite.height);
		}
	}
};

var SpriteSheetPainter = function(cells){
	this.cells = cells || [];
	this.cellIndex = 0;
};

SpriteSheetPainter.prototype = {
	advance: function(num){
		if(this.cellIndex == this.cells.length-1 && num == 1){
			this.cellIndex = 0;
		}else if(this.cellIndex != this.cells.length-1){
			this.cellIndex++;
		}else if(this.cellIndex == this.cells.length-1 && num == 0){
			this.cellIndex = this.cells.length-1;
		}
	},
	
	paint: function(sprite, context){
		if (!this.cells || this.cells.length === 0 || !this.cells[this.cellIndex]) {
			// Do not paint if cells are not defined, empty, or current cellIndex is invalid
			return; 
		}
		var cell = this.cells[this.cellIndex];
		context.save();
		// Note: context.rotate(sprite.angle) rotates around canvas origin (0,0).
		// For rotation around sprite center, translation would be needed.
		// Current game does not use sprite.angle, so this is not an active issue.
		context.rotate(sprite.angle);
		context.drawImage(sprite.spritesheet, cell.left, cell.top, cell.width, cell.height, sprite.left, sprite.top, cell.width, cell.height);
		context.restore();
	}
}; 
