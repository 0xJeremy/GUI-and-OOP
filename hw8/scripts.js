function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class enemy {
	constructor(type, x, y) {
		this.speedx = getRandomInt(1, 5);
		this.speedy = getRandomInt(1, 5);
		this.sizex = getRandomInt(10, 40);
		this.sizey = this.sizex;
		this.posx = getRandomInt(0, canvas.width-this.sizex);
		this.posy = getRandomInt(0, canvas.height-this.sizey);
		this.vehicle = type;
		this.flag = true;
	}

	draw() {
		if(this.vehicle == "plane") {
			c.fillStyle = "blue";
			c.fillRect(this.posx, this.posy, this.sizex, this.sizey);
		}
		else if(this.vehicle == "boat") {
			c.fillStyle = "orange";
			c.fillRect(this.posx, this.posy, this.sizex, this.sizey);
		}
	}

	update() {
		if(this.flag) {
			this.posx = this.posx + this.speedx;
			this.posy = this.posy + this.speedy;
		}
		else {
			this.posx = this.posx - this.speedx;
			this.posy = this.posy - this.speedy;
		}
		if(this.posx + this.sizex > canvas.width
			|| this.posy + this.sizey > canvas.height) {
			this.flag = false;
		}
		if(this.posx < 0 || this.posy < 0) {
			this.flag = true;
		}
	}

}

function add_plane() {
	enemies.push(new enemy("plane", enemies.length*5, enemies.length*5));
	draw();
}
function add_boat() {
	enemies.push(new enemy("boat", enemies.length*5, enemies.length*5));
	draw();
}

function fire() {
	enemies.pop();
	draw();
}
function freeze() {
	move_flag = !move_flag;
}

function nuke() {
	enemies = []
	draw();
}

function animate() {
	if(move_flag) {
		for(i = 0; i < enemies.length; i++) {
		enemies[i].update();
		}
	}
	draw();
	window.requestAnimationFrame(animate);
}

function draw() {
	c.fillStyle = "gray";
	c.fillRect(0, 0, canvas.width, canvas.height);
	for(i = 0; i < enemies.length; i++) {
		enemies[i].draw();
	}
}

var canvas = document.getElementById("myCanvas");
var c = canvas.getContext("2d");
var enemies = [];
draw();
var move_flag = true;
window.requestAnimationFrame(animate);