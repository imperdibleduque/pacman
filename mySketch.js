/*Que un número n de packman(3000 por ejemplo) se despalcen de
izquierda a derecha a una velocidad v determinada.
*/
let n=3000;//número de packman
let v=1;//velocidad de avance de los packman
//los arrays hay que declararlos fuera de draw()
//declaro un array vacío
let x=[];//será la coordenada x del packman


function setup() {
	createCanvas(windowWidth, windowHeight);
	//createCanvas(240,120);
	noStroke();
	//cargo el array con valores. Utilizo un bucle for
	//n valores significarán n pacKman
	for(let i=0; i<n;i++){
		//la coordenada x va desde -1000 a casi todo el ancho
		x[i]=random(-1000, windowWidth-200);//aleatoria
	}
}

function draw() {
	background(0);//fondo negro
	//recorremos el array para acceder a los valores 
	//utilizamos un bucle for
	//dibujamos a todos los packman (n)
	for(let i=0; i<x.length;i++){
		//la posición x del packman se incrementa. Todo el array 
		//apunta un poco más a la derecha
		//viene a ser la velocidad de avance en el eje x
		x[i]+=v;
		//la posición y de los n packman va
		//desde 0 a la altura de la pantalla 
		var y= i*windowHeight/n;//i es a n como y a windowHeight
		arc(x[i],y ,12,12,45*PI/180,315*PI/180);
	}
}