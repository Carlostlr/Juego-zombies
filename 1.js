var x=0;
var z=0;
var xzombie3=150;
var xzombie2=200;
var xzombie=400;
var x2=230;
var x3=300;
var x5=0;
var y=90;
var y1=40;
var y2=0;
var y3=0;
var y4=90;
var y42=90;
var y43=90;
var y5=0;
var intervalo;
var lienzo;
var ctx;
var ctxzombie;
var imagen;
var imagen1;
var imagen2;
var imagen3;
var imagen4;
var imagen5;
var imagen6;
var imagen7;
var estoy=1;
var estoy1=1;
var perder=0;
var tio=0;
var bala=0;
var bala1=0;

var muerto=0;
var muerto1=0;
var muerto2=0;
var vzombie=1.5;
var nzombi=0;
var zzz;

var xa=30;
var ya=113;
var xb=4;
var yb=1;

var velo=2;
var zombi2=0;
var zombi3=0;
var texto;
var puntos=0;


function tecla() {
var evento = evento || window.event;
var boton = evento.charCode || evento.keyCode;
if (boton == '119') {tio=1;}
else if (boton == '32') {bala=1;}
}

function inicio() {
	lienzo=document.getElementById("lienzo1");
	ctx=lienzo.getContext("2d");
	ctxzombie=ctx;
	imagen=new Image();
	imagen1=new Image();
 	imagen2=new Image();
    imagen3=new Image();
	imagen4=new Image();
	imagen5=new Image();
	imagen6=new Image();
	imagen7=new Image();}
	
