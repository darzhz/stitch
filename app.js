//alert("js loaded");
let row = [];
let col = [];

function setup()
{
	createCanvas(windowWidth, windowHeight);
	// translate(width/2, height/2);
	//  scale(1,-1);
	background(255);
	stroke(255, 0, 0);
	strokeWeight(5);
	point(0, 0);
	stroke(0);
	strokeWeight(1);
	generateRand(row,col,10);
	let tik = width / 10;
	let tok = height / 10;
	/*for (var x = 0; x < width; x += tik)
	{
		for (var y = 0; y < height; y += tok)
		{
			//line(x, 0, x, height);
			//line(0, y, width, y);
		}
	}*/
	stroke("red");
	stitch(10,tik,tok);
	frameRate(5);
}
function draw(){
  background(0);
  let tik = width / 10;
	let tok = height / 10;
  generateRand(row,col,10);
  stitch(10,tik,tok);
}
function stitch(size,tik,tok){
  for(let i=0;i<size;i++){
	  //drawing a horizontal line
	  if(col[i] == 0){
	    drawOdd(width,tik,i*tok,true);
	  }else{
	    drawEven(width,tik,i*tok,true);
	  }
	}
	for(let i=0;i<size;i++){
	  //drawing a vertical line
	  if(row[i] == 0){
	    drawOddVert(height,tok,i*tik);
	  }else{
	    drawEvenVert(height,tok,i*tik);
	  }
	}
}
function drawOdd(size,tik,y2){
  let x1 = 0;
  let x2 = tik;
  while(x2<=size){
    line(x1,y2,x2,y2);
    x1 = x1+(2*tik);
    x2 = x2+(2*tik);
  }
}
function drawEven(size,tik,y2){
  let x1 = tik;
  let x2 = tik + x1;
  while(x2<=size){
    line(x1,y2,x2,y2);
    x1 = x1+(2*tik);
    x2 = x2+(2*tik);
  }
}
function drawOddVert(size,tik,x1){
  let y1 = 0;
  let y2 = tik;
  while(y2<=size){
    line(x1,y1,x1,y2);
    y1 = y1+(2*tik);
    y2 = y2+(2*tik);
  }
}
function drawEvenVert(size,tik,x1){
  let y1 = tik;
  let y2 = tik + y1;
  while(y2<=size){
    line(x1,y1,x1,y2);
    y1 = y1+(2*tik);
    y2 = y2+(2*tik);
  }
}
function generateRand(row,col,size){
  if(row.length>=size){
    row.length = 0;
    col.length = 0;
  }
  for (let i = 0; i < size; i++)
  	{
  		//generating random values for rows
  		row[i] = random(0, 1) >= 0.5 ? 1 : 0;
  	}
  	for (let i = 0; i < size; i++)
  	{
  		//generating random values for col
  		col[i] = random(0, 1) >= 0.5 ? 1 : 0;
  	}
}