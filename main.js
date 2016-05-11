if(!Array.prototype.fill) {
	Array.prototype.fill = function(val) {
		for(var i = 0; i < this.length; i++) {
			this[i] = val;
		}
	}
}


var SimplexNoise=function(b){if(b==undefined){b=Math}this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];this.p=[];for(var a=0;a<256;a++){this.p[a]=Math.floor(b.random()*256)}this.perm=[];for(var a=0;a<512;a++){this.perm[a]=this.p[a&255]}this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]};SimplexNoise.prototype.dot=function(b,a,c){return b[0]*a+b[1]*c};SimplexNoise.prototype.noise=function(C,g){var m,k,h;var z=0.5*(Math.sqrt(3)-1);var r=(C+g)*z;var A=Math.floor(C+r);var y=Math.floor(g+r);var b=(3-Math.sqrt(3))/6;var q=(A+y)*b;var G=A-q;var f=y-q;var F=C-G;var e=g-f;var x,a;if(F>e){x=1;a=0}else{x=0;a=1}var D=F-x+b;var d=e-a+b;var B=F-1+2*b;var c=e-1+2*b;var p=A&255;var E=y&255;var w=this.perm[p+this.perm[E]]%12;var v=this.perm[p+x+this.perm[E+a]]%12;var u=this.perm[p+1+this.perm[E+1]]%12;var o=0.5-F*F-e*e;if(o<0){m=0}else{o*=o;m=o*o*this.dot(this.grad3[w],F,e)}var n=0.5-D*D-d*d;if(n<0){k=0}else{n*=n;k=n*n*this.dot(this.grad3[v],D,d)}var l=0.5-B*B-c*c;if(l<0){h=0}else{l*=l;h=l*l*this.dot(this.grad3[u],B,c)}return 70*(m+k+h)};SimplexNoise.prototype.noise3d=function(L,y,r){var B,A,z,x;var E=1/3;var P=(L+y+r)*E;var T=Math.floor(L+P);var R=Math.floor(y+P);var Q=Math.floor(r+P);var l=1/6;var O=(T+R+Q)*l;var N=T-O;var u=R-O;var b=Q-O;var q=L-N;var a=y-u;var M=r-b;var d,U,w;var c,S,v;if(q>=a){if(a>=M){d=1;U=0;w=0;c=1;S=1;v=0}else{if(q>=M){d=1;U=0;w=0;c=1;S=0;v=1}else{d=0;U=0;w=1;c=1;S=0;v=1}}}else{if(a<M){d=0;U=0;w=1;c=0;S=1;v=1}else{if(q<M){d=0;U=1;w=0;c=0;S=1;v=1}else{d=0;U=1;w=0;c=1;S=1;v=0}}}var p=q-d+l;var Y=a-U+l;var K=M-w+l;var o=q-c+2*l;var X=a-S+2*l;var J=M-v+2*l;var n=q-1+3*l;var W=a-1+3*l;var I=M-1+3*l;var G=T&255;var h=R&255;var V=Q&255;var m=this.perm[G+this.perm[h+this.perm[V]]]%12;var g=this.perm[G+d+this.perm[h+U+this.perm[V+w]]]%12;var f=this.perm[G+c+this.perm[h+S+this.perm[V+v]]]%12;var e=this.perm[G+1+this.perm[h+1+this.perm[V+1]]]%12;var H=0.6-q*q-a*a-M*M;if(H<0){B=0}else{H*=H;B=H*H*this.dot(this.grad3[m],q,a,M)}var F=0.6-p*p-Y*Y-K*K;if(F<0){A=0}else{F*=F;A=F*F*this.dot(this.grad3[g],p,Y,K)}var D=0.6-o*o-X*X-J*J;if(D<0){z=0}else{D*=D;z=D*D*this.dot(this.grad3[f],o,X,J)}var C=0.6-n*n-W*W-I*I;if(C<0){x=0}else{C*=C;x=C*C*this.dot(this.grad3[e],n,W,I)}return 32*(B+A+z+x)};


function caveNoise(noise, x, y) {
	return Math.round((noise.noise(x/64, y/8)))>0.5;
}


