var bird;
var pipes = [];
var score = 0;
function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	bird = new Bird();
	pipes.push(new Pipe());
}

function draw() {
	background(0);

	for (var i=pipes.length-1; i >= 0; i--){
		pipes[i].show();
		pipes[i].update();

		if(pipes[i].hits(bird)){
			score -= 1;
			document.querySelector('.score').innerHTML = score;
			document.querySelector('.score-wrap').classList.add('red');
			setTimeout(function(){
				document.querySelector('.score-wrap').classList.remove('red');
			}, 1000);
		}

		if(pipes[i].offscreen()){
			pipes.splice(i, 1);
		}
	}

	bird.update();
	bird.show();

	if(frameCount % 100 == 0){
		pipes.push(new Pipe());
	}
}

function keyPressed() {
	if(key == ' '){
		bird.up();
	}
}

function Score() {
	setInterval(function(){
		score += 5;
		document.querySelector('.score').innerHTML = score;
		document.querySelector('.score-wrap').classList.add('green');
		setTimeout(function(){
			document.querySelector('.score-wrap').classList.remove('green');
		}, 1000);
	}, 5000);
}
Score()