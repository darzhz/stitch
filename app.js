//alert("js loaded");
let row = [];
let col = [];

function setup()
{
	createCanvas(windowWidth, windowHeight);
	// translate(width/2, height/2);
	//  scale(1,-1);
	background(0, 255, 200);
	stroke(255, 0, 0);
	strokeWeight(5);
	point(0, 0);
	stroke(0);
	strokeWeight(1);
	for (let i = 0; i < 10; i++)
	{
		//generating random values for rows
		row[i] = random(0, 1) >= 0.5 ? 1 : 0;
	}
	for (let i = 0; i < 10; i++)
	{
		//generating random values for col
		col[i] = random(0, 1) >= 0.5 ? 1 : 0;
	}
	let tik = width / 10;
	let tok = height / 10;
	for (var x = 0; x < width; x += width / 10)
	{
		for (var y = 0; y < height; y += height / 10)
		{
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}
	stroke("red");
	let x1 = 0;
	let x2 = tik;
	let y1 = 0;
	for (let j = 0; j <= row.length; j++)
	{
		for (let x = 0; x <= row.length; x++)
		{
			if (row[j]==0)
			{
				line(x1, y1, x2, y1);
				console.log("true : " + y1);
				x1 = x1 + (2 * tik);
				x2 = x2 + (2 * tik);
				stroke("yellow");
			}
			else
			{
				if (x == 0)
				{
					x1 = tik;
					x2 = tik + x1;
				}
				line(x1, y1, x2, y1);
				console.log("true : " + y1);
				x1 = x1 + (2 * tik);
				x2 = x2 + (2 * tik);
				stroke("red");
			}
			//console.log(`x1:${x1} x2: ${x2} levl : ${j}`);
		}
		if (j != 0)
		{
			y1 = j * tok;
		}
		console.log("weee" + y1)
	}
}