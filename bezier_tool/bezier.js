
var x1=32;
var y1=20;
var x2=80;
var y2=5;
var x3=80;
var y3=75;
var x4=30;
var y4=75;
var d1=false;
var d2=false;
var d4=false;
var d3=false;

function setup() {
  createCanvas(600,600);
  textSize(14);
}

function draw() {
background(255,240,255);
  funv();
  noFill();
  stroke(3);
  bezier(x1,y1,x2,y2, x3, y3, x4, y4);
  stroke(0);
  ellipse(x1,y1,10,10);
    ellipse(x4,y4,10,10);
  stroke(200);
  ellipse(x2,y2,10,10);
  line(x1, y1, x2, y2);
  ellipse(x3,y3,10,10);
  line(x3,y3,x4,y4);

  noStroke();
  fill(0,0,255,100);
  text("("+x1+","+y1+")",x1,y1);
  text("("+x2+","+y2+")",x2,y2);
  text("("+x3+","+y3+")",x3,y3);
  text("("+x4+","+y4+")",x4,y4);
  
    if(d1){
        x1=mouseX;
    y1=mouseY;
  }
      if(d2){
        x2=mouseX;
    y2=mouseY;
  }
      if(d3){
        x3=mouseX;
    y3=mouseY;
  }
      if(d4){
        x4=mouseX;
    y4=mouseY;
  }
}

function mouseDragged(){
  
  if(dist(mouseX,mouseY,x1,y1)<10){
d1=true;
    
  }
    if(dist(mouseX,mouseY,x2,y2)<10){
d2=true;
    
  }
    if(dist(mouseX,mouseY,x3,y3)<10){
d3=true;
    
  }
    if(dist(mouseX,mouseY,x4,y4)<10){
d4=true;
    
  }
  

  
}

function mouseReleased(){

    d1=false;
     d2=false;
      d3=false;
       d4=false;

}

function funv(){
  fill(100);
  noStroke();
  textSize(14);
  text("bezier("+x1+","+y1+","+x2+","+y2+","+x3+","+y3+","+x4+","+y4+");",width-300,height-10);
  
}