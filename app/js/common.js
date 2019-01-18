var	board =  $('#board');
var square = '<div id = "$id" class = "square $color"></div>'
var newFigure = '<div id = "s$id" class = "figure">$figure</div>'


window.onload = function(){
	start();
}
function start(){
	map = Array(64);
	showSquare();
	showFiguresAll('rnbqkbnrpppppppp11111111111111111111111111111111PPPPPPPPRNBQKBNR');

}


function setDraggable(){
	$('.figure').draggable();
}

function setDroppable(){
	$('.square').droppable({
		drop: function(event, ui){
			var stepTo = event.target.id;
			var stepFrom = ui.draggable.attr('id').substring(1);
			moveFigure(stepFrom, stepTo);
		}
	})
}

function showSquare(){
	for(var i = 0; i < 64; i++){
		board.append(square
			.replace('$color', getColor(i) ? 'black' : 'white')
			.replace('$id', i));
	}
	setDroppable();
	
}

function showFigures(coord, figure){
	map[coord] = figure;
	$("#" + coord).html(newFigure.replace('$id',  + coord).replace('$figure', getCheeseSymbol(figure) ));

	setDraggable();
}

function showFiguresAll(figures){

	for(var i = 0; i < 64; i++){
		showFigures(i, figures.charAt(i));
	}
}

function moveFigure(stepFrom, stepTo){
	console.log('move from ' + stepFrom + ' to ' + stepTo);
	figure = map[stepFrom];
		console.log(map);
	showFigures(stepFrom, '1');
	showFigures(stepTo, figure);
}

function getCheeseSymbol(figure){
	switch(figure){
		case 'K' : return '&#9812;';
		case 'Q' : return '&#9813;';
		case 'R' : return '&#9814;';
		case 'B' : return '&#9815;';
		case 'N' : return '&#9816;';
		case 'P' : return '&#9817;';
		case 'k' : return '&#9818;';
		case 'q' : return '&#9819;';
		case 'r' : return '&#9820;';
		case 'b' : return '&#9821;';
		case 'n' : return '&#9822;';
		case 'p' : return '&#9823;';
		default : return '';
	}
}
function getColor(count){
	return ( count % 8 + Math.floor(count / 8) ) % 2;
}