function dibuja() {
	ctx.clearRect(0,0,300,300);
	
	imagen3.src="./luna.png";
	ctx.drawImage(imagen3,x2,y2);
	
	imagen4.src="./nube.png";
	x3=x3-1;
	ctx.drawImage(imagen4,x3,y3);
	if (x3 <= -150){x3=310}
	
	if (tio == 1) {
		imagen2.src="./fondo.png";
		ctx.drawImage(imagen2,z,y1);
		z=z-3;
		xzombie=xzombie-3.5;
		if (z <= -590) {z=0;}}
	else {imagen2.src="./fondo.png";ctx.drawImage(imagen2,z,y1);}	
	ctx.drawImage(imagen,x,y);
	
	if (bala == 1) {ctx.fillStyle="black";ctx.fillRect(xa,ya,xb,yb); xa=xa+10;bala1++
		if (ya >= y4){
			if (ya <= y4+40) {
				if (xa+4 >= xzombie) {muerto++;bala1=0;
			}}}}
	
	if (bala1 == 1) {var ob=document.getElementById("disparo");ob.play();}
	
	if (muerto >= 2) {xzombie=250;muerto=0;bala=0;xa=30;vzombie=vzombie+velo;
	texto=document.getElementById("texto");
	zzz=document.getElementById("zombi");
	texto.innerHTML="";zzz.innerHTML="";
	puntos=puntos+5;nzombi++;
	texto.innerHTML=puntos;zzz.innerHTML=nzombi;}
	
	if (vzombie >= 15) {velo=0;zombi2=1}
	
	if (x > 260) {x=0};
	if (tio == 1) {
		if(estoy==1){imagen.src="./tio/1.png";estoy=2;}
		else if(estoy==2){imagen.src="./tio/2.png";estoy=3;}
		else if(estoy==3){imagen.src="./tio/3.png";estoy=4;}
		else {imagen.src="./tio/4.png";estoy=1;}}
	else {imagen.src="./tio/2.png";}
	
	ctxzombie.drawImage(imagen1,xzombie,y4);
	if (xzombie > 20) {xzombie=xzombie-vzombie;};
	if(estoy1==1){imagen1.src="./zombie/0.png";estoy1=2;}
	else if(estoy1==2){imagen1.src="./zombie/1.png";estoy1=3;}
	else if(estoy1==3){imagen1.src="./zombie/2.png";estoy1=4;}
	else if(estoy1==4){imagen1.src="./zombie/3.png";estoy1=5;}
	else if(estoy1==5){imagen1.src="./zombie/4.png";estoy1=6;}
	else if(estoy1==6){imagen1.src="./zombie/5.png";estoy1=7;}
	else if(estoy1==7){imagen1.src="./zombie/6.png";estoy1=8;}
	else if(estoy1==8){imagen1.src="./zombie/7.png";estoy1=9;}
	else if(estoy1==9){imagen1.src="./zombie/8.png";estoy1=0;}
	else {imagen1.src="./zombie/9.png";estoy1=1;
		 var ob=document.getElementById("zombiess");ob.play();}
	
	if (muerto1 >= 2) {xzombie2=200;muerto1=0;bala=0;xa=30;
	texto=document.getElementById("texto");
	zzz=document.getElementById("zombi");
	texto.innerHTML="";zzz.innerHTML="";
	puntos=puntos+5;nzombi++;
	texto.innerHTML=puntos;zzz.innerHTML=nzombi;}
	
	ctxzombie.drawImage(imagen6,xzombie2,y42);
		if (zombi2==1){
			
			if (ya >= y42){
				if (ya <= y42+40) {
					if (xa+4 >= xzombie2) {muerto1++
				}}}
	zombi3++;		
	xzombie2=xzombie2-10;
	if(estoy1==1){imagen6.src="./zombie/0.png";estoy1=2;}
	else if(estoy1==2){imagen6.src="./zombie/1.png";estoy1=3;}
	else if(estoy1==3){imagen6.src="./zombie/2.png";estoy1=4;}
	else if(estoy1==4){imagen6.src="./zombie/3.png";estoy1=5;}
	else if(estoy1==5){imagen6.src="./zombie/4.png";estoy1=6;}
	else if(estoy1==6){imagen6.src="./zombie/5.png";estoy1=7;}
	else if(estoy1==7){imagen6.src="./zombie/6.png";estoy1=8;}
	else if(estoy1==8){imagen6.src="./zombie/7.png";estoy1=9;}
	else if(estoy1==9){imagen6.src="./zombie/8.png";estoy1=0;}
	else {imagen6.src="./zombie/9.png";estoy1=1;}
		}
	
	if (muerto2 >= 2) {xzombie3=150;muerto2=0;bala=0;xa=30;
	texto=document.getElementById("texto");
	zzz=document.getElementById("zombi");
	texto.innerHTML="";zzz.innerHTML="";
	puntos=puntos+5;nzombi++;
	texto.innerHTML=puntos;zzz.innerHTML=nzombi;}
	
	ctxzombie.drawImage(imagen7,xzombie3,y43);
		if (zombi3>=25){
			
			if (ya >= y43){
				if (ya <= y43+40) {
					if (xa+4 >= xzombie3) {muerto2++
				}}}
			
	if (zombi3 >= 25){xzombie3=xzombie3-6;
	if(estoy1==1){imagen7.src="./zombie/0.png";estoy1=2;}
	else if(estoy1==2){imagen7.src="./zombie/1.png";estoy1=3;}
	else if(estoy1==3){imagen7.src="./zombie/2.png";estoy1=4;}
	else if(estoy1==4){imagen7.src="./zombie/3.png";estoy1=5;}
	else if(estoy1==5){imagen7.src="./zombie/4.png";estoy1=6;}
	else if(estoy1==6){imagen7.src="./zombie/5.png";estoy1=7;}
	else if(estoy1==7){imagen7.src="./zombie/6.png";estoy1=8;}
	else if(estoy1==8){imagen7.src="./zombie/7.png";estoy1=9;}
	else if(estoy1==9){imagen7.src="./zombie/8.png";estoy1=0;}
	else {imagen7.src="./zombie/9.png";estoy1=1;}
		}}
	
	if (xzombie <= 24) {
	if (estoy1==1){imagen1.src="./zpega/1.png";estoy1=2;}
	else if(estoy1==2){imagen1.src="./zpega/2.png";estoy1=3;}
	else {imagen1.src="./zpega/3.png";estoy1=1;perder++}}
	if (perder == 2) {imagen5.src="./perder.jpg";ctx.drawImage(imagen5,x5,y5);perder=perder+10;ctx.drawImage(imagen5,x5,y5)}
	if (perder >= 15) {ctx.drawImage(imagen5,x5,y5);clearInterval(intervalo)}
	
	if (xzombie2 <= 24) {
	if (estoy1==1){imagen1.src="./zpega/1.png";estoy1=2;}
	else if(estoy1==2){imagen1.src="./zpega/2.png";estoy1=3;}
	else {imagen1.src="./zpega/3.png";estoy1=1;perder++}}
	if (perder == 2) {imagen5.src="./perder.jpg";ctx.drawImage(imagen5,x5,y5);perder=perder+10;ctx.drawImage(imagen5,x5,y5)}
	if (perder >= 15) {ctx.drawImage(imagen5,x5,y5);clearInterval(intervalo)}
	
	if (xzombie3 <= 24) {
	if (estoy1==1){imagen1.src="./zpega/1.png";estoy1=2;}
	else if(estoy1==2){imagen1.src="./zpega/2.png";estoy1=3;}
	else {imagen1.src="./zpega/3.png";estoy1=1;perder++}}
	if (perder == 2) {imagen5.src="./perder.jpg";ctx.drawImage(imagen5,x5,y5);perder=perder+10;ctx.drawImage(imagen5,x5,y5)}
	if (perder >= 15) {ctx.drawImage(imagen5,x5,y5);clearInterval(intervalo)}
	}