function CanvasAPI(ctx) {
	this.ctx = ctx;
	this.canvas = ctx.canvas;
}
CanvasAPI.prototype.loadImage = function(url) {
	var img = document.createElement("img");
	img.src = url;
	return img;
}
CanvasAPI.prototype.clear = function(color) {
	if(color) {
		this.ctx.fillStyle = color;
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
	} else {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
};
CanvasAPI.prototype.imageClear = function(img) {
	this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
};


var Block = {};

Block.Air = function() {
	this.types = ["air", "unminable", "walkablethrough"];
};

Block.Stone = function() {
	this.types = ["stone", "render_normal", "minable"];
	this.texture = Textures.stone;
}

Block.BackStone = function() {
	this.types = ["stone", "render_back", "minable"];
	this.texture = Textures.stone;
}

Block.RootStone = function() {
	this.types = ["rootstone", "render_normal", "unminable"]
	this.texture = Textures.rootstone;
}

Block.Ground = function() {
	this.types = ["ground", "render_normal", "minable"];
	this.texture = Textures.ground;
}

Block.Grass = function() {
	this.types = ["grass", "render_normal", "minable"];
	this.texture = Textures.grass;
}


Renderers = {};

Renderers.render_normal = function(capi, block, x, y) {
	capi.ctx.drawImage(block.texture, x*16, y*16);
}

Renderers.render_back = function(capi, block, x, y) {
	capi.ctx.drawImage(block.texture, x*16, y*16);
	ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
	ctx.fillRect(x*16, y*16, x*16+16, x*16+16);
}


function World() {
	var w = 256;
	var h = 64;
	this.worldplanemain = new Array(256);//.fill(new Array(64).fill(new Block.Air()));
	for (var i = 0; i < this.worldplanemain.length; i++) {
		var temp = new Array(64);
		for (var j = 0; j < temp.length; j++) {
			temp[j] = new Block.Air();
		}
		this.worldplanemain[i] = temp;
	}
	this.worldplaneback = new Array(256);//.fill(new Array(64).fill(new Block.Air()));
	for (var i = 0; i < this.worldplaneback.length; i++) {
		var temp = new Array(64);
		for (var j = 0; j < temp.length; j++) {
			temp[j] = new Block.Air();
		}
		this.worldplaneback[i] = temp;
	}
}

World.prototype.generate = function(seed) {
	var maxY = this.worldplanemain[0].length - 1;
	var noise = new SimplexNoise();
	for(var i = 0; i < this.worldplanemain.length; i++) {
		this.worldplanemain[i][maxY] = new Block.RootStone();
		var stonenois = Math.round(40+(noise.noise(i/64,40)%0.25*4));
		for(var j = stonenois; j < maxY; j++) {
			if(caveNoise(noise, i, j)) {
				this.worldplaneback[i][j] = new Block.BackStone();
				continue;
			}
			this.worldplanemain[i][j] = new Block.Stone();
		}
		var groundnois = Math.round(33+(noise.noise(i/64,33)%0.25*4));
		for(var j = groundnois; j < stonenois; j++) {
			if(caveNoise(noise, i, j)) {
				this.worldplaneback[i][j] = new Block.BackStone();
				continue;
			}
			this.worldplanemain[i][j] = new Block.Ground();
		}
		if(!caveNoise(noise, i, groundnois-1)) {
			this.worldplanemain[i][groundnois-1] = new Block.Grass();
		} else {
			this.worldplaneback[i][groundnois-1] = new Block.BackStone();
		}
	}
	for(var i = 1; i < 5; i++) {
		for(var j = 0; j < this.worldplanemain.length; j++) {
			if(noise.noise(j, maxY-i) % 1 < 0.15) {
				this.worldplanemain[j][maxY-i] = new Block.RootStone();
			}
		}
	}
}

World.prototype.render = function(capi) {
	for(var x = 0; x < this.worldplaneback.length; x++) {
		for (var y = 0; y < this.worldplaneback[x].length; y++) {
			for(var i = 0; i < this.worldplaneback[x][y].types.length; i++) {
				if(this.worldplaneback[x][y].types[i] in Renderers) {
					Renderers[this.worldplaneback[x][y].types[i]](capi, this.worldplaneback[x][y], x, y);
				}
			}
		}
	}
	for(var x = 0; x < this.worldplanemain.length; x++) {
		for (var y = 0; y < this.worldplanemain[x].length; y++) {
			for(var i = 0; i < this.worldplanemain[x][y].types.length; i++) {
				if(this.worldplanemain[x][y].types[i] in Renderers) {
					Renderers[this.worldplanemain[x][y].types[i]](capi, this.worldplanemain[x][y], x, y);
				}
			}
		}
	}
}


function updateScreen() {
	capi.clear("#87CEEB");
	world.render(capi);
	requestAnimationFrame(updateScreen);
}


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var capi = new CanvasAPI(ctx);
var Textures = {
	stone: capi.loadImage("tex/stone.png"),
	rootstone: capi.loadImage("tex/rootstone.png"),
	ground: capi.loadImage("tex/ground.png"),
	grass: capi.loadImage("tex/grass.png")
}
var world = new World();
world.generate(new Date().getTime());
requestAnimationFrame(updateScreen);
